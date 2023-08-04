const menuElementToToggle = document.
querySelectorAll(".toggle-menu");
const iconeToggle = document.
querySelector(".icone-toggle");

const toggleMenu = ()=> menuElementToToggle.forEach(el => el.
classList.toggle("hidden"));

iconeToggle.addEventListener("click", toggleMenu);