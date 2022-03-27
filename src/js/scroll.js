const links = document.querySelectorAll('.js-menu__link');

const handleScrollPage = e => {
  e.preventDefault();

  const link = e.target;
  const id = link.getAttribute('href').substring(1);
  const section = document.getElementById(id);

  seamless.scrollIntoView(section, {
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  });
};

links.forEach(link => {
  link.addEventListener('click', handleScrollPage);
});
