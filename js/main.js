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
document.getElementById("navbar-closes").addEventListener("click", closeNavbar);




$(document).ready(function () {
  $("#team-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    items: 2,
    navText: [
      '<img class="img-1" src="./images/orqaga.svg" alt="Prev">',
      '<img class="img-2" src="./images/oldinga.svg" alt="Next">'
    ],
    autoplay: true,
    autoplayTimeout: 3600,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
  });
});



const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Active tabni o'chirish
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-red-500", "text-white", "active");
      btn.classList.add("bg-gray-200", "text-gray-700");
    });

    // Yangi aktiv tab
    button.classList.remove("bg-red-200", "text-gray-700");
    button.classList.add("bg-red-500", "text-white");

    // Barcha tab contentni yashirish
    tabContents.forEach((content) => content.classList.add("hidden"));

    // Faol tab contentni ko‘rsatish
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.remove("hidden");
  });
});