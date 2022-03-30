const refs = {
  burger: document.querySelector('[data-open]'),
  menuClose: document.querySelector('[data-close]'),
  mobileMenu: document.querySelector('.mobile'),
  links: document.querySelectorAll('.js-menu__link'),
};

refs.burger.addEventListener('click', () => {
  refs.menuClose.classList.remove('hidden-btn');
  refs.mobileMenu.classList.add('mobile-open');
});

refs.menuClose.addEventListener('click', () => {
  refs.mobileMenu.classList.remove('mobile-open');
  refs.burger.classList.remove('hidden-btn');
});

refs.links.forEach(link => {
  link.addEventListener('click', () => {
    refs.mobileMenu.classList.remove('mobile-open');
    refs.burger.classList.remove('hidden-btn');
  });
});
