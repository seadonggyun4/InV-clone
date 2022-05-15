console.log('header!! 😁')



const menuMBtn = document.querySelector('.menu-m-btn')
const menuM = document.querySelector('.menu-m')

menuMBtn.addEventListener('click', () => {
  menuM.classList.toggle('active')
})