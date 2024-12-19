document.addEventListener('DOMContentLoaded', function () {
  // All your existing code goes here

  let searchForm = document.querySelector('.search-form');
  let shoppingCart = document.querySelector('.shopping-cart');
  let loginForm = document.querySelector('.login-form');
  let navbar = document.querySelector('.navbar');

  // Ensure these elements are not null
  if (document.querySelector('#search-btn')) {
    document.querySelector('#search-btn').onclick = () => {
      searchForm.classList.toggle('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    };
  }

  if (document.querySelector('#cart-btn')) {
    document.querySelector('#cart-btn').onclick = () => {
      shoppingCart.classList.toggle('active');
      searchForm.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    };
  }

  if (document.querySelector('#login-btn')) {
    document.querySelector('#login-btn').onclick = () => {
      loginForm.classList.toggle('active');
      searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      navbar.classList.remove('active');
    };
  }

  if (document.querySelector('#menu-btn')) {
    document.querySelector('#menu-btn').onclick = () => {
      navbar.classList.toggle('active');
      searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
    };
  }

  window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
  };

  // Your Swiper setup remains the same
  var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
});
