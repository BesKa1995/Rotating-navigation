const close = document.querySelector('.circle__button--close')
const open = document.querySelector('.circle__button--open')
const container = document.querySelector('.container')

const circleContainer = document.querySelector('.circle-container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
circleContainer.addEventListener('click', () => circleContainer.classList.add('show-nav'))
circleContainer.addEventListener('click', () => circleContainer.classList.remove('show-nav'))
// open.addEventListener('click', () => {
//   console.log('test')
// })