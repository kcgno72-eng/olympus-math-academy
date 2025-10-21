document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Header Style Change on Scroll for luxury feel
    const header = document.querySelector('header');
    const heroSection = document.getElementById('hero');
    const heroHeight = heroSection.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.style.backgroundColor = 'var(--color-primary)';
            header.style.borderBottom = `1px solid ${getComputedStyle(document.documentElement).getPropertyValue('--color-accent')}50`;
        } else {
            // Restore semi-transparent look at the very top
            header.style.backgroundColor = 'rgba(26, 26, 46, 0.95)'; 
            header.style.borderBottom = 'none';
        }
    });

    // Optional: Simple feature to showcase adaptive content
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Placeholder for an animation or more complex UI interaction
            console.log(`Hovered over feature ${index + 1}`);
        });
    });
});
