$(document).ready(function () {
  $('.accordion-tabs').children('li').first().children('a').addClass('is-active')
    .next().addClass('is-open').show();

  $('.accordion-tabs').on('click', 'li > a', function(event) {
    event.preventDefault()
    
    if(!$(this).hasClass('is-active')) {
      $(this).closest('.accordion-tabs').find('.is-open').removeClass('is-open').hide();
      $(this).next().toggleClass('is-open').toggle();
      $(this).closest('.accordion-tabs').find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    }
  });
});
