// Fade in sections as they scroll into view
const items = document.querySelectorAll(
    '.section-title, .bio-card, .facts-card, .skill-category, .project-card, .timeline-item'
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