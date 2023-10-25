/*Validacion de Formulario*/ 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-contacto");
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            if (nombre === "" || email === "" || !esEmailValido(email) || mensaje === "") {
                alert("Por favor, complete todos los campos correctamente.");
            } else {
                alert("Datos enviados correctamente.");
            }
            

        });

        function esEmailValido(email) {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            return regex.test(email);
        }
});

