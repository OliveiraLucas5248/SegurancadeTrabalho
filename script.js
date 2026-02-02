// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Fecha o menu no mobile após clicar
    nav.classList.remove('active');
  });
});

// Menu mobile (hambúrguer)
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
