document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open"); // Remove class if it exists
    } else {
      navbar.classList.add("open"); // Add class instantly on click
    }
  });
});
