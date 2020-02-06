let $itemsMenu = document.querySelectorAll('.can-close');
let $menuContent = document.querySelector('.header__menuContent');
let $iconBurger = document.querySelector('.header__iconBurger');
let $burgerItems = document.querySelectorAll(".header__menuItem--itemTop");

$itemsMenu.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    $menuContent.classList.toggle('is-open');
    $iconBurger.classList.toggle('is-open');

    $burgerItems.forEach(element => {
      element.classList.toggle("open");
    })
  });
});
