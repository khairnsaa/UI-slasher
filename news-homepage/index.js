const menuWrapper = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");

menuWrapper.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  desktopMenu.classList.toggle("active");
});
