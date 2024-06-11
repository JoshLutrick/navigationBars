const navObj = {
    navMenu: document.querySelector('.navContainer'),
    burgerIcon: document.querySelector('.fa-bars'),
    open(){
        this.navMenu.classList.remove('.hideNav')
    }
}



function toggleNav(){
    if(navObj.navMenu.classList.contains('showNav')){
        navObj.navMenu.classList.toggle('showNav')
    } else if (!navObj.navMenu.classList.contains('showNav')){
        navObj.navMenu.classList.toggle('showNav')
    }
}

navObj.burgerIcon.addEventListener('click', toggleNav)



