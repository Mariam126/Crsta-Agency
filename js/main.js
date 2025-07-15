const navbar = document.getElementById("navbar-fixed");
const falseicon = document.getElementById("false-icon");
const items = document.querySelectorAll(" .nav-item a");
const navbarcollapse = document.getElementById("navbarSupportedContent");
const navbarToggler = document.getElementById("navbar-toggler");
const links = document.querySelectorAll(".navbar .nav-item .nav-link");
const secondStyleNavbar=document.getElementsByClassName(".main-wrapper .secondStyleNavbar");
const countUp =document.querySelectorAll(".countup");
let container = document.querySelector(".counter-section");
const test=false;
const navbarHeightPx = 90;

document.getElementById("playButton").addEventListener("click", function () {
  document.getElementById("videoModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("videoModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("videoModal")) {
    document.getElementById("videoModal").style.display = "none";
  }
});
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > navbarHeightPx ||
    document.documentElement.scrollTop > navbarHeightPx
  ) {
    navbar.style.backgroundColor = "white";
   
    links.forEach((link) => {
      link.style.color = "black"; // Default color
    });
  } else {
    navbar.style.backgroundColor = "transparent";
    links.forEach(link => {
            link.style.color = 'white'; // Default color
        });
  }
});
items.forEach((item, idx) => {
  item.addEventListener("click", () => {
    ToggleActive(item, idx);
  });
});

function ToggleActive(el, index) {
  el.classList.toggle("active");
  items.forEach((item, idx) => {
    if (idx !== index) {
      item.classList.remove("active");
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.horizontialtab .list li');
  const sections = document.querySelectorAll('.howitworksection .secondsection .center');

  icons.forEach(icon => {
      icon.addEventListener('click', function() {
          // Remove active class from all icons and sections
          icons.forEach(icon => icon.classList.remove('active'));
          sections.forEach(section => section.classList.remove('active'));

          // Add active class to the clicked icon and corresponding section
          icon.classList.add('active');
          const targetId = icon.getAttribute('data-target');
          document.getElementById(targetId).classList.add('active');
      });
  });
});
const swiper = new Swiper('.js-testimonals-slider', {
  // Optional parameters
grabCursor:true,
spaceBetween:30,

  pagination: {
    el: '.js-testimonals-pagination',
    clickable:true
  },
  breakpoints:{
    767:{
      slidesPerView:2
    }
  }
}
)
const count = document.querySelectorAll(".count  #counter");
const section = document.querySelector(".about-section-part4 .row ");
let started = false;


navbarToggler.addEventListener("click", () => {
  navbarcollapse.style.display = "block";
});

falseicon.addEventListener("click", () => {
  navbarcollapse.style.display = "none";
});
window.onscroll = () => {
  if (window.scrollY = container.offsetTop) {
      if (!test) {
          countUp.forEach((e) => {
              let start = 0;
              let end = e.dataset.max;
              
              let count = setInterval(() => {
                  start++;
                  e.textContent = start + "+";
                  if (start == end) {
                      clearInterval(count);
                  }
              }, 2000 / end)
          })
      }
      test = true;
  }
};