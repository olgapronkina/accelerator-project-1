import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horisontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.jury__next',
    prevEl: '.jury__prev',
  },
});
