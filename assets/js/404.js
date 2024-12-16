(function () {
    const currentPath = window.location.pathname;
    const homepage = document.getElementById("homepage");
    const errorContainer = document.getElementById("error-container");

    if (currentPath === "/") {
        // Show homepage and hide the 404 error container
        homepage.style.display = "block";
        errorContainer.style.display = "none";
    } else {
        // Otherwise, show the 404 error container and hide the homepage
        homepage.style.display = "none";
        errorContainer.style.display = "block";
    }
})();
