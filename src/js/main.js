import 'the-new-css-reset/css/reset.css';
import '../styles/style.scss';
// import tabs from "./tabs"; //Переключение табов
// import './swiper'; // для подключения swiper

// ==================== Переключение селекта ====================
// select(); // для селекта

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
// import { SplitText } from 'gsap/all';
import accordion from './accordion';
import burgerMenu from './burger-menu';
// import select from "./select"; //для подключения селекта
// import "./phonemask"; //для подключения phonemask

burgerMenu(); // для бургер меню

// ==================== Переключение табов ====================
// tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");

// ==================== Переключение аккордиона ====================
accordion();

// ==================== Анимация gsap ====================

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

const tl = gsap.timeline();
tl.to('.hero__title', {
  duration: 1.2,
  text: 'Boost Your Local Visibility with Professional <span> Local SEO Services</span> Tailored to Your Business',
});
tl.from('.hero__subtitle', { x: 300, opacity: 0, duration: 0.5 });
tl.from('.whats__container', { y: 300, opacity: 0, duration: 0.5 });

tl.from('.services__title', {
  scrollTrigger: {
    trigger: '.whats',
    start: '-70% top',
    end: '+=200px',
    scrub: !0,
  },
  scale: 0,
  transformOrigin: 'bottom center',
  stagger: 0.8,
  duration: 1,
});

tl.from('.services__subtitle', {
  scrollTrigger: {
    trigger: '.whats',
    start: '-50% top',
    end: '+=200px',
    scrub: !0,
  },
  scale: 0,
  transformOrigin: 'bottom center',
  duration: 1,
  delay: 1.8,
});

tl.from('.services-slide', {
  scrollTrigger: {
    trigger: '.whats',
    start: 'top top',
    scrub: !0,
  },
  scale: 0,
  stagger: 0.8,
  duration: 1,
});

tl.from('.services__text', {
  scrollTrigger: {
    trigger: '.services',
    start: 'top top',
    scrub: !0,
  },
  scale: 0,
  transformOrigin: 'bottom center',
  duration: 1,
});

gsap.from('.local__items', {
  scrollTrigger: {
    trigger: '.local',
    start: '-30% top',
    end: '+=400px',
    scrub: !0,
  },
  opacity: 0,
  x: 300,
  stagger: 0.8,
  duration: 1,
});

gsap.from('.local__title', {
  scrollTrigger: {
    trigger: '.local',
    start: '-40% top',
    end: '+=200px',
    scrub: !0,
  },
  x: 300,
  opacity: 0,
  stagger: 0.8,
  duration: 1,
});

gsap.from('.local__subtitle', {
  scrollTrigger: {
    trigger: '.local',
    start: '-40% top',
    end: '+=300px',
    scrub: !0,
  },
  x: 300,
  opacity: 0,
  stagger: 0.8,
  duration: 1,
});

const tlt = gsap.timeline();
tlt.from('.local__text', {
  scrollTrigger: {
    trigger: '.local',
    start: 'top top',
    end: '+=200px',
    scrub: !0,
  },
  opacity: 0,
  duration: 1,
});

tlt.from('.local__body_text', {
  scrollTrigger: {
    trigger: '.local',
    start: 'top top',
    end: '+=200px',
    scrub: !0,
  },
  opacity: 0,
  duration: 1,
});

gsap.from('.local__body_item', {
  scrollTrigger: {
    trigger: '.local',
    start: '70% bottom',
    end: '+=300px',
    scrub: !0,
  },
  y: 300,
  opacity: 0,
  stagger: 0.8,
  duration: 1,
});

gsap.from('.agency__item', {
  scrollTrigger: {
    trigger: '.local',
    start: '110% bottom',
    end: '+=300px',
    scrub: !0,
  },
  y: 300,
  opacity: 0,
  stagger: 0.8,
  duration: 1,
});

gsap.from('.accordion__item', {
  scrollTrigger: {
    trigger: '.local',
    start: '130% bottom',
    end: '+=500px',
    scrub: !0,
  },
  x: 300,
  opacity: 0,
  stagger: 0.8,
  duration: 1,
});

gsap.from('.agency__body_item', {
  scrollTrigger: {
    trigger: '.local',
    start: '160% bottom',
    end: '+=400px',
    scrub: !0,
  },
  scale: 0,
  stagger: 0.8,
  duration: 1,
});
