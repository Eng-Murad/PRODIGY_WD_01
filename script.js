window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundColor = window.scrollY > 20 ? "#f5f5f5" : "#fff";
});
