/**
 * "View Work" button: scrolls down to the Featured Projects section.
 */
(() => {
    const button = document.getElementById('view-work-btn');
    const target = document.getElementById('featured-projects');
    if (!button || !target) return;

    button.addEventListener('click', () => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
})();
