$(function () {
  AOS.init();

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('.header').addClass('on');
    } else {
        $('.header').removeClass('on');
    }
    }

  var main_img = new Swiper(".main_img .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      loop: true,
    },
    navigation: {
      nextEl: ".main_img .swiper-button-next",
      prevEl: ".main_img .swiper-button-prev",
    },
    pagination: {
      el: ".main_imgm .swiper-pagination",
      type: "progressbar",
    },
  });

  var best_bg = new Swiper(".best_bg .mySwiper", {
    navigation: {
      nextEl: ".best_bg .swiper-button-next",
      prevEl: ".best_bg .swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 4,
  });

  var md = new Swiper(".md .mySwiper", {
    scrollbar: {
      el: ".md .swiper-scrollbar",
      hide: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
  });

  var fc = new Swiper(".fc.right .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".fc.right .swiper-button-next",
      prevEl: ".fc.right .swiper-button-prev",
    },
  });

  $(".top_btn").click(function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 500);
  });
  

  var myDate = new Date();
  myDate.setDate(myDate.getDate() + 4);
  $("#countdown").countdown(myDate, function (event) {
    $(this).html(
      event.strftime(
        '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
      )
    );
  });
});
