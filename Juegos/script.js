// script.js
document.addEventListener('DOMContentLoaded', function() {
    const songsList = document.getElementById('songsList');
    const addSongButton = document.getElementById('addSongButton');
    const removeSongButton = document.getElementById('removeSongButton');
    let songCount = 1; // Contador para el número de canciones

    // Función para añadir una nueva canción
    addSongButton.addEventListener('click', function() {
        songCount++;
        const newSongDiv = document.createElement('div');
        newSongDiv.classList.add('song');
        newSongDiv.innerHTML = `<input type="text" name="song[]" placeholder="Canción ${songCount}" required>`;
        songsList.appendChild(newSongDiv);
    });

    // Función para eliminar la última canción
    removeSongButton.addEventListener('click', function() {
        if (songCount > 1) { // Asegurar que siempre haya al menos un campo
            songsList.removeChild(songsList.lastChild);
            songCount--;
        }
    });

    // Manejar el envío del formulario
    document.getElementById('predictionForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar que el formulario se envíe de forma convencional

        const formData = new FormData(this); // Crear objeto FormData con los datos del formulario

        // Enviar los datos al endpoint de Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Asegúrate de que el formato es correcto
            }
        })
        .then(response => {
            if (response.ok) {
                // Mostrar el mensaje de confirmación si la respuesta es exitosa
                document.getElementById('confirmationMessage').style.display = 'block';
                this.reset(); // Reiniciar el formulario después de enviar
                songCount = 1; // Resetear el contador de canciones
                songsList.innerHTML = `<div class="song"><input type="text" name="song[]" placeholder="Canción 1" required></div>`; // Reiniciar la lista de canciones
            } else {
                throw new Error('Error en el envío del formulario.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
