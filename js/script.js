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

    $('html, body').animate({scrollTop: 0},500);
  });
});