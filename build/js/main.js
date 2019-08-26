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
      //prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      //nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: true
    });
  }
});
