$(document).ready(function()
{
  $(document).on('click', '.js-burger', function(e)
  {
    $(this).hide();
    $('.js-close').fadeToggle('slow', 'linear');
    $('.js-mobile-menu').fadeToggle('slow', 'linear');
    $('.js-mobile-menu-overlay').fadeToggle('slow', 'linear');
  });

  $(document).on('click', '.js-close', function(e)
  {
    $(this).hide();
    $('.js-mobile-menu').fadeToggle('slow', 'linear');
    $('.js-mobile-menu-overlay').fadeToggle('slow', 'linear');
    $('.js-burger').fadeToggle('slow', 'linear');
  });

  $(window).scroll(function()
  {
    if ($(window).scrollTop() >= 400) {
      $('.js-up').fadeIn('slow', 'linear');
    }

    if ($(window).scrollTop() < 400) {
      $('.js-up').fadeOut('slow', 'linear');
    }
  });

  $(document).on('click', '.js-up', function(e)
  {
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 500);
  });

  pagenavigation();
});

function pagenavigation()
{
  let flag = true;
  let i = 0;

  $(document).scroll(function()
  {
    let container = $('.js-items');

    if (container.length === 0) {
      return false;
    }

    let scroll = $(window).scrollTop() + $(window).height(),
      offset = container.offset().top + container.height();

    if (scroll > offset && flag) {
      flag = false;
      i++;

      if (i === 3) {
        return false;
      }

      $('.js-loader').show();
      $('.js-overlay').show();

      let entity = 'reviews',
        data = {
          'items': [
            {
              'image': 'img/reviews/1.webp',
              'label': '<p>Г.А.</p><p>г. Бердск</p><p>07.07.18 г.</p>',
              'text': 'В 2017 году компания "Индига" установила на нашем участке автоматический полив. Очень быстро\nсобрали систему автополива, доступно объяснили как она работает. Все лето система работала\nбез проблем. Осенью систему отключили, весной подключили. Очень удобно! В этом году\nустановили капельный полив на огороде, можно спокойно уезжать и не волноваться. Работой\nочень, очень довольны!!! Спасибо компании "Индига" за быструю и качественную работу. Всем\nрекомендую вашу компанию для установки автополива!"',
            },
            {
              'image': 'img/reviews/1.webp',
              'label': '<p>Г.А.</p><p>г. Бердск</p><p>07.07.18 г.</p>',
              'text': 'В 2017 году компания "Индига" установила на нашем участке автоматический полив. Очень быстро\nсобрали систему автополива, доступно объяснили как она работает. Все лето система работала\nбез проблем. Осенью систему отключили, весной подключили. Очень удобно! В этом году\nустановили капельный полив на огороде, можно спокойно уезжать и не волноваться. Работой\nочень, очень довольны!!! Спасибо компании "Индига" за быструю и качественную работу. Всем\nрекомендую вашу компанию для установки автополива!"',
            },
            {
              'image': 'img/reviews/1.webp',
              'label': '<p>Г.А.</p><p>г. Бердск</p><p>07.07.18 г.</p>',
              'text': 'В 2017 году компания "Индига" установила на нашем участке автоматический полив. Очень быстро\nсобрали систему автополива, доступно объяснили как она работает. Все лето система работала\nбез проблем. Осенью систему отключили, весной подключили. Очень удобно! В этом году\nустановили капельный полив на огороде, можно спокойно уезжать и не волноваться. Работой\nочень, очень довольны!!! Спасибо компании "Индига" за быструю и качественную работу. Всем\nрекомендую вашу компанию для установки автополива!"',
            },
          ],
          'pagenavigation': '',
        };

      container.append($('#' + entity + 'Tmpl').render(data.items));

      flag = true;

      $('.js-loader').hide();
      $('.js-overlay').hide();
    }
  });
}