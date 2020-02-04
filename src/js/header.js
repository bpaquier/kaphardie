let $nav = document.getElementById('header__menu');
let $menuContent = document.querySelector(".header__menuContent");
let $iconBurger = document.querySelector(".header__iconBurger");

$nav.addEventListener('click', function () {
  $menuContent.classList.toggle("is-open");
  $iconBurger.classList.toggle("is-open");
});