// Crear un rastro de luna al mover el mouse
document.addEventListener('mousemove', function(event) {
    const trail = document.createElement('div');
    trail.className = 'lunar-trail';
    trail.style.left = `${event.clientX + 5}px`;
    trail.style.top = `${event.clientY + 20}px`;
    document.body.appendChild(trail);
    
    // Desaparecer el rastro después de un tiempo
    setTimeout(() => {
        trail.remove();
    }, 500);
});
