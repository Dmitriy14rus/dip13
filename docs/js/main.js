
// слайды Типы лестниц
const swiper = new Swiper('.typesStairs__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.typesStairs__btn-next',
        prevEl: '.typesStairs__btn-prev',
    },
});
// ===================================================

// Маска номера телефона +7(__)__-__
// $.fn.setCursorPosition = function (pos) {
//     if ($(this).get(0).setSelectionRange) {
//         $(this).get(0).setSelectionRange(pos, pos);
//     } else if ($(this).get(0).createTextRange) {
//         var range = $(this).get(0).createTextRange();
//         range.collapse(true);
//         range.moveEnd('character', pos);
//         range.moveStart('character', pos);
//         range.select();
//     }
// };

$(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
});
$(document).ready(function () {
    $("#phone1").mask("+7 (999) 999-99-99");
});

// $("#center_ok").click(function () {
//     $(this).setCursorPosition(3);
// }).mask("+7(999) 999-9999");
// $("#center_not_ok").mask("+7(999) 999-9999");
// =======================================

const swiper1 = new Swiper('.examples__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },


    // Navigation arrows
    navigation: {
        nextEl: '.examples__swiper-button-next',
        prevEl: '.examples__swiper-button-prev',
    },

    pagination: {
        el: '.examples__swiper-pagination',
        clickable: true,

    },
});
// ================================================================

const element1One = document.getElementById('element1');
const element1Two = document.getElementById('one');
const element2One = document.getElementById('element2');
const element2Two = document.getElementById('two');
const element3One = document.getElementById('element3');
const element3Two = document.getElementById('three');
const element4One = document.getElementById('element4');
const element4Two = document.getElementById('four');
const element5One = document.getElementById('element5');
const element5Two = document.getElementById('five');
const element6One = document.getElementById('element6');
const element6Two = document.getElementById('six');

element1One.addEventListener('mouseover', () => {
    element1Two.style.border = '4px solid #202020';
});

element1One.addEventListener('mouseout', () => {
    element1Two.style.border = '2px solid #202020';
});

element2One.addEventListener('mouseover', () => {
    element2Two.style.border = '4px solid #202020';
});

element2One.addEventListener('mouseout', () => {
    element2Two.style.border = '2px solid #202020';
});

element3One.addEventListener('mouseover', () => {
    element3Two.style.border = '4px solid #202020';
});

element3One.addEventListener('mouseout', () => {
    element3Two.style.border = '2px solid #202020';
});

element4One.addEventListener('mouseover', () => {
    element4Two.style.border = '4px solid #202020';
});

element4One.addEventListener('mouseout', () => {
    element4Two.style.border = '2px solid #202020';
});

element5One.addEventListener('mouseover', () => {
    element5Two.style.border = '4px solid #202020';
});

element5One.addEventListener('mouseout', () => {
    element5Two.style.border = '2px solid #202020';
});

element6One.addEventListener('mouseover', () => {
    element6Two.style.border = '4px solid #202020';
});

element6One.addEventListener('mouseout', () => {
    element6Two.style.border = '2px solid #202020';
});
// ================================================================

// Модалка из 4 шагов=============================================

const btn = document.querySelector('.header__btn')
const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')
const modal4 = document.querySelector('.modal4')
const btn_closed1 = document.querySelector('.modal__close-btn')
const btn_closed2 = document.querySelector('.modal__close-btn2')
const btn_closed3 = document.querySelector('.modal__close-btn3')
const btn_closed4 = document.querySelector('.modal__close-btn4')
const btn_modal_next = document.querySelector('.modal__next')
const btn_modal_next2 = document.querySelector('.modal__next2')
const btn_modal_next3 = document.querySelector('.modal__next3')
const btn_modal_end = document.querySelector('.modal__end')

btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

btn_modal_next.addEventListener('click', () => {
    modal.classList.remove('modal--open')
    modal2.classList.add('modal--open')
})

btn_modal_next2.addEventListener('click', () => {
    modal2.classList.remove('modal--open')
    modal3.classList.add('modal--open')
})

btn_modal_next3.addEventListener('click', () => {
    modal3.classList.remove('modal--open')
    modal4.classList.add('modal--open')
})
btn_modal_end.addEventListener('click', () => {
    modal4.classList.remove('modal--open')
})





btn_closed1.addEventListener('click', () => {
    modal.classList.remove('modal--open')
})
btn_closed2.addEventListener('click', () => {
    modal2.classList.remove('modal--open')
})
btn_closed3.addEventListener('click', () => {
    modal3.classList.remove('modal--open')
})
btn_closed4.addEventListener('click', () => {
    modal4.classList.remove('modal--open')
})




document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modal.classList.remove('modal--open')
    }
})
document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal2.classList.contains('modal--open')) {
        modal2.classList.remove('modal--open')
    }
})
document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal3.classList.contains('modal--open')) {
        modal3.classList.remove('modal--open')
    }
})
document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal4.classList.contains('modal--open')) {
        modal4.classList.remove('modal--open')
    }
})






