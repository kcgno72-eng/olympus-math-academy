// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target section's ID from the link's href attribute
        const targetId = this.getAttribute('href');
        
        // Find the target element on the page
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Use smooth scrolling behavior
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset by header height (approx. 80px)
                behavior: 'smooth'
            });
        }
    });
});

// --- Header Shadow Effect on Scroll ---
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.blueprint-header');
    
    // Function to add or remove the shadow class based on scroll position
    const addHeaderShadow = () => {
        if (window.scrollY > 50) {
            // Add a subtle shadow class if scrolled more than 50 pixels
            header.classList.add('scrolled');
        } else {
            // Remove the shadow class if at the top
            header.classList.remove('scrolled');
        }
    };

    // Run the function immediately and whenever the user scrolls
    addHeaderShadow();
    window.addEventListener('scroll', addHeaderShadow);
});

// NOTE: You would need to add the corresponding '.scrolled' CSS rule 
// to your 'style.css' file if you want a visible effect (e.g., box-shadow).
// We can do that next if you want!
