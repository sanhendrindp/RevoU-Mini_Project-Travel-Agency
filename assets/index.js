'use strict';

let slideShow = 1;
setInterval(function () {
  document.getElementById('radio' + slideShow).checked = true;
  slideShow++;
  if (slideShow > 3) {
    slideShow = 1;
  }
}, 5000);
