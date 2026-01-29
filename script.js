// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth ease-out
    reset: false // Animations happen only once
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
