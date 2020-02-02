function selectProduct(product) {
  let prevSelection = document.querySelector('.' + product + '.is-selected');
  document.querySelectorAll('.' + product).forEach(product => {
    product.addEventListener('click', function() {
      prevSelection.classList.remove('is-selected');
      product.classList.add('is-selected');
      prevSelection = product;
    });
  });
}

selectProduct('sample--visiere');
selectProduct('sample--tissu');
selectProduct('sample--bouton');
selectProduct('logos');
selectProduct('view-picture');
