// swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation],
  loop: true, // Зацикливание слайдов
  speed: 500,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      width: 260,
      slidesPerView: 1,
      initialSlide: 0,
      spaceBetween: 20,
    },
    768: {
      width: 560,
      slidesPerView: 2,
      initialSlide: 0,
      spaceBetween: 40,
    },
    1366: {
      width: 1160,
      slidesPerView: 4,
      initialSlide: 0,
      spaceBetween: 40,
      simulateTouch: false,
    },
  },
});
swiper.slideReset();
