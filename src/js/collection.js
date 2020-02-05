let seeButton = document.querySelectorAll(".collection__button");
let divSpeedBuy = document.querySelectorAll(".collection__speedbuy");
let QuantitySelection = document.querySelectorAll(".quantity");
let QuantityList = document.querySelectorAll(".quantity__choice");
let collectionPrice = document.querySelectorAll(".price");
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
  for (let i = 0; i < QuantitySelection.length; i++) {
    QuantitySelection[i].addEventListener('click',function(){
      QuantitySelection[i].classList.add("is-choosing");
      QuantityList[i].classList.add("is-visible"); 
      setTimeout(() => {
        canClose = true;
      }, 10);
    });
  }
  document.addEventListener("click", function() {
    if (canClose) {
      QuantitySelection.forEach(QuantitySelection => {
        QuantitySelection.classList.remove("is-choosing");
      });
      QuantityList.forEach(QuantityList => {
        QuantityList.classList.remove("is-visible");
      });
      canClose = false;
    }
  });
})();