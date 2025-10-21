const menuHumburger = document.querySelector("#menu");
menuHumburger.addEventListener("click", function(){
  menuHumburger.classList.toggle("show");

})
const icon_btn = document.querySelector(".icon");
const problem_hide = document.querySelector("#problem-hide");

icon_btn.addEventListener("click", function (e) {
  e.preventDefault();
  problem_hide.classList.toggle("unhide");
  icon_btn.classList.toggle("rotate");
});

const year = document.querySelector("#year");
  const today = new Date();
year.textContent = today.getFullYear()
