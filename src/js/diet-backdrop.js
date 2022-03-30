import refs from './refs.js';

const { dietCrds, backdropTitle, backdropText, backdropImage, dietBackdrop, body } = refs;

dietCrds.forEach(card => {
  const cardImage = card.querySelector('.diet-card__image');
  const cardTitle = card.querySelector('.diet-card__title');
  const cardText = card.querySelector('.diet-card__text');
  const cardBtn = card.querySelector('[data-diet-btn]');

  cardBtn.addEventListener('click', () => {
    body.classList.add('no-scroll');
    backdropTitle.forEach(title => {
      title.innerHTML = cardTitle.textContent;
    });

    backdropText.forEach(text => {
      text.innerHTML = cardText.textContent;
    });

    backdropImage.src = cardImage.src;
    backdropImage.alt = cardImage.alt;
    dietBackdrop.classList.remove('is-hidden');
  });
});
