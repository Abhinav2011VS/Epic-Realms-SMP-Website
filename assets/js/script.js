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
