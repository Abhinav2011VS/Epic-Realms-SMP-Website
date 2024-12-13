const serverIPElement = document.querySelector(".server-ip");
const secondaryServerIPElement = document.querySelector(".secondary-server-ip");
const popupMessage = document.getElementById("popup-message");

function triggerPopup() {
    popupMessage.classList.add("show");

    // Remove the class after the animation has completed
    setTimeout(() => {
        popupMessage.classList.remove("show");
    }, 1500); // Total animation duration
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        triggerPopup();
    });
}

serverIPElement.addEventListener("click", () => {
    copyToClipboard("otherwise-jewelry.joinmc.link");
});

secondaryServerIPElement.addEventListener("click", () => {
    copyToClipboard("209.25.143.194:22550");
});
