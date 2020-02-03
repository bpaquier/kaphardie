let seeButton = document.querySelectorAll('.collection__button');
let divSpeedBuy = document.querySelectorAll('.collection__speedbuy');
let $priceElt = document.querySelector('.price');
let collectionPrice = 249.99;
console.log(seeButton);
console.log(divSpeedBuy);

for (let i = 0; i < seeButton.length; i++) {
  seeButton[i].addEventListener('click', function() {
    divSpeedBuy[i].classList.toggle('is-selected');
  });
}

const sizeDiv = document.querySelectorAll(".cap__size");
for (let i = 0; i < sizeDiv.length; i++) {
  sizeDiv[i].addEventListener("click", function() {
    sizeDiv.forEach(sizeDiv => {
      sizeDiv.classList.remove('size--active')
    });  
    for (let y = 0; y < sizeDiv.length; y+=3) {
      sizeDiv[i+y].classList.add("size--active");
    }
  });
}

function chooseQuantity() {
  let canClose = false;
  let $quantityChoosen = document.querySelector('.quantity__value');
  let $QuantitySelection = document.querySelector('.quantity');
  let $QuantityList = document.querySelector('.quantity__choice');
  let $quantityValue = document.querySelectorAll('.quantity__choice--value');
  $priceElt.innerHTML = collectionPrice + ' €';
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
      $priceElt.innerHTML = collectionPrice * parseInt(quantity) + ' €';
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

chooseQuantity();

