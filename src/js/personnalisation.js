function selectProduct(product) {
  let prevSelection = document.querySelector('.' + product + '.is-selected');
  document.querySelectorAll('.' + product).forEach(element => {
    element.addEventListener('click', function() {
      prevSelection.classList.remove('is-selected');
      element.classList.add('is-selected');
      prevSelection = element;
    });
  });
}

selectProduct('sample--visiere');
selectProduct('sample--tissu');
selectProduct('sample--bouton');
selectProduct('logos');
selectProduct('view-picture');
