$(document).ready(function(){
  $('.nav-mobile-btn').on('click', function(){
    if($(this).hasClass('clicked')){
      $(this).removeClass('clicked');
      $('.nav').removeClass('clicked');
      $('.main').removeClass('clicked');
    } else {
      $(this).addClass('clicked');
      $('.nav').addClass('clicked');
      $('.main').addClass('clicked');
    }
  });
});
