import {
    adaptive
} from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive() });

if (window.scrollY > 200) {
    document.querySelector('.navbar').classList.add('active');
} else {
    document.querySelector('.navbar').classList.remove('active');
}
window.addEventListener('scroll', function(e) {
    if (this.scrollY > 200) {
        this.document.querySelector('.navbar').classList.add('active');
    } else {
        this.document.querySelector('.navbar').classList.remove('active');
    }
})

document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar__menu')) {
        document.querySelector('.navbar__menu_list').classList.remove('active');
    }
    if (!e.target.closest('.social')) {
        document.querySelector('.social').classList.remove('active');
    }
})
window.addEventListener('scroll', function() {
    document.querySelector('.navbar__menu_list').classList.remove('active');
    document.querySelector('.social').classList.remove('active');
})

function navbarMenu(btn) {
    btn.nextElementSibling.classList.toggle('active');
}
window.navbarMenu = navbarMenu;

function social() {
    document.querySelector('.social').classList.toggle('active');
}
window.social = social;