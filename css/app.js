const mobileNavigation = function () {
  const mobileNav = document.querySelector(".mobileNavigation");
  const line1 = document.querySelector(".line--1");
  const line2 = document.querySelector(".line--2");
  const line3 = document.querySelector(".line--3");
  const nav = document.querySelector(".nav__links");
  mobileNav.addEventListener("click", function () {
    line1.classList.toggle("line__active--1");
    line2.classList.toggle("line__active--2");
    line3.classList.toggle("line__active--3");
    nav.classList.toggle("nav__links--active");
  });
};

mobileNavigation();
