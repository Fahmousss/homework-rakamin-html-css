window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const navbarText = document.getElementsByClassName("navbar-text");
  const logoImage = document.getElementById("logo-image");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    for (let index = 0; index < navbarText.length; index++) {
      navbarText.item(index).className =
        " navbar-text font-semibold leading-6 text-white text-scrolled ";
    }
    logoImage.src = "image/logo.png";
  } else {
    navbar.classList.remove("scrolled");
    for (let index = 0; index < navbarText.length; index++) {
      navbarText.item(index).className =
        " navbar-text font-semibold leading-6 text-white ";
    }
    logoImage.src = "image/logo-1.png";
  }
};

const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

openMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden-menu");
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden-menu");
});
