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

  //открытие попапа
  $('.js-popup-open').click(function () {
    $('body').toggleClass('overflow');
    $('.popup-wrapper').fadeIn();
    $('#' + $(this).attr('data-popup')).fadeIn();
    return false;
  });

  //закрытие попапа
  $('.js-popup-close').click(function () {
    $('body').toggleClass('overflow');
    $('.popup').fadeOut();
    $('.popup-wrapper').fadeOut();
    return false;
  });

  //переключение табов наборов
  $('.js-tab').on('click', function() {
    $(".js-tab").removeClass("is-active");
    $(this).addClass("is-active");
    $('.tab').removeClass("is-active");
    $('.tab[data-target=' + $(this).attr("data-target") + ']').addClass("is-active");
    return false;
  });

  //запуск плавающей формы
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 70
        });
      }, 100);
    }

    //если блок для контента пустой, открепляем
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }
});

//открепляем и перезапускаем прилипающий блок при резайзе
$(window).resize(function() {
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 70
        });
      }, 100);
    }
  }
});

//открепляем и перезапускаем прилипающий блок при повороте устройства
$(window).on("orientationchange", function(event) {
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 70
        });
      }, 100);
    }
  }
});
