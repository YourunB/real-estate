const menu = document.getElementById('menu-window');
const btnMenu = document.getElementById('btn-burger-menu');
const form = document.getElementById('form-calculate');
const btnCalculate = document.getElementById('btn-form-calculate');
const overlay = document.getElementById('overlay');
const btnModal = document.getElementById('modal-btn');
const btnCancelApplication = document.getElementById('btn-cancel-application');
const windowApplication = document.getElementById('window-application');
const btnOpenApplication = document.getElementById('btn-open-application');
const collectionBackImg = document.getElementsByClassName('why-us__back-img');

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

collectionBackImg[0].classList.add('why-us__back-img_animation');
setInterval(() => {
  for (let i = 0; i < collectionBackImg.length; i += 1) {
    if (collectionBackImg[i].classList.contains('why-us__back-img_animation') && i < collectionBackImg.length - 1) {
      collectionBackImg[i + 1].classList.add('why-us__back-img_animation');
      collectionBackImg[i].classList.remove('why-us__back-img_animation');
      return;
    }
    if (i === collectionBackImg.length - 1) {
      collectionBackImg[0].classList.add('why-us__back-img_animation');
      collectionBackImg[3].classList.remove('why-us__back-img_animation');
      return;
    }
  }
}, 9980)