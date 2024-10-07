window.onload = function() {
    // Fade-in effect for banners
    const banners = document.querySelectorAll('.banner');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    banners.forEach(banner => {
        observer.observe(banner);
    });
};
