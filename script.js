var navMenu = document.querySelector('#nav-menu');
var navMenuToggle = document.querySelector(".meno-taggle-icon");
navMenuToggle.addEventListener('click', function () {
    if (navMenu.classList.contains('hide-nav-meno')) {
        navMenu.classList.remove('hide-nav-meno');
    }
    else {
        navMenu.classList.add('hide-nav-meno');
    }
});