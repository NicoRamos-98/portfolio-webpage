const now = new Date();
const footerYear = document.getElementById("year");

if (now.getMonth() === 0 && now.getDate() >= 1) {
  footerYear.textContent = now.getFullYear();
} else {
  footerYear.textContent = 2025; 
}


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

