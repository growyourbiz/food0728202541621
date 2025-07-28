document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('a');

    // Function to toggle menu
    function toggleMenu() {
        hamburgerMenu.classList.toggle('open');
        mainNav.classList.toggle('open');
    }

    // Event listener for hamburger menu click
    hamburgerMenu.addEventListener('click', toggleMenu);

    // Event listener for clicking on a nav link (to close menu after selection)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close the menu if it's open
            if (mainNav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // Optional: Close menu if user clicks outside of it (more advanced)
    // uncomment the following block if you want this feature
    /*
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !hamburgerMenu.contains(event.target) && mainNav.classList.contains('open')) {
            toggleMenu();
        }
    });
    */
});
