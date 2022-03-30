import Swiper, { Pagination } from 'swiper';

const dietContainer = document.querySelector('#diet-slider');

let dietSlider;

Swiper.use([Pagination]);

function mobileDietSwiper() {
  if (window.innerWidth <= 991 && dietContainer.dataset.mobile === 'false') {
    dietSlider = new Swiper(dietContainer, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      slideClass: 'diet-card',
      pagination: {
        el: '.swiper-pagination.diet-pagination',
      },

      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });

    dietContainer.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 992) {
    dietContainer.dataset.mobile = 'false';

    if (dietContainer.classList.contains('swiper-initialized')) {
      dietSlider.destroy();
    }
  }
}

mobileDietSwiper();

window.addEventListener('resize', () => {
  mobileDietSwiper();
});
