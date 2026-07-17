/**
 * "View all Work" toggle: shows/hides the full assignments list
 * and keeps aria-expanded in sync for screen readers.
 */
(() => {
    const toggle = document.getElementById('view-all-toggle');
    const panel = document.getElementById('assignments-section');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
    });
})();
