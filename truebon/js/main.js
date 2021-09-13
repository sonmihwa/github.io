$(function() {
   $('.mo_gnb_btn').click(function() {
      $('header').toggleClass('open');
   })
   $('#gnb>li>a').click(function() {
      $('#gnb>li>a').not(this).next().slideUp();
      $(this).next().slideToggle();
   })
});//ready