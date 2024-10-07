window.onload = function() {
    const canvas = document.getElementById('vhsCanvas');
    const ctx = canvas.getContext('2d');

    // Load the logo image into the canvas
    const img = new Image();
    img.src = 'logo.jpg';  // Replace with your logo image file (make sure it's in the correct path)

    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Apply VHS scanlines effect
        for (let i = 0; i < canvas.height; i += 5) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';  // Darker scanline effect
            ctx.fillRect(0, i, canvas.width, 2);  // Draw 2px thick scanlines
        }
    };
}
