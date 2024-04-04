const menu = document.getElementById('menu-window');
const btnMenu = document.getElementById('btn-burger-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu_show');
  if (menu.classList.contains('menu_show')) btnMenu.classList.add('header__burger-menu_click');
  else btnMenu.classList.remove('header__burger-menu_click');
});