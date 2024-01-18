import 'the-new-css-reset/css/reset.css';
import '../styles/style.scss';
import Swiper from 'swiper';
import 'swiper/css';
import burgerMenu from './burger-menu';
// import tabs from "./tabs"; //Переключение табов
// import './swiper'; // для подключения swiper
import accordion from './accordion'; // для подключения accordion
// import select from "./select"; //для подключения селекта
// import "./phonemask"; //для подключения phonemask

burgerMenu(); // для бургер меню

// ==================== Переключение табов ====================
// tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");

// ==================== Переключение аккордиона ====================
accordion();

// ==================== Переключение селекта ====================
// select(); // для селекта

const swiper = new Swiper('.services-swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
