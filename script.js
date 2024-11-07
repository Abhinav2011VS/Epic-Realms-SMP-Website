document.addEventListener('DOMContentLoaded', () => {
  const serverIP = "otherwise-jewelry.joinmc.link"; // Server IP updated
  
  // Fetch player count from the public API
  fetch(`https://api.mcsrvstat.us/2/${serverIP}`)
    .then(response => response.json())
    .then(data => {
      const playerCountElement = document.getElementById('player-count');
      if (data && data.online) {
        playerCountElement.innerText = data.players.online;
      } else {
        playerCountElement.innerText = "Server Offline";
      }
    })
    .catch(() => {
      document.getElementById('player-count').innerText = "Unable to fetch data";
    });
});

// Smooth scrolling to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
