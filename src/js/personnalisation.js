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
      chooseLogoStyle();
      chooseLogoColor();
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
  let $visiereFace = document.querySelector('.visiere-picture--face');
  let $visiereSide = document.querySelector('.visiere-picture--side');
  let selectedElement = document.querySelector('.sample--visiere.is-selected');
  if (selectedElement.classList.contains('sample--pinatex')) {
    $visiereFace.classList.add('is-visible');
    $visiereSide.classList.add('is-visible');
  } else {
    $visiereFace.classList.remove('is-visible');
    $visiereSide.classList.remove('is-visible');
  }
}

function chooseBouton() {
  let boutonNoirFace = document.querySelector('.bouton__face--noir');
  let boutonBordeauxFace = document.querySelector('.bouton__face--bordeaux');
  let boutonNoirSide = document.querySelector('.bouton__side--noir');
  let boutonBordeauxSide = document.querySelector('.bouton__side--bordeaux');
  let selectedElement = document.querySelector('.sample__bouton.is-selected');
  if (selectedElement.classList.contains('sample--bordeaux')) {
    boutonBordeauxFace.classList.add('is-visible');
    boutonNoirFace.classList.remove('is-visible');
    boutonBordeauxSide.classList.add('is-visible');
    boutonNoirSide.classList.remove('is-visible');
  } else if (selectedElement.classList.contains('sample--noir')) {
    boutonNoirFace.classList.add('is-visible');
    boutonBordeauxFace.classList.remove('is-visible');
    boutonNoirSide.classList.add('is-visible');
    boutonBordeauxSide.classList.remove('is-visible');
  } else {
    boutonNoirFace.classList.remove('is-visible');
    boutonBordeauxFace.classList.remove('is-visible');
    boutonNoirSide.classList.remove('is-visible');
    boutonBordeauxSide.classList.remove('is-visible');
  }
}

function chooseLogoStyle() {
  let $logoKH = document.querySelector('.logo__selection--kh');
  let $logoKapHardie = document.querySelector('.logo__selection--KapHardie');
  let selectedElement = document.querySelector('.logos.is-selected');
  if (selectedElement.classList.contains('logos--hk')) {
    $logoKH.classList.add('is-visible');
    $logoKapHardie.classList.remove('is-visible');
  } else {
    $logoKH.classList.remove('is-visible');
    $logoKapHardie.classList.add('is-visible');
  }
}

function chooseLogoColor() {
  let selectedElement = document.querySelector(
    '.sample__logoColor.is-selected'
  );
  let $logos = document.querySelectorAll('.logo__selection svg');
  let $logosStyle = document.querySelector('.samples__logo--Style');
  if (selectedElement.classList.contains('sample--orange')) {
    $logos.forEach(logo => {
      logo.style.fill = '#ea7307';
    });
    $logosStyle.style.color = '#ea7307';
  } else if (selectedElement.classList.contains('sample--noir')) {
    $logos.forEach(logo => {
      logo.style.fill = 'black';
    });
    $logosStyle.style.color = 'black';
  } else {
    $logos.forEach(logo => {
      logo.style.fill = '#6d071a';
    });
    $logosStyle.style.color = '#6d071a';
  }
}

selectProduct('sample--visiere');
selectProduct('sample--tissu');
selectProduct('sample__bouton');
selectProduct('sample__logoColor');
selectProduct('logos');
selectProduct('view-picture');
chooseQuantity();
chooseSizePersonnalisation();
