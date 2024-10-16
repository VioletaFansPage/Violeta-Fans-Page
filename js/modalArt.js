document.addEventListener("DOMContentLoaded", function () {
    const modalArtForm = document.getElementById("modal-art-form");
    const btnParticiparArt = document.getElementById("btn-participar-art");
    const spanCloseArt = document.getElementsByClassName("close-art")[0]; // Cambia a close-art
    const artForm = document.getElementById("fan-art-form");

    // Abrir el modal al hacer clic en "Participar"
    btnParticiparArt.addEventListener("click", () => {
        modalArtForm.style.display = "block";
    });

    // Cerrar el modal al hacer clic en la "X"
    spanCloseArt.addEventListener("click", () => {
        modalArtForm.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target == modalArtForm) {
            modalArtForm.style.display = "none";
        }
    });

    // Enviar el formulario mediante AJAX sin recargar la página
    artForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir redirección predeterminada

        // Crear un objeto FormData con los datos del formulario
        const formData = new FormData(artForm);

        // Enviar los datos a Formspree usando fetch
        fetch("https://formspree.io/f/xldeepvl", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Hemos recibido tu arte. ¡Gracias por compartirlo!");
                modalArtForm.style.display = "none"; // Cerrar el modal
                artForm.reset(); // Limpiar el formulario
            } else {
                alert("Hubo un problema con el envío de tu arte. Por favor, inténtalo de nuevo.");
            }
        })
        .catch(error => {
            alert("Error en la conexión. Por favor, inténtalo más tarde.");
            console.error("Error:", error);
        });
    });
});
