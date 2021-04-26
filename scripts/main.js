const burgerMenuButton = document.querySelector('#menuBurgerButton')
const menuBody = document.querySelector('#menuBody')

burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle('menu__burger--active')
    menuBody.classList.toggle('menu__body--active')
})

new Swiper('.rewiews__carousel', {
    navigation: {
        prevEl: '.rewiews__prev',
        nextEl: '.rewiews__next'
    },

    pagination: {
        el: '.rewiews__pagination'
    },

    // slidesPerView: 2,

    breakpoints: {
        320: {
            slidesPerView: 1
        },

        992: {
            slidesPerView: 2
        }
    }
   
})

new Swiper('.header__carousel', {
    navigation: {
        prevEl: '.header-prev',
        nextEl: '.header-next'
    },

    spaceBetween: 30
})


new Swiper('.external-slider', {
    navigation: {
        prevEl: '.external-slider__prev',
        nextEl: '.external-slider__next'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',

        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
        }
      },

      

    spaceBetween: 30
})


new Swiper('.internal-slider', {
    navigation: {
        prevEl: '.examples__prev',
        nextEl: '.examples__next'
    },

    spaceBetween: 30,
    nested: true,
    allowTouchMove: false
})
