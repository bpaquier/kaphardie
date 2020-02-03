let seeButton = document.querySelectorAll('.collection__button');
let divSpeedBuy = document.querySelectorAll('.collection__speedbuy');
console.log(seeButton);
console.log(divSpeedBuy);

for (let i = 0; i < seeButton.length; i++) {
  seeButton[i].addEventListener('click', function() {
    divSpeedBuy[i].classList.toggle('is-selected');
  });
}
