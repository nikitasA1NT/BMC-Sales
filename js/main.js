$(document).ready(function () {
  // свайпер секции hero
  var mySwiperHero = new Swiper ('.hero__swiper-container', {

  });
  // переключения по этому слайдеру
  $('.hero__slide-next').on('click', function() {
    $('.hero__slide-next').removeClass('hero__slide_active');
    $('.hero__slide-prev').addClass('hero__slide_active');
    mySwiperHero.slideNext();
  });
  $('.hero__slide-prev').on('click', function() {
    $('.hero__slide-prev').removeClass('hero__slide_active');
    $('.hero__slide-next').addClass('hero__slide_active');
    mySwiperHero.slidePrev();
  });



  // бургер
  $('.header__burger').on('click', function() {
    $('.header__burger').toggleClass('header__burger_active');
    $('.nav').toggleClass('nav_active');
  });



  // спойлер
  $('.categories__button').on('click', function() {
    $('.categories__hidden').slideToggle(600);
    $(this).toggleClass('categories__button_active');
  });



  // свайпер секции services
  var mySwiperServices = new Swiper('.services__swiper-container', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      575: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: ".services__swiper-button-next",
      prevEl: ".services__swiper-button-prev"
    }
  });



  // закрашивание звезд при наведении
  $('.card__score .far').hover(function() {
    $(this).addClass('fas');
    $(this).removeClass('far');
  }, function() {
    $(this).addClass('far');
    $(this).removeClass('fas');
  });
  
  // страницы product
  $('.product__score .far').hover(function() {
    $(this).addClass('fas');
    $(this).removeClass('far');
  }, function() {
    $(this).addClass('far');
    $(this).removeClass('fas');
  });



  // свайпер товара секции product
  var mySwiperProduct = new Swiper('.product__swiper-container', {
    
  });

  // переключение по нему с помощью кнопок
  $('#nav-button-0').on('click', function () {
    mySwiperProduct.slideTo(0);
    $('#nav-button-0').addClass('product__nav-button_active');
    $('#nav-button-1').removeClass('product__nav-button_active');
    $('#nav-button-2').removeClass('product__nav-button_active');
    $('#nav-button-3').removeClass('product__nav-button_active');
    $('#nav-button-4').removeClass('product__nav-button_active');
  });
  $('#nav-button-1').on('click', function () {
    mySwiperProduct.slideTo(1);
    $('#nav-button-1').addClass('product__nav-button_active');
    $('#nav-button-0').removeClass('product__nav-button_active');
    $('#nav-button-2').removeClass('product__nav-button_active');
    $('#nav-button-3').removeClass('product__nav-button_active');
    $('#nav-button-4').removeClass('product__nav-button_active');
  });
  $('#nav-button-2').on('click', function () {
    mySwiperProduct.slideTo(2);
    $('#nav-button-2').addClass('product__nav-button_active');
    $('#nav-button-0').removeClass('product__nav-button_active');
    $('#nav-button-1').removeClass('product__nav-button_active');
    $('#nav-button-3').removeClass('product__nav-button_active');
    $('#nav-button-4').removeClass('product__nav-button_active');
  });
  $('#nav-button-3').on('click', function () {
    mySwiperProduct.slideTo(3);
    $('#nav-button-3').addClass('product__nav-button_active');
    $('#nav-button-0').removeClass('product__nav-button_active');
    $('#nav-button-1').removeClass('product__nav-button_active');
    $('#nav-button-2').removeClass('product__nav-button_active');
    $('#nav-button-4').removeClass('product__nav-button_active');
  });
  $('#nav-button-4').on('click', function () {
    mySwiperProduct.slideTo(4);
    $('#nav-button-4').addClass('product__nav-button_active');
    $('#nav-button-0').removeClass('product__nav-button_active');
    $('#nav-button-1').removeClass('product__nav-button_active');
    $('#nav-button-2').removeClass('product__nav-button_active');
    $('#nav-button-3').removeClass('product__nav-button_active');
  });



  // табы доставки секции product
  $(".product__tab-item").not(":nth-of-type(2)").hide();
  $(".product__delivery .product__tab").click(function() {
    $(".product__delivery .product__tab").removeClass("product__delivery_active").eq($(this).index()).addClass("product__delivery_active");
    $(".product__tab-item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("product__delivery_active");

  // класс активного таба
  $('#delivery-tab-1').on('click', function() {
    $('#delivery-tab-1').addClass('product__tab_active');
    $('#delivery-tab-2').removeClass('product__tab_active');
  });
  $('#delivery-tab-2').on('click', function() {
    $('#delivery-tab-2').addClass('product__tab_active');
    $('#delivery-tab-1').removeClass('product__tab_active');
  });
});