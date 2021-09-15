$(function() {
  //mobile header all_menu
  $('.allmenu_btn').click(function(){
    $('html, body').css({'overflow-y' : 'hidden'})
    $('nav').before('<div class="mo_bg"></div>');
    $('.mo_bg').fadeIn();
    $('#header nav').animate({'right' : '0'});    
  })//allmenu_btn click

  $('#header nav #gnb>li').click(function() {
    $(this).children('.dept2').slideToggle();
  })//#gnb li click

  $('.mo_gnb_close').click(function() {
    $('html, body').css({'overflow-y' : 'visible'})
    $('.mo_bg').fadeOut(function() {$(this).remove()})
    $('#header nav').animate({'right' : '-60%'});
  })//.mo_gnb_close click

  //main_visual
  $('.slider_box').slick({
      dots : true,
      autoplay : true,
      focusOnSelect: true,
      autoplaySpeed : 3000,
      responsive: [
        {
          breakpoint: 840,
          settings: {
            arrows: false
          }
        }
      ]
  });//slider_box slick

  //product_wrap

  var w1 = $('.product_line .product li').outerWidth(true);
  var l1 = $('.product_line .product li').length;
  var n = 1;
  $('.product_line .product_' + n).css({'width': w1 * l1})

  //tab
  $('.product_name li').click(function() {
    n = $(this).index() + 1; //0,1,2
    $('.product_line .list_box').hide();
    $('.product_line .list_box_' + n).show(); //1,2,3 
    $('.product_name li').not(this).removeClass('on')
    $(this).addClass('on')   
  })

  $('.product_next').click(function() {
    $('.product_line .product').stop().animate({'margin-left': -w1}, function() {
       $(this).find('li:first-child').insertAfter($(this).find('li:last-child'))
       $(this).css('margin-left', 0);
    }) 
  })

  $('.product_prev').click(function() {
    $('.product_line .product_' + n).find('li:last-child').insertBefore($('.product_line .product_' + n).find('li:first-child'));
    $('.product_line .product_' + n).css('margin-left',-w1);
    $('.product_line .product_' + n).stop().animate({'margin-left': 0})     
  }) 

  //pr_room
  $('.pr_room_box').slick({
    arrows : false,
    slidesToShow: 3,
    responsive : [{
      breakpoint : 1024, 
      settings : {
        slidesToShow : 3,
        slidesToScroll: 3
      }
    },{
      breakpoint : 840,
      settings : {
        dots : true,
        autoplay : true,
        autoplaySpeed : 3000,
        slidesToShow : 1,
        slidesToScroll: 1
      }
    }]
  });//.pr_room_box slick




})//ready