'use strict';

const themeBtn = document.querySelector('.theme-btn');
const html = document.querySelector('html');

themeBtn.addEventListener('click', function () {
  html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
});
