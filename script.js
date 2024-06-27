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

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Check if the link is to a different page
            if (href.startsWith('http') || href.endsWith('.html')) {
                // It's an external link or a different page, let the default behavior happen
                return;
            }

            // It's a same-page link, implement smooth scrolling
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});