(function () {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
        // If on the homepage, show the main content.
        document.getElementById("homepage").style.display = "block";
    } else {
        // For any other path, show the 404 error page.
        document.getElementById("error-container").style.display = "block";
    }
})();
