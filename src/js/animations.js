let $elementsMove = document.querySelectorAll('.element--moving');
let $headerContent = document.querySelector('.header__content');
let $burgerButton = document.querySelector('.header__menu');
let $footer = document.querySelector('footer');
let $burgerButtonBottomPosition =
  $burgerButton.offsetTop + $burgerButton.offsetHeight;

function revealElement() {
  $elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 150) {
      element.classList.add('is-on-screen');
    }
  });
}

function toogleMenuBurger() {
  $burgerButton.classList.toggle(
    'is-hidden',
    window.scrollY + $burgerButtonBottomPosition > $footer.offsetTop
  );
}

window.addEventListener('scroll', function() {
  revealElement();
  toogleMenuBurger();
});

window.addEventListener('load', function() {
  $headerContent.classList.add('is-on-screen');
});
