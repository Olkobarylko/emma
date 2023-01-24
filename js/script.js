// let numbers = document.querySelectorAll('.number');

// function offset(el) {
//     const rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     }
// }

// function olko() {
//     if (window.pageYOffset == offset(numbers[0]).top) {
//         numbers.forEach((item) => {
//             let count = +item.innerHTML;
//             let sum = 0;
//             let a = (2000 / +item.innerHTML);
//             let inteval = setInterval(function () {
//                 sum++;
//                 if (count > 1000) {
//                     sum += 9;
//                 }
//                 if (sum == count) {
//                     clearInterval(inteval);
//                 }
//                 item.innerHTML = sum;
//             }, a)
//         })
//     }
//     console.log('top', offset(numbers[0]).top)
//     console.log('scroll', window.pageYOffset)
// }

// window.addEventListener('scroll', olko)

// var number = document.querySelector('.number'),
//     numberTop = number.getBoundingClientRect().top,
//     start = +number.innerHTML,
//     end = +number.dataset.max;

// window.addEventListener('scroll', function onScroll() {
//     if (window.pageYOffset > numberTop - window.innerHeight / 2) {
//         this.removeEventListener('scroll', onScroll);
//         var interval = setInterval(function () {
//             number.innerHTML = ++start;
//             if (start == end) {
//                 clearInterval(interval);
//             }
//         }, 1)
//     }
// })

let numbers = document.querySelectorAll('.number');
var bodyRect = document.body.getBoundingClientRect();
var rect = numbers[0].getBoundingClientRect();
numberTop = {
    top: rect.top - bodyRect.top
};

numbers.forEach(item => {
    var start = +item.innerHTML,
        end = +item.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > (numberTop.top - window.innerHeight)) {
            this.removeEventListener('scroll', onScroll);
            let a = (2300 / end);
            var interval = setInterval(function () {
                if (+end > 1000) {
                    start += 9
                    item.innerHTML = ++start;
                } else {
                    item.innerHTML = ++start;
                }
                if (start == end) {
                    clearInterval(interval);
                }
            }, a)
        }
    })
});

function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

var insurerSwiper = new Swiper(".insurers-section__swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".insurers-section__swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".pillars-section__swiper", {
  spaceBetween: 25,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".pillars-section__swiper-pagination",
    clickable: true,
  },
});

let burger_btn = document.querySelector('.header__burger-btn');
let burger_menu = document.querySelector('.header__burger-menu');

burger_btn.addEventListener('click', toggleMenu);

function toggleMenu() {
  burger_menu.classList.toggle('active');
  burger_btn.classList.toggle('active');
}

let footerContacts = document.querySelector('.footer__contacts');
let footerMoreBtn = document.querySelector('.footer__bottom-block-more');
let footerContactsStatus = true;

function footerShowContacts() {
  if (footerContactsStatus) {
    footerContacts.style.paddingBottom = footerContacts.scrollHeight + 'px';
    footerContacts.style.paddingTop = '25px';
    footerContacts.style.borderBottomWidth = '1px';
    footerContactsStatus = false;
    footerMoreBtn.style.transform = 'rotate(180deg)';
  } else {
    footerContacts.style.paddingBottom = '0px';
    footerContacts.style.borderBottomWidth = '0px';
    footerContacts.style.paddingTop = '0px';
    footerContactsStatus = true;
    footerMoreBtn.style.transform = 'rotate(0deg)'
  }
}

let advantagesBlockRight = document.querySelector('.advantages-section__info-block_right')
let advantagesTopMoreItem = document.querySelector('.advantages-section__more-img_top');
let advantagesBottomMoreItem = document.querySelector('.advantages-section__more-img_bottom');
let advantagesMoreBottom = document.querySelector('.advantages-section__more_bottom');
let advantagesMoreTop = document.querySelector('.advantages-section__more_top');

let advantageListTop = document.querySelector('.advantages-section__list_top');
let advantageListBottom = document.querySelector('.advantages-section__list_bottom');
advantageListTop.style.paddingBottom = advantageListTop.scrollHeight + 'px';
advantageListTop.style.marginTop = '30px';
advantagesMoreTop.style.transform = 'rotate(0deg) translate(0px, 3px)';

let advantageListTopStatus = false;
let advantageListBottomStatus = true;

let mql1 = window.matchMedia('(max-width: 768px)');

if (mql1.matches) {
  advantageListTop.style.paddingBottom = advantageListTop.scrollHeight + 81 + 'px';
}

function advantageListTopShow() {
  advantagesMoreTop.style.transform = '';
  advantageListTop.style.height = 0;
  if (advantageListTopStatus) {
    advantageListTopStatus = false;
    advantageListTop.style.paddingBottom = advantageListTop.scrollHeight + 51 + 'px';
    advantageListTop.style.marginTop = '30px';
  } else {
    advantageListTop.style.paddingBottom = '0px';
    advantageListTop.style.marginTop = '0px';
    advantageListTopStatus = true;
  }
  advantagesMoreTop.classList.toggle('active');
};

function advantageListBottomShow() {
  advantageListTop.style.marginTop = '0px';
  if (advantageListBottomStatus) {
    advantageListBottomStatus = false;
    advantageListBottom.style.paddingBottom = advantageListBottom.scrollHeight + 51 + 'px';
    advantageListBottom.style.marginTop = '30px';
  } else {
    advantageListBottom.style.paddingBottom = '0px';
    advantageListBottom.style.marginTop = '0px';
    advantageListBottomStatus = true;
  }
  advantagesMoreBottom.classList.toggle('active');
}

advantagesTopMoreItem.addEventListener('click', advantageListTopShow);

advantagesBottomMoreItem.addEventListener('click', advantageListBottomShow);