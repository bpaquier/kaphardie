let $elementsMove = document.querySelectorAll('.element--moving');
let $headerContent = document.querySelector('.header__content');
console.log($elementsMove);

function revealElement() {
  $elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 150) {
      element.classList.add('is-on-screen');
    }
  });
}

window.addEventListener('scroll', function() {
  revealElement();
});

window.addEventListener('load', function() {
  $headerContent.classList.add('is-on-screen');
});
