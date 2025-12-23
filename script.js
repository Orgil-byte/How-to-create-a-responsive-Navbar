const hamburgerBtn = document.querySelector(`.hamburger-menu`);
const mainNavPhone = document.querySelector(`.phone-main-nav`);

const navigationBurger = () => {
  mainNavPhone.classList.toggle(`top`);
  hamburgerBtn.classList.toggle(`rotate90`);
};

hamburgerBtn.addEventListener(`click`, navigationBurger);
