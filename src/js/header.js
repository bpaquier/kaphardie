let $itemsMenu = document.querySelectorAll('.can-close');
let $menuContent = document.querySelector('.header__menuContent');
let $iconBurger = document.querySelector('.header__iconBurger');

$itemsMenu.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    $menuContent.classList.toggle('is-open');
    $iconBurger.classList.toggle('is-open');
  });
});
