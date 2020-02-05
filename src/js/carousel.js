let prevButton = document.querySelector("#prevbutton");
let NextButton = document.querySelector("#nextbutton");
let landDiv = document.querySelectorAll(".map__element");
let carouselPoint = document.querySelectorAll(".carousel__point");
let carou = 0;
prevButton.style.visibility = "hidden";
function prevnext(updown) {
  landDiv[carou].classList.remove("map__element--selected");
  carouselPoint[carou].classList.remove("carousel__point--selected");
  carou = updown;
  landDiv[carou].classList.add("map__element--selected");
  carouselPoint[carou].classList.add("carousel__point--selected");
  if (carou === 0) {
    prevButton.style.visibility = "hidden";
  }
  if (carou > 0) {
    prevButton.style.visibility = "visible";
  }
  if (carou < landDiv.length - 1) {
    NextButton.style.visibility = "visible";
  }
  if (carou === landDiv.length - 1) {
    NextButton.style.visibility = "hidden";
  }
}
prevButton.addEventListener("click", function() {
  prevnext(carou - 1);
});
NextButton.addEventListener("click", function() {
  prevnext(carou + 1);
});
