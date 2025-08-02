// Loader and Main Content Elements
const counter = document.getElementById("counter");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("mainContent");

let count = 1;

// Show loader with fade-in on DOM load
window.addEventListener("DOMContentLoaded", () => {
  loader.classList.remove("opacity-0");
  loader.classList.add("opacity-100");
});

// Start counting interval
const interval = setInterval(() => {
  if (count <= 100) {
    counter.textContent = `${count} - 100`;
    count++;
  } else {
    clearInterval(interval);

    // Trigger fade-out animation
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";

      // Show main content with fade-in
      mainContent.classList.remove("hidden");
      mainContent.classList.add("fade-in");
    }, 1000); // Wait for fade-out to complete
  }
}, 30); // Counter speed













//image hover

const box = document.getElementById('imageBox');
    const reveal = document.getElementById('revealLayer');

    box.addEventListener('mousemove', (event) => {
      const bounds = box.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      const mask = `radial-gradient(circle 50px at ${x}px ${y}px, #000 100%, transparent 100%)`;
      reveal.style.maskImage = mask;
      reveal.style.webkitMaskImage = mask;
    });

    box.addEventListener('mouseleave', () => {
      reveal.style.maskImage = 'none';
      reveal.style.webkitMaskImage = 'none';
    });





















