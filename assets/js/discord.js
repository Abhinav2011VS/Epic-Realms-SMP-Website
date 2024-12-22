(function () {
    const currentPath = window.location.pathname;

    // Check if the path is /discord or /discord/
    if (currentPath === "/discord" || currentPath === "/discord/") {
        // Redirect to the Discord link
        window.location.href = "https://discord.gg/F2qMKBu5ea";
    }
    // Else, do nothing
})();
