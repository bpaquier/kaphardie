// Work in progress

let seeButton = document.querySelectorAll(".collection__button");
let divSpeedBuy = document.querySelectorAll(".collection__speedbuy");
let quantitySelection = document.querySelectorAll(".quantity");
let quantityList = document.querySelectorAll(".quantity__choice");
let collectionPrice = document.querySelectorAll(".price");
let quantityValue = document.querySelectorAll(".quantity__choice--value");
let quantityChoosen = document.querySelectorAll(".quantity__value");
const sizeDiv = document.querySelectorAll(".cap__size");

let collectionPriceCap = 199.99;

(function speedBuyMobile() {
  for (let i = 0; i < seeButton.length; i++) {
    seeButton[i].addEventListener("click", function() {
      divSpeedBuy[i].classList.toggle("is-selected");
    });
  }
})();

(function sizeCollection() {
  for (let i = 0; i < sizeDiv.length; i++) {
    sizeDiv[i].addEventListener("click", function() {
      sizeDiv.forEach(sizeDiv => {
        sizeDiv.classList.remove("size--active");
      });
      sizeDiv[i].classList.add("size--active");
    });
  }
})();
(function chooseQuantityCollection() {
  
  let canClose = false;
  collectionPrice.forEach(collectionPrice => {
    collectionPrice.innerHTML = collectionPriceCap + " €";
  });
  for (let i = 0; i < quantitySelection.length; i++) {
    quantitySelection[i].addEventListener('click',function(){
      quantitySelection[i].classList.add("is-choosing");
      quantityList[i].classList.add("is-visible"); 
      setTimeout(() => {
        canClose = true;
      }, 10);
    });
  }
  for (let i = 0; i < quantityValue.length; i++) {
    quantityValue[i].addEventListener('click',function(){
      let quantity = quantityValue[i].getAttribute("value");
      collectionPrice[i].innerHTML = collectionPriceCap * parseInt(quantity) + " €";
      quantityChoosen[i].innerHTML = quantity;
    });
    
  }
  document.addEventListener("click", function() {
    if (canClose) {
      quantitySelection.forEach(quantitySelection => {
        quantitySelection.classList.remove("is-choosing");
      });
      quantityList.forEach(quantityList => {
        quantityList.classList.remove("is-visible");
      });
      canClose = false;
    }
  });
})();
