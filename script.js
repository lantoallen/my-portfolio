// Fade in sections as they scroll into view
const items = document.querySelectorAll(
    '.section-title, .bio-card, .facts-card, .skill-category, .project-card, .timeline-item, .contact-card'
);

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Highlight the nav link of the section in view
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach((section) => navObserver.observe(section));
}