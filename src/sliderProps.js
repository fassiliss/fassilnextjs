import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const sliderProps = {
  testimonials: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
      // when window width is >= 1024px
      920: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
  logo: {
    spaceBetween: 1,
    slidesPerView: 2,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        roundLengths: true,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        roundLengths: true,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        roundLengths: true,
      },
    },
  },
};
