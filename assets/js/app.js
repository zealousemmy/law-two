
 /*
  -----------------------------------------------------
  Offcanvas Menu
  -----------------------------------------------------
  */
  $(".menu-item-has-children a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("show")) {
      element.removeClass("show");
      element.children("ul").slideUp(500);
    } else {
      element.siblings("li").removeClass("show");
      element.addClass("show");
      element.siblings("li").find("ul").slideUp(500);
      element.children("ul").slideDown(500);
    }
  });
  
/*
-----------------------------------------------------
Preloader
-----------------------------------------------------
*/
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

// Team Slick Slider
$(document).ready(function($){
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $("#header-three").addClass("header-active");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#header-three").removeClass("header-active");
      }
    });
  });
  
  // Hero on slider 
  $(function () {
    $(".hero-1-slider")
      .on("init", function (event, slick) {
        $(".count_active").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
      })
      .slick({
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true, 
        loop: true,
        dots: true,
      })
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".count_active").text(nextSlide + 1);
      });
  });
  
  // Service slider 
  $(".service-slider").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  // Hero content
  $(".hero-content-slider").slick({
    dots: true,
    infinite: true,
    loop: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  
  // Hero slider four 
  $(".hero-slider-4").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  // Service Two
  $(".service-slider-two").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Service Three
  $(".service-right-4").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  // Service slider five
  $(".service-slider-5").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  
  // Service slider five
  $(".portfolio-slider-5").slick({
    dots: false,
    infinite: true, 
    loop: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  
// Hero slider Five
$(function () {
  $(".hero-slider-5")
    .on("init", function (event, slick) {
      $(".count_active").text(slick.currentSlide + 1);
      $(".total").text(slick.slideCount);
    })
    .slick({
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      loop: true,
      arrows: true,
      nextArrow: ".next-btn",
      prevArrow: ".prev-btn",
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".count_active").text(nextSlide + 1);
    });
});
  
  
  // Testimonial Four
  $(".testimonial-slider-4").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  // Testimonial Slick Slider
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    loop: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Testimonial Slick Slider
  $(".case-study-slider").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // infinitive Slick Slider

  $(".case-study").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".gallery-card-grid-2").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".gallery-card-slider").slick({
    dots: true,
    infinite: true,
    loop: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".gallery-card-grid-3").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    loop: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
})

