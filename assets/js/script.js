// Get the "Home" link by its ID
const homeLink = document.getElementById('home-link');

// Add an event listener for the "click" event
homeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (no URL change)
    
    // Scroll the page smoothly to the top
    window.scrollTo({
        top: 0, // Scroll to the top
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