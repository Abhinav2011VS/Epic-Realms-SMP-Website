// FINAL

const serverIPElement = document.querySelector(".server-ip");
const secondaryServerIPElement = document.querySelector(".secondary-server-ip");
const popupMessage = document.getElementById("popup-message");

function showPopup() {
    popupMessage.classList.add("show");

    // Wait for animation duration, then hide the popup
    setTimeout(() => {
        popupMessage.classList.remove("show");
    }, 1500);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showPopup();
    });
}

serverIPElement.addEventListener("click", () => {
    copyToClipboard("otherwise-jewelry.joinmc.link");
});

secondaryServerIPElement.addEventListener("click", () => {
    copyToClipboard("209.25.143.194:22550");
});
