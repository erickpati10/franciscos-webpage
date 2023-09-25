// const menuToggle = document.querySelector(".menu-toggle");
// const navMenu = document.querySelector(".nav-menu");

// menuToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });

const hamburger = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
