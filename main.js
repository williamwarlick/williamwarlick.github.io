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
  var content = document.querySelector(".float");
  content.classList.add("animate");
});
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar"); // Select the navbar
  var originalNavbarTop = navbar.style.top; // Store original top value

  window.onscroll = function () {
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    var contactInfo = document.querySelector(".contact-info");

    if (contactInfo) {
      // Check if the contactInfo element exists
      if (scrollPosition > 100) {
        contactInfo.style.display = "none";
        navbar.style.top = "0px"; // Move navbar to the top
      } else {
        contactInfo.style.display = "flex"; // Show contact info again when scrolled back to top
        navbar.style.top = originalNavbarTop; // Reset navbar position
      }
    }
  };
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
