let menu = document.querySelector('.menu')
let listMenu = document.querySelectorAll('.header-link')

document.addEventListener('click', e => {
    console.log(e.target)
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    
    if(!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return

    if(isDropdownButton){
        menu.classList.toggle('active')
        return
    }

    menu.classList.remove('active')
})

listMenu.forEach((item) => item.addEventListener('click', () =>  menu.classList.remove('active')))