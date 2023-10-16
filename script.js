
const button = document.querySelector('.header__btn.header__language');
const span = button.querySelector('span');

button.addEventListener('click', function() {
  if (span.textContent === 'EN') {
    span.innerHTML = 'RU';
  } else {
    span.innerHTML = 'EN';
  }
});


const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger i');
const dropdown = document.querySelector('.dropdown');

burger.onclick = function() {
  dropdown.classList.toggle('open')
  const isOpen = dropdown.classList.contains('open')

  burgerIcon.classList = isOpen
  ? 'fa-solid fa-xmark fa-3xl'
  : 'fa-solid fa-bars fa-3xl'
}
