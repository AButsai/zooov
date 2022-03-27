const refs = {
  burger: document.querySelector('[data-open]'),
  menuClose: document.querySelector('[data-close]'),
  mobileMenu: document.querySelector('.mobile'),
  links: document.querySelectorAll('.js-menu__link'),
};

const handleToggleClass = () => {
  refs.burger.classList.toggle('hidden-btn');
  refs.menuClose.classList.toggle('hidden-btn');
  refs.mobileMenu.classList.toggle('mobile-open');
};

refs.burger.addEventListener('click', handleToggleClass);
refs.menuClose.addEventListener('click', handleToggleClass);

refs.links.forEach(link => {
  link.addEventListener('click', handleToggleClass);
});
