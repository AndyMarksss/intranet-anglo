const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 2000,
  
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  //slide automático
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
