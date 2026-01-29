// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '20px', // Reduced distance for subtle effect
    duration: 800, // Faster duration
    delay: 100,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)', 
    reset: false,
    mobile: true, // Keep enabled but optimized
    viewFactor: 0.2
});

// Navbar
sr.reveal('.navbar', { origin: 'top', interval: 200 });

// About Section
sr.reveal('.about-img', { origin: 'left', delay: 300 });
sr.reveal('.about-content', { origin: 'right', delay: 400 });

// Skills
sr.reveal('.skills-section h2', { delay: 200 });
sr.reveal('.skills-track', { delay: 400, distance: '0px', opacity: 0, duration: 1500 });

// Projects
sr.reveal('.section-header', { delay: 200 });
sr.reveal('.project-card', { 
    interval: 200, // Stagger effect
    distance: '50px' 
});

// Contact
sr.reveal('.contact-container', { scale: 0.95, duration: 1200 });
