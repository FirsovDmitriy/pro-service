const burgerMenButton = document.querySelector('.menu__burger')
console.log(burgerMenButton)

const menuBody = document.querySelector('.menu__body')

burgerMenButton.addEventListener('click', () => {
    burgerMenButton.classList.toggle('menu__burger--active')
    menuBody.classList.toggle('menu__body--active')
})
