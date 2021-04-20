const burgerMenButton = document.querySelector('.menu__burger')
const menuBody = document.querySelector('.menu__body')

burgerMenButton.addEventListener('click', () => {
    burgerMenButton.classList.toggle('menu__burger--active')
    menuBody.classList.toggle('menu__body--active')
})

new Swiper('.rewiews__carousel', {
    navigation: {
        prevEl: '.arrow-group__prev',
        nextEl: '.arrow-group__next'
    },

    pagination: {
        el: '.swiper-pagination'
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
    }
})