const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("home-section").scrollIntoView({
        behavior: "smooth",
    });
});

const downloadLink = document.getElementById("download-link");
downloadLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("download-section").scrollIntoView({
        behavior: "smooth",
    });
});

const joinNowLink = document.getElementById("join-now-link");
joinNowLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("join-now-section").scrollIntoView({
        behavior: "smooth",
    });
});

const playerCountLink = document.getElementById("player-count-link");
playerCountLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("player-count-section").scrollIntoView({
        behavior: "smooth",
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const joinNowButton = document.getElementById("join-now-btn");

    const joinNowSection = document.getElementById("join-now-section");

    if (joinNowButton && joinNowSection) {
        joinNowButton.addEventListener("click", function (event) {
            event.preventDefault();

            joinNowSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }
});

async function fetchLatestRelease() {
    const repoUrl = "https://api.github.com/repos/Abhinav2011VS/RP-Maximus/releases/latest";

    try {
        const response = await fetch(repoUrl);
        const data = await response.json();

        const zipAsset = data.assets.find((asset) => asset.name.endsWith(".zip"));

        if (zipAsset) {
            const downloadUrl = zipAsset.browser_download_url;
            const fileSize = zipAsset.size;

            document.getElementById("downloadBtn").onclick = () => {
                window.location.href = downloadUrl;
            };

            const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
            document.getElementById("fileSize").textContent = `File Size: ${fileSizeMB} MB`;
        }
    } catch (error) {
        console.error("Error fetching release data:", error);
        document.getElementById("fileSize").textContent = "File Size: Error fetching data";
    }
}

window.onload = fetchLatestRelease;

async function checkServerStatus() {
    const serverIP = "otherwise-jewelry.joinmc.link";
    const apiUrl = `https://api.mcsrvstat.us/2/${serverIP}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.online) {
            document.getElementById("server-status").textContent = "Online";
            document.getElementById("server-status").classList.remove("offline");
            document.getElementById("server-status").classList.add("online");

            document.getElementById("players-online").textContent = data.players.online;
        } else {
            document.getElementById("server-status").textContent = "Offline";
            document.getElementById("server-status").classList.remove("online");
            document.getElementById("server-status").classList.add("offline");

            document.getElementById("players-online").textContent = "0";
        }
    } catch (error) {
        console.error("Error fetching server status:", error);
        document.getElementById("server-status").textContent = "Offline";
        document.getElementById("server-status").classList.remove("online");
        document.getElementById("server-status").classList.add("offline");
        document.getElementById("players-online").textContent = "0";
    }
}

document.addEventListener("DOMContentLoaded", checkServerStatus);
