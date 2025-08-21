let typed = new Typed(".text", {
  strings: ["Frontend Developer", "Student of Coddy Camp", "Web developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// Select the burger and navbar
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

// Toggle burger menu
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
});
