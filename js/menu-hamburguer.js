document.addEventListener('DOMContentLoaded', function () {
  const menuHamburguer = document.querySelector('.menu-hamburguer-icon');
  const headerModal = document.querySelector('.header-modal-bg');
  const overlay = document.querySelector('.overlay');
  const closeHamburguer = document.querySelector('.close-hamburguer-icon')

  menuHamburguer.addEventListener('click', () => {
    headerModal.classList.toggle('open');
    overlay.classList.toggle('');
  });

  closeHamburguer.addEventListener('click', () => {
    headerModal.classList.toggle('open');
  })
});