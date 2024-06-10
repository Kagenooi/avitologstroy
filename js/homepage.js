import {
    adaptive
} from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive() });



function subtables(btn) {
    let subtables = btn.closest('.table').querySelectorAll('.table__subtable');
    let subtns = btn.closest('.table').querySelectorAll('.table__btns_wrapper_btn');
    for (let i = 0; i < subtns.length; i++) {
        subtns[i].classList.remove('active');
    }
    for (let i = 0; i < subtables.length; i++) {
        subtables[i].classList.remove('active');
    }
    btn.closest('.table').querySelector(`.${btn.dataset.table}`).classList.add('active');
    btn.classList.add('active');

    if (document.body.clientWidth < 520) {
        btn.closest('.table').querySelector('.table__btns_wrapper').style.maxHeight = null;
    }
}
window.subtables = subtables;

let table = document.querySelectorAll('.table');
let btns = document.querySelectorAll('.caseBtn');
let caseInner = 0;
function tables(btn) {
    for (let i = 0; i < table.length; i++) {
        table[i].classList.remove('active');
    }
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    btn.classList.add('active');
    console.log(document.querySelector(`.portfolio__list_pr[data-table="${btn.dataset.table}"]`));
    document.querySelector(`#${btn.dataset.table}`).classList.add('active');
    document.querySelector(`#${btn.dataset.table}`).querySelector('.defaultTable').click();

    if (caseInner > 0) {
        document.querySelector('.cases__btns_btn_txt').innerHTML = btn.innerHTML;
        caseInner = 0;
    }
    if (document.body.clientWidth < 520) {
        document.querySelector('.cases__btns_wrapper').style.maxHeight = null;
    }
}
window.tables = tables;
document.querySelector('.default').click();


function acc(btn) {
    if (btn.nextElementSibling.style.maxHeight) {
        btn.nextElementSibling.style.maxHeight = null;
        btn.nextElementSibling.classList.remove('active');
        btn.classList.remove('active');
    } else {
        btn.classList.add('active');
        btn.nextElementSibling.classList.add('active');
        btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.style.maxHeight + btn.nextElementSibling.scrollHeight + 'px';
    }
}
window.acc = acc;


if (window.scrollY > 200) {
    document.querySelector('.navbar').classList.add('active');
} else {
    document.querySelector('.navbar').classList.remove('active');
}
window.addEventListener('scroll', function (e) {
    if (this.scrollY > 200) {
        this.document.querySelector('.navbar').classList.add('active');
    } else {
        this.document.querySelector('.navbar').classList.remove('active');
    }
})


function casesDrop(btn) {
    if (btn.nextElementSibling.style.maxHeight) {
        if (document.querySelector('.cases__btns_btn_txt').innerHTML == 'Выбрать кейс') {
            document.querySelector('.cases__btns_btn_txt').innerHTML = 'Выбрать кейс';
        }
        caseInner = 0;
        btn.nextElementSibling.style.maxHeight = null;
    } else {
        caseInner = 1;
        btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.style.maxHeight + btn.nextElementSibling.scrollHeight + 'px';
    }
}
window.casesDrop = casesDrop;

function casesSubdrop(btn) {
    if (btn.nextElementSibling.style.maxHeight) {
        btn.nextElementSibling.style.maxHeight = null;
    } else {
        btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.style.maxHeight + btn.nextElementSibling.scrollHeight + 'px';
    }
}
window.casesSubdrop = casesSubdrop;

function navbarMenu(btn) {
    btn.nextElementSibling.classList.toggle('active');
}
window.navbarMenu = navbarMenu;
let socialBtns = document.querySelectorAll('.social__link');
let socialIndex = 1;
document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar__menu')) {
        document.querySelector('.navbar__menu_list').classList.remove('active');
    }
    if (!e.target.closest('.popupBtn')) {
        if (!e.target.closest('.popup__wrapper')) {
            document.querySelector('.popup').classList.remove('active');
            document.querySelector('.popup__form').classList.remove('active');
        }
    }
    if (!e.target.closest('.social')) {
        document.querySelector('.social').classList.remove('active');
    }
})







function social() {
    if (socialIndex > 0) {
        for (let i = 0; i < socialBtns.length; i++) {
            socialBtns[i].classList.add('active');
        }
        socialIndex = 0;
    } else {
        for (let i = 0; i < socialBtns.length; i++) {
            socialBtns[i].classList.add('active');
        }
        socialIndex = 1;
    }
    document.querySelector('.social').classList.toggle('active');
}
window.social = social;

function popupClose() {
    document.querySelector('.popup').classList.remove('active');
    document.querySelector('.popup__form').classList.remove('active');
}
window.popupClose = popupClose;

function popupToggle() {
    document.querySelector('.popup').classList.toggle('active');
    document.querySelector('.popup__form').classList.toggle('active');
    if (document.querySelector('.social').classList.contains('active')) {
        social();
    }
}
window.popupToggle = popupToggle;

window.addEventListener('scroll', function () {
    document.querySelector('.social').classList.remove('active');
    if (socialIndex < 1) {
        for (let i = 0; i < socialBtns.length; i++) {
            socialBtns[i].classList.add('active');
        }
        socialIndex = 1;
    }

    document.querySelector('.navbar__menu_list').classList.remove('active');
})


let socIndex = 0;
setInterval(() => {
    if (socialIndex > 0) {
        for (let i = 0; i < socialBtns.length; i++) {
            socialBtns[i].classList.remove('active');
        }
        socialBtns[socIndex].classList.add('active');
        socIndex = socIndex + 1;
        if (socIndex > socialBtns.length - 1) {
            socIndex = 0;
        }
    }
}, 2000);


document.querySelector('.header__desc_slider').style.height = document.querySelector('.header__desc_secondTitle').clientHeight + 'px';
let animTitle = document.querySelectorAll('.header__desc_secondTitle');
let index = 0;
setInterval(() => {
    for (let i = 0; i < animTitle.length; i++) {
        animTitle[i].classList.remove('active');
    }
    setTimeout(() => {
        animTitle[index].classList.add('active');
    }, 300);
    index = index + 1;
    if (index > animTitle.length - 1) {
        index = 0;
    }
}, 2000);


const mounth = document.querySelectorAll('.mounth');
let currentDate = new Date();
let mounths = [
    'Январе',
    'Феврале',
    'Марте',
    'Апреле',
    'Мае',
    'Июне',
    'Июле',
    'Августе',
    'Сентябре',
    'Октябре',
    'Ноябре',
    'Декабре'
]
for (let i = 0; i < mounth.length; i++) {
    mounth[i].innerHTML = mounths[currentDate.getMonth()];
}

setTimeout(() => {
    if (!document.querySelector('.popup').classList.contains('acitive')) {
        popupToggle();
    }
}, 10000);