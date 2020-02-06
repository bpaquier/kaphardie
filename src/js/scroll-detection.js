let elementsMove = document.querySelectorAll(/* classe des elemnts concernés */);

//pointDtectionFromBottom == preciser en px quand la div sera ciblee a partir du bottom
function revealElement(pointDtectionFromBottom) {
  elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + pointDtectionFromBottom) {
      element.classList.add('is-moved');
    }
  });
}
