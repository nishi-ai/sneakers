// Smooth scroll
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    e.preventDefault();
    const href = smoothScrollTrigger[i].getAttribute("href");
    const targetElement = document.getElementById(href.replace("#", ""));
    // get the height of the targetElement
    const rect = targetElement.getBoundingClientRect().top;
    // get the number of pixels the currently scrolled document
    const offset = window.pageYOffset;
    // get the fixed header hight
    const gap = 135.45;
    const target = rect + offset - gap;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}

$(function () {
  // Slick slider JQueary
  $("#slick-area").slick({
    arrows: true, // prevoius and next button
    dots: true, // dots navigation
    appendDots: $(".dots"), // add / change dots navigation
    speed: 1000, // slide speed mili
    slidesToShow: 1, // the number of images for slides
    centerMode: true, // show the current slide in center if slidesToShow is odd
    variableWidth: true, // auto calculation the width for each slide
  });

  // Fadein with jQuary
  //   $(window).scroll(function () {
  //     $(".fadein").each(function () {
  //       // get current scrolled height
  //       let scroll = $(window).scrollTop();
  //       // get the height until each fadein element
  //       let target = $(this).offset().top;
  //       // get window height itself
  //       let windowHeight = $(window).height();
  //       // start Fade in when the scrolled height is bigger than the target height -
  //       // window's height + 200px
  //       if (scroll > target - windowHeight + 200) {
  //         $(this).css("opacity", "1");
  //         $(this).css("transform", "translateY(0)");
  //       }
  //     });
  //   });
});

// Fadein with Intersection Observer API
const fadeTargets = document.querySelectorAll(".fadein");

const fadeOption = {
  root: null,
  rootMargin: "10% 0px",
  threshold: [0],
};

// The callback receives a list of IntersectionObserverEntry objects and the observer
const targets = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

// Create a instance of the intersection observer.
// trigger this callback 'targets' when scrolled and passed by fadeOption (when image start to show with 0%).
const fadeObserver = new IntersectionObserver(targets, fadeOption);

// call fadeObserver for each fadeTarget
fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});
