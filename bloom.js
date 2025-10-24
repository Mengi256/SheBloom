const menuHumburger = document.querySelector("#menu");
const navigation = document.querySelector("#navigation")
menuHumburger.addEventListener("click", function(){
  menuHumburger.classList.toggle("show");
  navigation.classList.toggle("show")

})
const icon_btn = document.querySelector(".icon");
const problems = document.querySelector(".problems")
const problem_hide = document.querySelector("#problem-hide");

problems.addEventListener("click", function (e) {
  e.preventDefault();
  problem_hide.classList.toggle("unhide");
  icon_btn.classList.toggle("rotate");
});

const year = document.querySelector("#year");
  const today = new Date();
year.textContent = today.getFullYear()


