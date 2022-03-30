import refs from './refs.js';

const {
  body,
  calculate,
  calculateBackdrop,
  calculateBackdropClose,
  footerFormButtonClose,
  footerFormThanksBackdrop,
} = refs;

calculate.addEventListener('click', () => {
  calculateBackdrop.classList.remove('is-hidden');
  body.classList.add('no-scroll');
});

calculateBackdropClose.addEventListener('click', () => {
  calculateBackdrop.classList.add('is-hidden');
  body.classList.remove('no-scroll');
});

footerFormButtonClose.addEventListener('click', () => {
  footerFormThanksBackdrop.classList.add('is-hidden');
});
