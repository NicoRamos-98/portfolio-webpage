const now = new Date();
const footerYear = document.getElementById("year");

if (now.getMonth() === 0 && now.getDate() >= 1) {
  footerYear.textContent = now.getFullYear();
} else {
  footerYear.textContent = 2025; 
}