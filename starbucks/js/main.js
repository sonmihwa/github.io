//header sub-menu
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

//header badge
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기 !
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else {
    //배지 보이지
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기 !
    gsap.to(toTopEl, .2, {
      x: 100 //오른쪽으로 100px 이동
    });
  }
}, 300)); //_.throttle(함수, 시간) 300=0.3초

toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});


//VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index +1) * .7,
    opacity: 1
  });
});

//VISUAL-SWIPER
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  sapceBetween: 10, //슬라이드 사이 여백
  centeredSlides : true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000 //5s
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 기능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//AWARDS - SLIDE
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  sapceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

//VISUAL-NOTICE-TOGGLE
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion 
  //!가 붙어있는 뒤쪽의 값을 반대가 되게 만들어달라는 의미 즉 isHidePromotion=false이면 반대의 값인 true의 값이 되고 true가 되면 false가 되게 해달라는 의미
  //특정 변수의 값을 지속적으로 반대값으로 적용해줄 수 있는 코드
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});


//YOUTUBE VIDEO INNER

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    { //옵션
      y: size,
      repeat: -1, //무한반복 (-1)
      yoyo: true, //재생된 애니메이션을 뒤로 재생해서 반복할 수 있도록 하는 것 
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
};
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//FIND THE STOR
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //감시하고 있는 요소가 뷰포트 어느 지점에 감시되었다는 것을 판단할 것인가 , 화면에 보여진다고 판단되면 setClassToggle을 실행함
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});

//FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023

