'use strict';

// Banner
let slideShow = 1;
setInterval(function () {
  document.getElementById('radio' + slideShow).checked = true;
  slideShow++;
  if (slideShow > 3) {
    slideShow = 1;
  }
}, 5000);

// Contact us
const sendBtn = document.querySelector('.submit-send');

sendBtn.addEventListener('click', function () {
  const inputName = document.querySelector('.input-name').value;
  const inputEmail = document.querySelector('.input-email').value;
  const inputMessage = document.querySelector('.input-message').value;

  if (!inputName || !inputEmail || !inputMessage) {
    alert('Please complete your data');
  } else {
    alert('Your question has been sent');
  }
});
