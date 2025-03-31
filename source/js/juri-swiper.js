import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const juriSwiper = new Swiper('.juri__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.juri__button-next',
    prevEl: '.juri__button-prev',
  },
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

juriSwiper.slideReset();
