$(document).ready(function()
{
  $('.js-portfolio-slider').slick({
    infinite: false,
    arrows: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      },
    ]
  });

  $('.js-autowatering-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      },
    ]
  }).slickAnimation();

  $('.js-fog-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      },
    ]
  }).slickAnimation();

  $('.js-controllers-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      },
    ]
  }).slickAnimation();

  $('.js-reviews-slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
        }
      },
    ],
  });

  $('.js-projects-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        }
      },
    ]
  });

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

    if (container.length !== 0) {
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

//        let entity = 'reviews',
//          data = {
//            'items': [
//              {
//                'image': 'img/reviews/1.webp',
//                'label': '<p>Г.А.</p><p>г. Бердск</p><p>07.07.18 г.</p>',
//                'text': 'В 2017 году компания "Индига" установила на нашем участке автоматический полив. Очень быстро\nсобрали систему автополива, доступно объяснили как она работает. Все лето система работала\nбез проблем. Осенью систему отключили, весной подключили. Очень удобно! В этом году\nустановили капельный полив на огороде, можно спокойно уезжать и не волноваться. Работой\nочень, очень довольны!!! Спасибо компании "Индига" за быструю и качественную работу. Всем\nрекомендую вашу компанию для установки автополива!"',
//              },
//              {
//                'image': 'img/reviews/1.webp',
//                'label': '<p>Г.А.</p><p>г. Бердск</p><p>07.07.18 г.</p>',
//                'text': 'В 2017 году компания "Индига" установила на нашем участке автоматический полив. Очень быстро\nсобрали систему автополива, доступно объяснили как она работает. Все лето система работала\nбез проблем. Осенью систему отключили, весной подключили. Очень удобно! В этом году\nустановили капельный полив на огороде, можно спокойно уезжать и не волноваться. Работой\nочень, очень довольны!!! Спасибо компании "Индига" за быструю и качественную работу. Всем\nрекомендую вашу компанию для установки автополива!"',
//              },
//              {
//                'image': 'img/reviews/1.webp',
//                'label': '<p>Г.А.</p><p>г. Бердск</p><p>07.07.18 г.</p>',
//                'text': 'В 2017 году компания "Индига" установила на нашем участке автоматический полив. Очень быстро\nсобрали систему автополива, доступно объяснили как она работает. Все лето система работала\nбез проблем. Осенью систему отключили, весной подключили. Очень удобно! В этом году\nустановили капельный полив на огороде, можно спокойно уезжать и не волноваться. Работой\nочень, очень довольны!!! Спасибо компании "Индига" за быструю и качественную работу. Всем\nрекомендую вашу компанию для установки автополива!"',
//              },
//            ],
//            'pagenavigation': '',
//          };

        let entity = 'articles',
          data = {
            'items': [
              {
                'name': 'Бесплатный проект системы автополива. Правда&nbsp;или&nbsp;обман?',
                'image': 'img/articles/1.webp',
                'label': '03 марта 2020',
                'text': '<p>Когда наша организация только начинала заниматься системами полива, а это было в 2013 году, мы делали бесплатные проекты. Делали проект по-честному, т.е. клиент получал на руки такой же проект, который мы делаем и сейчас. Со всеми схемами, гидрорассчетами, подробной сметой и т.д.</p><br><p>Сейчас интернет пестрит объявлениями о бесплатных проектах, обещают сделать его за день. Да, мы тоже можем за день-два сделать проект, если у нас нет очереди... Если есть, то за де...</p>',
              },
              {
                'name': 'Бесплатный проект системы автополива. Правда&nbsp;или&nbsp;обман?',
                'image': 'img/articles/1.webp',
                'label': '03 марта 2020',
                'text': '<p>Когда наша организация только начинала заниматься системами полива, а это было в 2013 году, мы делали бесплатные проекты. Делали проект по-честному, т.е. клиент получал на руки такой же проект, который мы делаем и сейчас. Со всеми схемами, гидрорассчетами, подробной сметой и т.д.</p><br><p>Сейчас интернет пестрит объявлениями о бесплатных проектах, обещают сделать его за день. Да, мы тоже можем за день-два сделать проект, если у нас нет очереди... Если есть, то за де...</p>',
              },
              {
                'name': 'Бесплатный проект системы автополива. Правда&nbsp;или&nbsp;обман?',
                'image': 'img/articles/1.webp',
                'label': '03 марта 2020',
                'text': '<p>Когда наша организация только начинала заниматься системами полива, а это было в 2013 году, мы делали бесплатные проекты. Делали проект по-честному, т.е. клиент получал на руки такой же проект, который мы делаем и сейчас. Со всеми схемами, гидрорассчетами, подробной сметой и т.д.</p><br><p>Сейчас интернет пестрит объявлениями о бесплатных проектах, обещают сделать его за день. Да, мы тоже можем за день-два сделать проект, если у нас нет очереди... Если есть, то за де...</p>',
              },
            ],
            'pagenavigation': '',
          };

        container.append($('#' + entity + 'Tmpl').render(data.items));

        flag = true;

        $('.js-loader').hide();
        $('.js-overlay').hide();
      }
    }
  });
}