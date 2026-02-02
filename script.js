// MENU MOBILE
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// SCROLL SUAVE + FECHAR MENU
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    nav.classList.remove('active');
  });
});
