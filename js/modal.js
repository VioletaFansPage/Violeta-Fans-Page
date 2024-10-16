document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal-form");
    const btnAddCity = document.getElementById("btn-add-city");
    const spanClose = document.getElementsByClassName("close")[0];
    const form = document.getElementById("fan-form");

    // Abrir el modal al hacer clic en "Participar"
    btnAddCity.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Cerrar el modal al hacer clic en la "X"
    spanClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Enviar el formulario mediante AJAX sin recargar la página
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir redirección predeterminada

        // Crear un objeto FormData con los datos del formulario
        const formData = new FormData(form);

        // Enviar los datos a Formspree usando fetch
        fetch("https://formspree.io/f/xjkvvazg", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                // Si el envío fue exitoso, mostrar un mensaje de confirmación
                alert("Hemos recibido tus datos para incluirlos en el mapa. Revisaremos tu mensaje y si todo está bien, se publicará próximamente.");
                
                // Opcional: cerrar el modal después de mostrar el mensaje
                modal.style.display = "none";

                // Limpiar los campos del formulario
                form.reset();
            } else {
                // Si hubo un error, mostrar un mensaje de error
                alert("Hubo un problema con el envío de tu mensaje. Por favor, inténtalo de nuevo.");
            }
        })
        .catch(error => {
            // Manejar cualquier error de la red
            alert("Error en la conexión. Por favor, inténtalo más tarde.");
            console.error("Error:", error);
        });
    });
});
