const menu = document.getElementById('menu-window');
const btnMenu = document.getElementById('btn-burger-menu');
const form = document.getElementById('form-calculate');
const btnCalculate = document.getElementById('btn-form-calculate');
const overlay = document.getElementById('overlay');
const btnModal = document.getElementById('modal-btn');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu_show');
  if (menu.classList.contains('menu_show')) btnMenu.classList.add('header__burger-menu_click');
  else btnMenu.classList.remove('header__burger-menu_click');
});

btnCalculate.addEventListener('click', (event) => {
  event.preventDefault();
  if (form.checkValidity()) overlay.classList.add('overlay_show');
  else return;
});

btnModal.addEventListener('click', () => {
  overlay.classList.remove('overlay_show');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay_show');
});