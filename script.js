document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
    const menuLinks = document.querySelectorAll('.navbar-links a');

    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            navbarLinks.classList.toggle('active');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarLinks.classList.remove('active');
            });
        });
    }
});