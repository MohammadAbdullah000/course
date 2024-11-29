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

// Get elements
const contactButton = document.getElementById('contactButton');
const contactPopup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');

// Open the popup
contactButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactPopup.style.display = 'flex';
});

// Close the popup
closePopup.addEventListener('click', () => {
  contactPopup.style.display = 'none';
});

// Close the popup when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === contactPopup) {
    contactPopup.style.display = 'none';
  }
});
