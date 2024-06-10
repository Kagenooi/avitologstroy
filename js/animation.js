window.onload = function () {
    const adaptiveWrapper = document.querySelector('#adaptive');
    const fade = document.querySelectorAll('.fade');
    
    let adaptiveZoom = adaptiveWrapper.style.zoom;
    let trueHeight = document.documentElement.clientHeight / adaptiveZoom;

    for (let i = 0; i < fade.length; i++) {
        if (fade[i].getBoundingClientRect().top < trueHeight - (fade[i].clientHeight / 2)) {
            fade[i].classList.add('active');
        } else {
            fade[i].classList.remove('active');
        }
    }

    window.addEventListener('scroll', function () {
        for (let i = 0; i < fade.length; i++) {
            if (fade[i].getBoundingClientRect().top < trueHeight - (fade[i].clientHeight / 2)) {
                fade[i].classList.add('active');
            } else {
                fade[i].classList.remove('active');
            }
        }
    })
}