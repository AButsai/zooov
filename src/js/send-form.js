import refs from './refs.js';

const {
  body,
  forms,
  footerFormThanksBackdrop,
  calculateBackdrop,
  dietBackdrop,
  dietBackdropContentWrap,
  dietBackdropForm,
  dietBackdropThanksWrap,
  number,
  total,
} = refs;

const bodyForm = {};

const changes = form => {
  if (form.classList.contains('footer-form') || form.classList.contains('calculate__form')) {
    footerFormThanksBackdrop.classList.remove('is-hidden');
    calculateBackdrop.classList.add('is-hidden');

    setTimeout(() => {
      footerFormThanksBackdrop.classList.add('is-hidden');
    }, 2000);
  }

  if (form.classList.contains('diet-backdrop__form')) {
    bodyForm.number = number.value;
    bodyForm.totalPrise = total.value;
    dietBackdropThanksWrap.classList.remove('hidden');
    dietBackdropForm.classList.add('hidden');
    setTimeout(() => {
      dietBackdrop.classList.add('is-hidden');
      dietBackdropThanksWrap.classList.add('hidden');
      dietBackdropContentWrap.classList.remove('hidden');
    }, 2000);
  }
};

forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    formData.append('form', form.classList.value);

    formData.forEach((value, field) => {
      bodyForm[field] = value;
    });

    changes(form);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ bodyForm }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(json => {
        // alert('Данные отправлены успешно!');
      })
      .catch(error => {
        alert('Данные отправлены с ошибкой ' + error.message);
      })
      .finally(() => {
        form.reset();
      });
    body.classList.remove('no-scroll');
  });
});
