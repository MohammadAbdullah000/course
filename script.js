const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

document.getElementById('scrollLeft').addEventListener('click', function() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('scrollRight').addEventListener('click', function() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
});

