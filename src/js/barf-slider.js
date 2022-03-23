import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

const slider = document.querySelector('.slider-container');

let mySlider;

Swiper.use([Pagination]);

function mobileSwiper() {
  if (window.innerWidth <= 767 && slider.dataset.mobile === 'false') {
    mySlider = new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 72,
      slideClass: 'barf-card',
      pagination: {
        el: '.swiper-pagination',
        // type: 'bullets',
      },
    });
    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySlider.destroy();
    }
  }
}

mobileSwiper();

window.addEventListener('resize', () => {
  mobileSwiper();
});
