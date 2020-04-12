$(document).ready(function()
{
  $(document).on('click', '.js-burger', function(e)
  {
    $(this).hide();
    $('.js-close').fadeToggle('slow','linear');
    $('.js-mobile-menu').fadeToggle('slow','linear');
    $('.js-mobile-menu-overlay').fadeToggle('slow','linear');
  });

  $(document).on('click', '.js-close', function(e)
  {
    $(this).hide();
    $('.js-mobile-menu').fadeToggle('slow','linear');
    $('.js-mobile-menu-overlay').fadeToggle('slow','linear');
    $('.js-burger').fadeToggle('slow','linear');
  });
});