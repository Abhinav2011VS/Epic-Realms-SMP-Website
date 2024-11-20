// Get the "Home" link by its ID and add smooth scroll to top
const homeLink = document.getElementById('home-link');
homeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (no URL change)
    document.getElementById('home-section').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Get the "Download Resource Pack" link by its ID and scroll to download section
const downloadLink = document.getElementById('download-link');
downloadLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (no URL change)
    document.getElementById('download-section').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Get the "Join Now" link by its ID and scroll to join now section
const joinNowLink = document.getElementById('join-now-link');
joinNowLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (no URL change)
    document.getElementById('join-now-section').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Get the "Player Count" link by its ID and scroll to player count section
const playerCountLink = document.getElementById('player-count-link');
playerCountLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (no URL change)
    document.getElementById('player-count-section').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Fetch the latest release data from GitHub
async function fetchLatestRelease() {
    const repoUrl = 'https://api.github.com/repos/Abhinav2011VS/RP-Maximus/releases/latest';
    
    try {
        const response = await fetch(repoUrl);
        const data = await response.json();
        
        // Get the latest .zip asset URL and its file size
        const zipAsset = data.assets.find(asset => asset.name.endsWith('.zip'));
        
        if (zipAsset) {
            const downloadUrl = zipAsset.browser_download_url;
            const fileSize = zipAsset.size; // File size in bytes
            
            // Set the download link and update file size
            document.getElementById('downloadBtn').onclick = () => {
                window.location.href = downloadUrl;
            };
            
            // Convert file size from bytes to MB
            const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
            document.getElementById('fileSize').textContent = `File Size: ${fileSizeMB} MB`;
        }
    } catch (error) {
        console.error('Error fetching release data:', error);
        document.getElementById('fileSize').textContent = 'File Size: Error fetching data';
    }
}

// Fetch the latest release data when the page loads
window.onload = fetchLatestRelease;

async function checkServerStatus() {
    const serverIP = 'otherwise-jewelry.joinmc.link'; // Your server IP
    const apiUrl = `https://api.mcsrvstat.us/2/${serverIP}`; // Using the mcstatus API to get server info
    
    try {
        // Fetch the server status
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the server is online
        if (data.online) {
            // Server is online, update status and players
            document.getElementById('server-status').textContent = 'Online';
            document.getElementById('server-status').classList.remove('offline');
            document.getElementById('server-status').classList.add('online');
            
            // Update player count
            document.getElementById('players-online').textContent = data.players.online;
        } else {
            // Server is offline
            document.getElementById('server-status').textContent = 'Offline';
            document.getElementById('server-status').classList.remove('online');
            document.getElementById('server-status').classList.add('offline');
            
            // Update player count to 0 when offline
            document.getElementById('players-online').textContent = '0';
        }
    } catch (error) {
        console.error('Error fetching server status:', error);
        // If the request fails, mark the server as offline
        document.getElementById('server-status').textContent = 'Offline';
        document.getElementById('server-status').classList.remove('online');
        document.getElementById('server-status').classList.add('offline');
        document.getElementById('players-online').textContent = '0';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', checkServerStatus);