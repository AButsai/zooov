import refs from './refs.js';

const {
  body,
  dietCardBtnOrder,
  dietBackdropList,
  dietBackdropContentWrap,
  dietBackdropForm,
  dietBackdropClose,
  dietBackdrop,
  backdropImage,
} = refs;

dietCardBtnOrder.addEventListener('click', () => {
  body.classList.add('no-scroll');
  dietBackdropList.classList.add('hidden');
  dietBackdropContentWrap.classList.add('hidden');
  dietBackdropForm.classList.remove('hidden');
  if (window.innerWidth > 1200) {
    backdropImage.classList.add('diet-backdrop__img-form');
  }
});

dietBackdropClose.addEventListener('click', () => {
  body.classList.remove('no-scroll');
  dietBackdrop.classList.add('is-hidden');
  dietBackdropList.classList.remove('hidden');
  dietBackdropContentWrap.classList.remove('hidden');
  dietBackdropForm.classList.add('hidden');
  backdropImage.classList.remove('diet-backdrop__img-form');
});
