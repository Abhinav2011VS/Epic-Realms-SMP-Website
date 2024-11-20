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