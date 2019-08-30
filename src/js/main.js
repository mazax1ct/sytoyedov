$(document).ready(function () {
  //открытие/закрытие меню
  $('.js-menu-opener').click(function () {
    $('body').toggleClass('overflow');
    $(this).toggleClass('is-active');
    $('.main-menu').toggleClass('is-open');
    return false;
  });

  //главный баннер-слайдер
  if ($('.js-main-banner').length) {
    $('.js-main-banner').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: true
    });
  }

  //главный баннер-слайдер
  if ($('.js-set-slider').length) {
    $('.js-set-slider').slick({
      adaptiveHeight: true,
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"></button>',
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: false
          }
        }
      ]
    });
  }

  //смена набора на главной
  $('.js-set-order-opener').click(function () {
    $('.set-order__block').removeClass('is-active');
    $(this).prev('.set-order__block').addClass('is-active');
    $('.set-order__button').removeClass('is-active');
    $(this).addClass('is-active');
    $('.set-order__slider-block.is-active').find('.js-set-slider').slick('setPosition');
    return false;
  });
});
