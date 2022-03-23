document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.principal');
ScrollReveal().reveal('.servicios', { delay: 500 });
ScrollReveal().reveal('.social', { delay: 500 });
ScrollReveal().reveal('.opciones', { delay: 500 });
ScrollReveal().reveal('.logos-marca', { delay: 500 });
ScrollReveal().reveal('footer', { delay: 500 });