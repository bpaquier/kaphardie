let isDescription = false;
let $mapConteneur = document.querySelector('.map__countries');
let previousSelection = document.querySelector(
  '.map__element.map__element--selected'
);
let countriesDescription = document.querySelectorAll('.map__element');
let $crossButton = document.querySelector('.cross');

(function showCountryDescription() {
  let countries = document.querySelectorAll('.productor');
  for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener('mouseover', function() {
      if (!isDescription) {
        setTimeout(() => {
          $mapConteneur.classList.add('is-visible');
          previousSelection.classList.remove('map__element--selected');
          countriesDescription[i].classList.add('map__element--selected');
          previousSelection = countriesDescription[i];
        }, 0.2);
        setTimeout(() => {
          isDescription = true;
        }, 0.1);
      }
    });
  }
})();

(function closeCountryDescriptionBymoseOver() {
  $mapConteneur.addEventListener('mouseleave', function(e) {
    if (isDescription) {
      previousSelection.classList.remove('map__element--selected');
      e.target.classList.remove('is-visible');
      isDescription = false;
    }
  });
})();

(function closeCountryDescriptionByclick() {
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

(function checkInnerWidth() {
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      countriesDescription.forEach(element => {
        element.classList.remove('map__element--selected');
      });
      return;
    } else {
      countriesDescription[0].classList.add('map__element--selected');
    }
  });
})();

(function checkIfDeviceIstactile() {
  try {
    document.createEvent('TouchEvent');
    $crossButton.getElementsByClassName.display = 'block';
  } catch (e) {
    return;
  }
})();
