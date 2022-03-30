const refs = {
  body: document.querySelector('body'),
  // diet-card
  dietCrds: document.querySelectorAll('[data-card]'),
  // diet-card-backdrop
  dietBackdropClose: document.querySelector('.js-diet-backdrop__btn-close'),
  dietBackdrop: document.querySelector('.diet-backdrop'),
  backdropTitle: document.querySelectorAll('.diet-backdrop__title'),
  backdropText: document.querySelectorAll('.diet-backdrop__text'),
  backdropImage: document.querySelector('.diet-backdrop__img'),
  dietCardBtnOrder: document.querySelector('.diet-backdrop__btn'),
  dietBackdropList: document.querySelector('.diet-backdrop__list'),
  dietBackdropContentWrap: document.querySelector('.diet-backdrop__content-wrap'),
  dietBackdropForm: document.querySelector('.diet-backdrop__form'),
  dietBackdropThanksWrap: document.querySelector('.diet-backdrop__thanks-wrap'),

  // counter
  increment: document.querySelector('[data-increment]'),
  discrement: document.querySelector('[data-discrement]'),
  number: document.querySelector('[data-number]'),
  total: document.querySelector('[data-total]'),
  select: document.querySelector('[data-select]'),

  // calculate-form
  calculate: document.querySelector('[data-calculate]'),
  calculateBackdrop: document.querySelector('.calculate-backdrop'),
  calculateBackdropClose: document.querySelector('.calculate__button'),

  // footer
  footerFormThanksBackdrop: document.querySelector('.footer-form__thanks-backdrop'),
  footerFormButtonClose: document.querySelector('.footer-form__button-backdrop'),

  // forms
  forms: document.querySelectorAll('.form'),
};

export default refs;
