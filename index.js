let menu = document.querySelector('.menu-links')
let icon = document.querySelector('.toggle-button')
const icon2 = icon.querySelector('i');
const links = menu.querySelectorAll('a');

icon.addEventListener('click', (toggleMenu) => {
  menu.classList.toggle('open');
  icon.classList.toggle('open');
  if (icon.classList.contains('open')) {
    icon2.classList.remove('fa-bars')
    icon2.classList.add('fa-xmark');
  } else {
    icon2.classList.remove('fa-xmark');
    icon2.classList.add('fa-bars');
  }
});

const closeMenu = () => {
  menu.classList.remove('open');
  icon.classList.remove('open');
  icon2.classList.remove('fa-xmark');
  icon2.classList.add('fa-bars');
}

links.forEach(link => {
  link.addEventListener('click', closeMenu);
});


