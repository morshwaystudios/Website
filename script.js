window.onload = function() {
    const banners = document.querySelectorAll('.banner');
    const backgroundContainer = document.querySelector('.backgroundContainer');
    const canvas = document.getElementById('vhsCanvas');
    const ctx = canvas.getContext('2d');
    const images = [
        'Images/plead.png', 
        'Images/Secretpage1.png', 
        'Images/Secretpage2.png', 
        'Images/CircusPoster.png'
    ];
    let currentImageIndex = 0;

    // VHS Canvas Effect
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw more aggressive scan lines
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        for (let i = 0; i < canvas.height; i += 4) {
            ctx.fillRect(0, i, canvas.width, 1);
        }

        // Add thicker, more frequent glitch lines
        for (let j = 0; j < 7; j++) {
            const y = Math.floor(Math.random() * canvas.height);
            const height = Math.random() * 2 + 1;
            ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(138, 43, 226, 0.15)';
            ctx.fillRect(0, y, canvas.width, height);
        }

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    // Slideshow Logic
    function showNextImage() {
        backgroundContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
        backgroundContainer.style.opacity = '0.3';
        backgroundContainer.style.backgroundSize = 'contain'; // Centered with whole image viewable

        banners.forEach(banner => banner.classList.add('transparent'));

        setTimeout(() => {
            backgroundContainer.style.opacity = '0';
            banners.forEach(banner => banner.classList.remove('transparent'));
        }, 4000); // Show image for 4 seconds

        currentImageIndex = (currentImageIndex + 1) % images.length;
        setTimeout(showNextImage, 80000); // 90-second delay for next image
    }

    // Start the slideshow with a 10-second initial delay
    setTimeout(showNextImage, 10000); // 10-second delay before the first image
};
