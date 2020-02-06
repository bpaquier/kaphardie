let $itemsMenu = document.querySelectorAll(".can-close");
let $menuContent = document.querySelector(".header__menuContent");
let $iconBurger = document.querySelector(".header__iconBurger");

console.log($itemsMenu);

$itemsMenu.forEach(item => {
  item.addEventListener('click', function () {
    $menuContent.classList.toggle("is-open");
    $iconBurger.classList.toggle("is-open");
  });
});

