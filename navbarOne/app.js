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
        navObj.burgerIcon.classList.add('fa-bars')
        navObj.burgerIcon.classList.remove('fa-x')
    } else if (!navObj.navMenu.classList.contains('showNav')){
        navObj.navMenu.classList.toggle('showNav')
        navObj.burgerIcon.classList.remove('fa-bars')
        navObj.burgerIcon.classList.add('fa-x')
    }
}

navObj.burgerIcon.addEventListener('click', toggleNav)