// Shop detail 
$(".product-thumb-slider").slick({
  slidesToShow: 1,
  loop: true,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".product-nav",
});
$(".product-nav").slick({
  slidesToShow: 3,
  asNavFor: ".product-thumb-slider",
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

//   infinitive animation 
const scrollers = document.querySelectorAll('.scroller')

if(!window.matchMedia("(perfers_reduced-motion: reduced)").matches) {
    addAnimation()
}

function addAnimation () {
    scrollers.forEach (scroller =>  {
        scroller.setAttribute('data-animated', true)

        const scrollerInner = scroller.querySelector(".scroller__inner")
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item =>  {
            const duplicateItem =  item.cloneNode(true)
            duplicateItem.setAttribute('aria-hidden', true)
            scrollerInner.appendChild(duplicateItem)
        })
    })
}
    
//   Back To Top Icon
  var btn = $('#back-icon');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // Mission Vision Counting Number
    'use strict';

  function progressBarAndCountNumber () {
  const progress = document.querySelectorAll('.progress');
  let count = 0;
  // You must put the maximum number in the MAX variable.
  let MAX = 80;

  let run = setInterval(() => {
      count++;
      progress.forEach(element => {
          if (count <= element.dataset.progress) {
              element.parentElement.style.background = `conic-gradient(#D89A26 ${count}%, #0C1A1A  0)`;
              element.firstElementChild.textContent = `${count}%`;
          };
          if (count == MAX) {
              clearInterval(run);
          };
      });
  }, 20);
}

progressBarAndCountNumber()
    

/**---------------------------------------
 *  QTY Inputs
* -------------------------------------*/
$(function() {
    $("div.quantity").append('<a class="inc qty-button">+</a><a class="dec qty-button">-</a>');
    $(".qty-button").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
});

  /*----------------------------------------
  product quantity count
  ------------------------------------------*/ 
    // Select Box 
    var country = document.getElementsByName("country")[0];
    var cdrop = document.querySelector("#cdrop");

    function update_country(el){
        country.value = el.innerText;
        cdrop.innerHTML = el.innerHTML
     }

    // Products Toggle
    const allHoverImages = document.querySelectorAll('.hover-container div img');
    const imgContainer = document.querySelector('.img-container');

    if(!allHoverImages){
    window.addEventListener('DOMContentLoaded', () => {
        allHoverImages[0].parentElement.classList.add('active');
    });
    
    allHoverImages.forEach((image) => {
        image.addEventListener('click', () =>{
            imgContainer.querySelector('img').src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('active'); 
        });
    });

    function resetActiveImg(){
        allHoverImages.forEach((img) => {
            img.parentElement.classList.remove('active');
        });
    }

}

/*
-----------------------------------------------------
Gsap
----------------------------------------------------- 
*/
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const fadeItems = document.querySelectorAll(".fade");
  fadeItems.forEach((fadeItem) => {
    let startPosition = "top 90%",
      tweenOptions = {
        duration: 1.5,
        delay: 0.5,
        opacity: 1,
      };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: fadeItem,
        start: startPosition,
        markers: false,
      },
    });
    timeline.to(fadeItem, tweenOptions);
  });

  const fadeSlideItems = document.querySelectorAll(".fade-slide");

  fadeSlideItems.forEach((fadeSlideItem) => {
    let slideAmount = 80,
      startPosition = "top 90%",
      tweenOptions = {
        duration: 1.3,
        delay: 0.5,
        opacity: 0,
        ease: "power2.out",
      };

    if (fadeSlideItem.hasAttribute("data-slide-amount")) {
      slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
    }

    if (fadeSlideItem.hasAttribute("data-opacity")) {
      tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
    }

    if (fadeSlideItem.hasAttribute("data-ease")) {
      tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
    }

    if (fadeSlideItem.hasAttribute("data-duration")) {
      tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
    }

    if (fadeSlideItem.hasAttribute("data-delay")) {
      tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
    }

    if (fadeSlideItem.classList.contains("right")) {
      tweenOptions.x = slideAmount;
    }

    if (fadeSlideItem.classList.contains("left")) {
      tweenOptions.x = -slideAmount;
    }

    if (fadeSlideItem.classList.contains("top")) {
      tweenOptions.y = -slideAmount;
    }

    if (fadeSlideItem.classList.contains("bottom")) {
      tweenOptions.y = slideAmount;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: fadeSlideItem,
        start: startPosition,
        markers: false,
      },
    });
    timeline.from(fadeSlideItem, tweenOptions);
  });

  const splitChars = document.querySelectorAll(".split_chars");

  splitChars.forEach((item) => {
    let isScrollAble = true,
      tweenOptions = {
        duration: 1.3,
        delay: 0.5,
        autoAlpha: 0,
        stagger: 0.15,
        ease: "power2.out",
      },
      scrollTrigger = {
        trigger: item,
        start: "top 90%",
        markers: false,
      };

    if (item.hasAttribute("data-duration")) {
      tweenOptions.duration = item.getAttribute("data-duration");
    }

    if (item.hasAttribute("data-delay")) {
      tweenOptions.delay = item.getAttribute("data-delay");
    }

    if (item.hasAttribute("data-ease")) {
      tweenOptions.ease = item.getAttribute("data-ease");
    }

    if (item.hasAttribute("data-stagger")) {
      tweenOptions.stagger = item.getAttribute("data-stagger");
    }

    if (item.hasAttribute("data-translateX")) {
      tweenOptions.x = item.getAttribute("data-translateX");
    }

    if (item.hasAttribute("data-translateY")) {
      tweenOptions.y = item.getAttribute("data-translateY");
    }

    if (
      !item.hasAttribute("data-translateX") &&
      !item.hasAttribute("data-translateX")
    ) {
      tweenOptions.x = 100;
    }

    if (item.hasAttribute("data-scroll-trigger")) {
      isScrollAble = item.getAttribute("data-scroll-trigger");
    }

    if (item.hasAttribute("data-trigger-start")) {
      scrollTrigger.start = item.getAttribute("data-trigger-start");
    }

    if (isScrollAble) {
      tweenOptions.scrollTrigger = scrollTrigger;
    }

    let splittedText = new SplitText(item, {
      type: "chars, words",
    });

    gsap.from(splittedText.chars, tweenOptions);
  });

  const moveLine3DItems = document.querySelectorAll(".move-line-3d");

  moveLine3DItems.forEach((item) => {
    let startPosition = "top 90%",
      tweenOptions = {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      };

    if (item.hasAttribute("data-start")) {
      startPosition = item.getAttribute("data-start");
    }

    if (item.hasAttribute("data-duration")) {
      tweenOptions.duration = item.getAttribute("data-duration");
    }

    if (item.hasAttribute("data-delay")) {
      tweenOptions.delay = item.getAttribute("data-delay");
    }

    if (item.hasAttribute("data-opacity")) {
      tweenOptions.opacity = item.getAttribute("data-opacity");
    }

    if (item.hasAttribute("data-stagger")) {
      tweenOptions.stagger = item.getAttribute("data-stagger");
    }

    if (item.hasAttribute("data-rotate")) {
      tweenOptions.rotationX = item.getAttribute("data-rotate");
    }

    if (item.hasAttribute("data-origin")) {
      tweenOptions.transformOrigin = item.getAttribute("data-origin");
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: startPosition,
        duration: tweenOptions.duration,
        scrub: false,
        markers: false,
      },
    });

    const splitedText = new SplitText(item, {
      type: "lines",
    }).split({
      type: "lines",
    });
    gsap.set(item, {
      perspective: 400,
    });
    timeline.from(splitedText.lines, tweenOptions);
  });