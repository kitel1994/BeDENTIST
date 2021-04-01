const hamb = document.getElementById('hamb')
const menu = document.getElementById('menu')
const search = document.getElementById('search')
const angle_up = document.getElementById('angle_up')

hamb.addEventListener('click', () => {
    console.log('dziala')
    menu.classList.toggle('active')
    hamb.classList.toggle('active-col')
    search.classList.toggle('active')
})

document.addEventListener('scroll', () => {
    if (this.scrollY > 120) {
        angle_up.classList.add('active')
    } else {
        angle_up.classList.remove('active')
    }
})

angle_up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})