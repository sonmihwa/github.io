$(function() {
  //모바일 gnb의 펼침 아이콘
  $('.dep_2>li').has('ul').addClass('has3');


    //모바일 gnb
    // $('#gnb li a').click(function() {
    //   $('#gnb li a').not(this).next().slideUp();
    //   $(this).next().slideToggle();

    //   $('#gnb li a').not(this).removeClass('icon_on');
    //   $(this).toggleClass('icon_on');
    // })

  $('#gnb>li>a').click(function() {
    $('#gnb>li>a').not(this).next().slideUp();

    $(this).next().slideToggle();
    
    $('#gnb>li>a:after').hide(); //- 가상 클래스가 jQuery 적용이 되지 않기 때문에 화살표를 html의 span 태그로 만드는 방법과 addClass를 이용하여 css에서 스타일을 주는 방법이 있음
    
    //icon_on이라는 클래스가 있는 화살표만 바뀌고 그것이 아닌 것은 icon_on 클래스를 없애라
    $('#gnb>li>a').not(this).removeClass('icon_on');
    $(this).toggleClass('icon_on');
  })

    $('.dep_2>li>a').click(function() {
      $('.dep_2>li>a').not(this).next().slideUp();
      $(this).next().slideToggle();

      $('.dep_2>li>a').not(this).removeClass('icon_on');
      $(this).toggleClass('icon_on');
    })
  
      

  //모바일용 x 버튼
  $('.mo_gnb_close').click(function() {
    $('.mo_gnb_bg').hide();
    $('.mo_gnb_bg nav').css({'left' : '-300px'});
    //오픈해서 0으로 만들었던 left 값을 -300px로 보내지 않으면 계속 0인 상태이기 때문에 한 번만 애니메이션 되고 닫았다가 다시 열면 애니메이션이 작동하지 않음
    //이를 해결하기 위해 닫힘 버튼을 눌렀을 때 처음처럼 왼쪽으로 보내주면 됨
  })

  //모바일용 open 버튼
  $('.mo_gnb_open').click(function() {
    $('.mo_gnb_bg').fadeIn();
    $('.mo_gnb_bg nav').animate({'left' : 0});
  })

  //모바일 - 메인 비주얼
  var mo_vis_wid = $(window).width();
  var mo_vis_len = $('.mo_slider li').length;

  $('.mo_slider ul').css({'width' : mo_vis_wid * mo_vis_len});
  $('.mo_slider li').css('width', mo_vis_wid);

  $('.slide_btn .prev').click(function() {
    $('.mo_slider li:last-child').insertBefore($('.mo_slider ul li:first-child'))
    $('.mo_slider ul').css('margin-left', -mo_vis_wid);
    $('.mo_slider ul').stop().animate({'margin-left' : 0});
  })

  $('.slide_btn .next').click(function() {
    $('.mo_slider ul').stop().animate({'margin-left' : -mo_vis_wid}, function() {
      $('.mo_slider ul li:first-child').insertAfter($('.mo_slider li:last-child'))
      $('.mo_slider ul').css({'margin-left' : 0});
   })
  })

  var auto = setInterval(mainSlider, 2000);
  function mainSlider() {
    $('.mo_slider ul').stop().animate({'margin-left' : -mo_vis_wid}, function() {
      $('.mo_slider ul li:first-child').insertAfter($('.mo_slider li:last-child'))
      $('.mo_slider ul').css({'margin-left' : 0});
   })
  }

  //팝업 닫기 
  $('#popup button').click(function() {
    $(this).parent().hide();
  })

  //main visual(PC)
  //PC - gnb

  /*
  $('#gnb>li').hover(function() {
    $('.dep_2').hide();
    $(this).children('.dep_2').fadeIn();
  }, function() {})
  */

  $('.vis_btn_wrap button').click(function() {
    // var i = $(this).attr('class').substr(4,1) //무조건 btn_로 시작 / btn_뒤는 인덱스 번호 4번임
    var i = $(this).index() + 1;
    //숫자가 10이 넘어갈 경우에 이 방법을 사용하는 것이 좋음

    $('.vis_btn_wrap button').not(this).removeClass('slide_on');
    $(this).addClass('slide_on');

    $('.slide').css('z-index','1').fadeOut();
    $('.slide_' + i).css('z-index','2').fadeIn();
  })
  var t = 5000;
  var n = 1;
  var auto = setInterval(mainSlide, t);
  function mainSlide() {
    if(n >= 6) {n = 1}
    else {n++}
    $('.slide').css('z-index','1').fadeOut();
    $('.slide_' + n).css('z-index','2').fadeIn();

    $('.vis_btn_wrap button').removeClass('slide_on');
    $('.vis_btn_wrap button:nth-child(' + n + ')').addClass('slide_on');
  }

  /*
  $('.btn_2').click(function() {
    $('.slide').css('z-index','1');
    $('.slide_2').css('z-index', '2');
  })
  $('.btn_3').click(function() {
    $('.slide').css('z-index','1');
    $('.slide_3').css('z-index', '2');
  })
  */
  //footer - familySite
  $('.fam_site button').click(function() {
    $('.fam_site ul').slideToggle();
    //원칙적으로 slideDown으로 아래로 펼쳐지는 것이지만 css에서 bottom으로 기준을 맞췄기 때문에 위로 펼쳐지는 것처럼 보임
  })

})//ready