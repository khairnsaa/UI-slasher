const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".desktop-menu");

hamburgerMenu.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
  console.log(menu.style.display);
});
