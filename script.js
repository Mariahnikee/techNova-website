// Toggle the menu-active class on the nav-container
const words = [
  "Websites",
  "SaaS Tools",
  "E-commerce Stores",
  "Application",
  "Customized Software",
];
const textEl = document.getElementById("changingText");
let index = 0;

setInterval(() => {
  index = (index + 1) % words.length;
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = words[index];
    textEl.style.opacity = 1;
  }, 400);
}, 2500);

// FAQ Toggle Function
function toggleFaq(index) {
  const answer = document.getElementById(`faq-${index}`);
  const question = answer.previousElementSibling;
  const icon = question.querySelector("span:last-child");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "+";
  } else {
    // Close all other FAQs
    document.querySelectorAll(".faq-answer").forEach((faq) => {
      faq.style.display = "none";
    });
    document
      .querySelectorAll(".faq-question span:last-child")
      .forEach((icon) => {
        icon.textContent = "+";
      });

    // Open clicked FAQ
    answer.style.display = "block";
    icon.textContent = "−";
  }
}

// Scroll effect for navigation
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;

  // Add 'scrolled' class when user scrolls more than 50px
  if (scrollPosition > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Optional: Mobile menu toggle functionality
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");
const mainContent = document.getElementById("main-content");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");

  // Toggle blur on main content
  mainContent.classList.toggle("blurred");
});


//service care animation
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");
  const titles = document.querySelectorAll(
    ".section-title, .semi-title, .services p"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  cards.forEach((card) => observer.observe(card));
  titles.forEach((el) => observer.observe(el));
});
