(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__open__btn'),
    closeMenuBtn: document.querySelector('.menu__close__btn'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
