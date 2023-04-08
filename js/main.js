function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tabs__content-item");
  var tabButtons = document.getElementsByClassName("tabs__btn-item");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("tabs__content-item--active");
  }
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("tabs__btn-item--active");
  }
  document.getElementById(tabName).classList.add("tabs__content-item--active");
  event.currentTarget.classList.add("tabs__btn-item--active");
}

const burger = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.menu');

burger.addEventListener('click',()=>{
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');

});

const burgerMenu = document.querySelector('.menu');
const menuItems = burgerMenu.querySelectorAll('a');

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {

    burgerMenu.classList.remove('active');
    burger.classList.remove('active');

    const target = document.querySelector(event.target.hash);

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

