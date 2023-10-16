// Toggle 
const navbarNav = document.querySelector('.navbar-nav');
const teks = document.querySelector('.teks');
const gambar = document.querySelector('.gambar');


// klik menu
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
};
// JIKA KLIK DILUAR
const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }


    const teksPosition = teks.getBoundingClientRect().top;
    const gambarPosition = gambar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Jika elemen hampir muncul di dalam layar
    if (teksPosition - screenHeight <= 0 && !teks.classList.contains('animate')) {
        teks.classList.add('animate');
    }

    if (gambarPosition - screenHeight <= 0 && !gambar.classList.contains('animate')) {
        gambar.classList.add('animate');
    }
});

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});


