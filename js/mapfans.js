document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('mapa-fans', { // Asegúrate de que el ID sea correcto
        center: [37.177336, -2.92528],
        zoom: 5,
        minZoom: 3,
        maxZoom: 10
    });

    // Cargar el mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 10,
    }).addTo(map);

    // Función para agregar un pin al mapa
    function addPin(lat, lng, nombre, mensaje) {
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${nombre}</b><br>${mensaje}`).openPopup();
    }

    /*
    addPin(37.177336, -2.92528, 'Marta', 'Me encanta tu música');
    addPin(40.416775, -3.703790, 'Juan', '¡Soy fan de Violeta!');
    addPin(34.052235, -118.243683, 'Lucía', 'Violeta me inspira.');
    */
});
