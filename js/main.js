$(document).ready(function () {
  $("#nav-toggle, #close-button").click(function () {
    $("#full-screen-nav").toggleClass("show");
  });

  // Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.classList.add("show");
    } else {
      mybutton.classList.remove("show");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector(".content");
  content.classList.add("animate");
  var content2 = document.querySelector(".content2");
  content2.classList.add("animate");
  var content = document.querySelector(".float");
  content.classList.add("animate");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
const hiddenElementsRight = document.querySelectorAll(".hidden-right");

hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));

var audio = document.getElementById("myAudio");
var playIcon = document.getElementById("playIcon");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var banner = document.querySelector(".banner");
  var backgroundImage = document.querySelector(".background-image");

  // Check if the screen width is greater than 991px (desktop)
  if (window.innerWidth > 991) {
    backgroundImage.style.paddingTop = banner.offsetHeight + "px";
  }
});

window.addEventListener("scroll", function () {
  var banner = document.querySelector(".banner");
  var backgroundImage = document.querySelector(".background-image");
  var scrollPosition = window.pageYOffset;

  // Check if the screen width is greater than 991px (desktop)
  if (window.innerWidth > 991) {
    if (scrollPosition > 0) {
      banner.classList.add("hidden");
      backgroundImage.style.paddingTop = "0";
    } else {
      banner.classList.remove("hidden");
      backgroundImage.style.paddingTop = banner.offsetHeight + "px";
    }
  }
});

var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  var banner = document.querySelector(".banner");
  var backgroundImage = document.querySelector(".background-image");

  // Check if the screen width is greater than 991px (desktop)
  if (window.innerWidth > 991) {
    banner.classList.add("hidden");
    backgroundImage.style.paddingTop = "0";
  }
});
