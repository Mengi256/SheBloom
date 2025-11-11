

// Hamburger menu toggle
const menuHamburger = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const headerNav = document.querySelector(".nav");
const header = document.querySelector(".header");
const nav_para = document.querySelector(".nav-para");
const shebloom_logo = document.querySelector(".shebloom-logo")

if (menuHamburger && navigation && headerNav) {
  menuHamburger.addEventListener("click", function () {
    menuHamburger.classList.toggle("show");
    navigation.classList.toggle("show");
    headerNav.classList.toggle("show");
    header.classList.toggle("show");
    nav_para.classList.toggle("show");
    shebloom_logo.classList.toggle("show")
  });
}

// Dropdown toggle for "What We Do"
const whatWeDoBtn = document.querySelector(".what-we-do-btn");
const whatWeDo = document.querySelector(".what-we-do");

if (whatWeDoBtn && whatWeDo) {
  whatWeDoBtn.addEventListener("click", function (e) {
    // Prevent link navigation
    e.preventDefault();

    // Toggle submenu visibility
    whatWeDoBtn.classList.toggle("submenu");
    whatWeDo.classList.toggle("submenu");

    // Optional: update ARIA attribute for accessibility
    const expanded = whatWeDoBtn.getAttribute("aria-expanded") === "true";
    whatWeDoBtn.setAttribute("aria-expanded", !expanded);
  });
}

const whoWeAreBtn = document.querySelector(".who-we-are-btn");
const whoWeAre = document.querySelector(".who-we-are");

if (whoWeAreBtn && whoWeAre) {
  whoWeAreBtn.addEventListener("click", function (e) {
    // Prevent link navigation
    e.preventDefault();

    // Toggle submenu visibility
    whoWeAreBtn.classList.toggle("submenu");
    whoWeAre.classList.toggle("submenu");

    // Optional: update ARIA attribute for accessibility
    const expanded = whoWeAreBtn.getAttribute("aria-expanded") === "true";
    whoWeAreBtn.setAttribute("aria-expanded", !expanded);
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

