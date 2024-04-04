const menu = document.getElementById('menu-window');
const btnMenu = document.getElementById('btn-burger-menu');
const form = document.getElementById('form-calculate');
const btnCalculate = document.getElementById('btn-form-calculate');
const overlay = document.getElementById('overlay');
const btnModal = document.getElementById('modal-btn');
const btnCancelApplication = document.getElementById('btn-cancel-application');
const windowApplication = document.getElementById('window-application');
const btnOpenApplication = document.getElementById('btn-open-application');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu_show');
  if (menu.classList.contains('menu_show')) btnMenu.classList.add('header__burger-menu_click');
  else btnMenu.classList.remove('header__burger-menu_click');
});

btnCalculate.addEventListener('click', (event) => {
  if (form.checkValidity()) overlay.classList.add('overlay_show');
  else return;
});

btnModal.addEventListener('click', () => {
  overlay.classList.remove('overlay_show');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay_show');
});

btnCancelApplication.addEventListener('click', (event) => {
  event.preventDefault();
  windowApplication.classList.remove('window-application_show');
  const inputs = windowApplication.getElementsByClassName('window-application__form__input');
  Array.from(inputs).forEach((input) => input.value = '');
});

btnOpenApplication.addEventListener('click', () => {
  windowApplication.classList.add('window-application_show');
});