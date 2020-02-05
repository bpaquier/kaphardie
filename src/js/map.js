let isDescription = false;
let $mapConteneur = document.querySelector('.map__countries');
let previousSelection = document.querySelector(
  '.map__element.map__element--selected'
);
let countriesDescription = document.querySelectorAll('.map__element');

(function showCountryDescription() {
  let countries = document.querySelectorAll(
    '#FR, #IN, #PT, #ID, #GH, #BR, #UG'
  );

  for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener('click', function() {
      if (!isDescription) {
        $mapConteneur.classList.add('is-visible');
        previousSelection.classList.remove('map__element--selected');
        countriesDescription[i].classList.add('map__element--selected');
        previousSelection = countriesDescription[i];
        setTimeout(() => {
          isDescription = true;
        }, 0.1);
      }
    });
  }
})();

(function closeCountryDescription() {
  document.querySelectorAll('.close').forEach(element => {
    element.addEventListener('click', function() {
      if (isDescription) {
        previousSelection.classList.remove('map__element--selected');
        $mapConteneur.classList.remove('is-visible');
        isDescription = false;
      }
    });
  });
})();

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    countriesDescription.forEach(element => {
      element.classList.remove('map__element--selected');
    });
    return;
  }
});
