// Set year dynamically
const now = new Date();
const footerYear = document.getElementById("year");
footerYear.textContent = now.getFullYear();

// Toggle mobile menu
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));

// Hero title animation
const title = document.getElementById("hero-title");
const text = "Hi, I’m Nico";

title.innerHTML = text
  .split("")
  .map((char, i) => `<span style="opacity:0; transition:opacity 0.3s ${i * 0.1}s">${char}</span>`)
  .join("");

window.onload = () => {
  // keep  other onload functions safe
  document.querySelectorAll("#hero-title span").forEach(span => {
    span.style.opacity = 1;
  });
};

// show subtitle after a delay
  setTimeout(() => {
    document.getElementById("hero-subtitle").classList.add("visible");
  }, text.length * 100); 

