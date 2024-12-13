// Select DOM elements
const serverIPElement = document.querySelector(".server-ip");
const secondaryServerIPElement = document.querySelector(".secondary-server-ip");
const popupMessage = document.getElementById("popup-message");

// Function to show popup
function showPopup() {
    popupMessage.style.animation = "none"; // Reset the animation
    void popupMessage.offsetWidth; // Trigger reflow
    popupMessage.style.animation = "flyInOut 1.5s ease forwards"; // Restart the animation
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showPopup();
    });
}

// Event listeners
serverIPElement.addEventListener("click", () => {
    copyToClipboard("otherwise-jewelry.joinmc.link");
});

secondaryServerIPElement.addEventListener("click", () => {
    copyToClipboard("209.25.143.194:22550");
});
