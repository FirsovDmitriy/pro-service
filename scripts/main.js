const burgerMenButton = document.querySelector('.menu__burger')
const menuBody = document.querySelector('.menu__body')

burgerMenButton.addEventListener('click', () => {
    burgerMenButton.classList.toggle('menu__burger--active')
    menuBody.classList.toggle('menu__body--active')
})

new Swiper('.rewiews__carousel', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
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
