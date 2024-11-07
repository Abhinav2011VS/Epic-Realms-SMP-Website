// Example code to set player count (dummy data for demonstration)
document.addEventListener('DOMContentLoaded', () => {
  const playerCount = Math.floor(Math.random() * 100) + 1; // Simulated online players
  document.getElementById('player-count').innerText = playerCount;
});

// Smooth scrolling to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
