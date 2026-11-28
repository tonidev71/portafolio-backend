
/* ========================================
   PROYECTOS - TONIDEV71
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const tarjetas = document.querySelectorAll(".tarjeta-proyecto");

    tarjetas.forEach((tarjeta) => {

        tarjeta.addEventListener("mouseenter", () => {
            tarjeta.classList.add("proyecto-activo");
        });

        tarjeta.addEventListener("mouseleave", () => {
            tarjeta.classList.remove("proyecto-activo");
        });

    });

});