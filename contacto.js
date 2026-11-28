
/* ========================================
   CONTACTO - TONIDEV71
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario-contacto");
    const respuesta = document.getElementById("respuesta-formulario");

    if (!formulario || !respuesta) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        respuesta.textContent =
            "El formulario está preparado, pero el envío todavía no está conectado.";

    });

});
