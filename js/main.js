function openNavbar() {
  const navbar = document.getElementById("navbar-responsive");
  navbar.classList.remove("left-[-100%]");
  navbar.classList.add("left-0");
}

function closeNavbar() {
  const navbar = document.getElementById("navbar-responsive");
  navbar.classList.remove("left-0");
  navbar.classList.add("left-[-100%]");
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
