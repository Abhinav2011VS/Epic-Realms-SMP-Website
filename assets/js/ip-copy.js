// Select DOM elements
const serverIPElement = document.querySelector('.server-ip');
const secondaryServerIPElement = document.querySelector('.secondary-server-ip');
const popupMessage = document.getElementById('popup-message');

// Function to show popup
function showPopup() {
  popupMessage.style.display = 'block';
  setTimeout(() => {
    popupMessage.style.display = 'none';
  }, 1500); // Hide the popup after 1.5 seconds
}

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showPopup();
  });
}

// Event listeners
serverIPElement.addEventListener('click', () => {
  copyToClipboard('otherwise-jewelry.joinmc.link');
});

secondaryServerIPElement.addEventListener('click', () => {
  copyToClipboard('209.25.143.194:22550');
});