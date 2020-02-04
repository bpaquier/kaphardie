let $priceElt = document.querySelector('.price');
let price = 249.99;

function selectProduct(product) {
  let prevSelection = document.querySelector('.' + product + '.is-selected');
  document.querySelectorAll('.' + product).forEach(element => {
    element.addEventListener('click', function() {
      prevSelection.classList.remove('is-selected');
      element.classList.add('is-selected');
      prevSelection = element;
      chooseView();
      chooseTissu();
      chooseVisiere();
      chooseBouton();
    });
  });
}

function chooseQuantity() {
  let canClose = false;
  let $quantityChoosen = document.querySelector('.quantity__value');
  let $QuantitySelection = document.querySelector('.quantity');
  let $QuantityList = document.querySelector('.quantity__choice');
  let $quantityValue = document.querySelectorAll('.quantity__choice--value');
  $priceElt.innerHTML = price + ' €';
  $QuantitySelection.addEventListener('click', function() {
    if (!canClose) {
      $QuantitySelection.classList.add('is-choosing');
      $QuantityList.classList.add('is-visible');
      setTimeout(() => {
        canClose = true;
      }, 10);
    }
  });
  $quantityValue.forEach(element => {
    element.addEventListener('click', function() {
      let quantity = element.getAttribute('value');
      $priceElt.innerHTML = price * parseInt(quantity) + ' €';
      $quantityChoosen.innerHTML = quantity;
      $QuantitySelection.classList.remove('is-choosing');
      $QuantityList.classList.remove('is-visible');
      canClose = false;
    });
  });
  document.addEventListener('click', function() {
    if (canClose) {
      $QuantitySelection.classList.remove('is-choosing');
      $QuantityList.classList.remove('is-visible');
      canClose = false;
    }
  });
}

function chooseSizePersonnalisation() {
  let canClose = false;
  let $selection = document.querySelector('.selection');
  let $sizeSelection = document.querySelector('.size__selection');
  let $sizechoice = document.querySelector('.size__choice');
  let $userChoice = document.querySelectorAll('.size__choice--size');
  $sizeSelection.addEventListener('click', function() {
    if (!canClose) {
      $sizechoice.classList.add('is-visible');
      $sizeSelection.classList.add('is-choosing');
      setTimeout(() => {
        canClose = true;
      }, 10);
    }
  });
  $userChoice.forEach(element => {
    element.addEventListener('click', function() {
      $selection.innerHTML = element.innerHTML;
      $sizechoice.classList.remove('is-visible');
      $sizeSelection.classList.remove('is-choosing');
      canClose = false;
    });
  });
  document.addEventListener('click', function() {
    if (canClose) {
      $sizechoice.classList.remove('is-visible');
      $sizeSelection.classList.remove('is-choosing');
      canClose = false;
    }
  });
}

function chooseView() {
  let $casquettesViews = document.querySelectorAll('.view-picture');
  let $casquetteOrientation = document.querySelectorAll('.main__pictures');
  let prevSelection = document.querySelector('.main__pictures.is-visible');
  for (let i = 0; i < $casquettesViews.length; i++) {
    if ($casquettesViews[i].classList.contains('is-selected')) {
      prevSelection.classList.remove('is-visible');
      $casquetteOrientation[i].classList.add('is-visible');
      prevSelection = $casquetteOrientation[i];
    }
  }
}

function chooseTissu() {
  let colors = document.querySelectorAll('.sample--tissu');
  let picturesFace = document.querySelectorAll('.picture__face');
  let picturesSide = document.querySelectorAll('.picture__side');
  let prevPictureFace = document.querySelector('.picture__face.is-visible');
  let prevPictureSide = document.querySelector('.picture__side.is-visible');
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].classList.contains('is-selected')) {
      prevPictureFace.classList.remove('is-visible');
      picturesFace[i].classList.add('is-visible');
      prevPictureFace = picturesFace[i];
      prevPictureSide.classList.remove('is-visible');
      picturesSide[i].classList.add('is-visible');
      prevPictureSide = picturesSide[i];
    }
  }
}

function chooseVisiere() {
  let $visiere = document.querySelector('.visiere-picture--face');
  let selectedElement = document.querySelector('.sample--visiere.is-selected');
  if (selectedElement.classList.contains('sample--pinatex')) {
    $visiere.classList.add('is-visible');
  } else {
    $visiere.classList.remove('is-visible');
  }
}

function chooseBouton() {
  let boutonNoir = document.querySelector('.bouton__face--noir');
  let boutonBordeaux = document.querySelector('.bouton__face--bordeaux');
  let selectedElement = document.querySelector('.sample__bouton.is-selected');
  if (selectedElement.classList.contains('sample--bordeaux')) {
    boutonBordeaux.classList.add('is-visible');
    boutonNoir.classList.remove('is-visible');
  } else if (selectedElement.classList.contains('sample--noir')) {
    boutonNoir.classList.add('is-visible');
    boutonBordeaux.classList.remove('is-visible');
  } else {
    boutonNoir.classList.remove('is-visible');
    boutonBordeaux.classList.remove('is-visible');
  }
}

selectProduct('sample--visiere');
selectProduct('sample--tissu');
selectProduct('sample__bouton');
selectProduct('logos');
selectProduct('view-picture');
chooseQuantity();
chooseSizePersonnalisation();
