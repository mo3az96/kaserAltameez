$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /***** Footer *****/
  if ($(window).width() <= 767) {
    $(".menu-btn").click(function () {
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
      $(".overlay").fadeIn();
    });
    $(".close-btn,.overlay").click(function () {
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
      $(".overlay").fadeOut();
    });
    $(".cats-trigger").click(function () {
      $(this).toggleClass("active");
      $(".children-list").slideToggle();
    });
  }

  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** cats slider *****/
  var catsSwiper = new Swiper(".cats-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 7,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 5,
      },
      1450: {
        slidesPerView: 8,
        spaceBetween: 7,
      },
    },
    pagination: {
      el: ".cats-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** general slider *****/
  var generalSwiper = new Swiper(".general-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".general-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** specials slider *****/
  var specialsSwiper = new Swiper(".specials-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".specials-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** cat1 slider *****/
  var cat1Swiper = new Swiper(".cat1-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".cat1-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** cat2 slider *****/
  var cat2Swiper = new Swiper(".cat2-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".cat2-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** brands slider *****/
  var brandsSwiper = new Swiper(".brands-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1450: {
        slidesPerView: 8,
        spaceBetween: 11,
      },
    },
    pagination: {
      el: ".brands-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** Footer *****/
  if ($(window).width() <= 767) {
    $(".nav-foot-header").click(function () {
      $(".nav-foot-header").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-foot-header").not(this).siblings().slideUp(500);
    });
  }

  /***** Scroll To Top *****/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
