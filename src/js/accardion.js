const accardion = document.querySelector('.js-faq__list');
const accardeonButtons = accardion.querySelectorAll('.js-faq__btn');
const accardionContent = document.querySelectorAll('.faq__description');

accardeonButtons.forEach((btn, indexBtn) => {
  btn.addEventListener('click', () => {
    accardeonButtons.forEach((button, indexButton) => {
      button.classList.remove('faq__btn-active');
      button.nextElementSibling.classList.add('faq__description-hidden');
    });
    btn.classList.toggle('faq__btn-active');
    btn.nextElementSibling.classList.toggle('faq__description-hidden');
  });
});
