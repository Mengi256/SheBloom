

const menuHumburger = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const header_nav = document.querySelector(".nav");

if (menuHumburger && navigation && header_nav) {
  menuHumburger.addEventListener("click", function () {
    menuHumburger.classList.toggle("show");
    navigation.classList.toggle("show");
    header_nav.classList.toggle("show")
  });
}







// document.addEventListener("DOMContentLoaded", function () {
//   const logo = document.querySelector(".logo");
//   const header_btn = document.querySelector(".header-btn")
//   if (logo && header_btn) {
   
//     setTimeout(() => {
//       logo.classList.add("slide-in");
//       header_btn.classList.add("slide-in")
//     }, 100);
//   }
// });



const icon_btn = document.querySelector(".icon");
const problems = document.querySelector(".problems");
const problem_hide = document.querySelector("#problem-hide");

if (problems && problem_hide && icon_btn) {
  problems.addEventListener("click", function (e) {
    e.preventDefault();
    problem_hide.classList.toggle("unhide");
    icon_btn.classList.toggle("rotate");
  });
}


const quick_icon = document.querySelector(".quick-icon");

const links_box = document.querySelector(".links-box");

if (quick_icon && links_box) {
  quick_icon.addEventListener("click", function (e) {
    e.preventDefault();
    links_box.classList.toggle("unhide");
    quick_icon.classList.toggle("rotate");
  });
}

const year = document.querySelector("#year");
if (year) {
  const today = new Date();
  year.textContent = today.getFullYear();
}

const sections = document.querySelectorAll("section");
if (sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
        observer.unobserve(entry.target); 
      }
    });
  });
  sections.forEach(section => observer.observe(section));
}

