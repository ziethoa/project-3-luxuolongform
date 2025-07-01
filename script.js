document.addEventListener('DOMContentLoaded', () => {
    const slideElements = document.querySelectorAll('.section-1');
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
                slideObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    slideElements.forEach(element => slideObserver.observe(element));
});