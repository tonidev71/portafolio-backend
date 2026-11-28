   CERTIFICADOS - TONIDEV71

document.addEventListener("DOMContentLoaded", () => {

    const imagenes = document.querySelectorAll(".imagen-certificado");

    imagenes.forEach((contenedor) => {

        contenedor.addEventListener("click", () => {

            contenedor.classList.toggle("ampliada");

            if (contenedor.classList.contains("ampliada")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }

        });

    });

    // Cerrar la imagen ampliada pulsando ESC

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            document.querySelectorAll(".imagen-certificado.ampliada")
                .forEach((imagen) => {
                    imagen.classList.remove("ampliada");
                });

            document.body.style.overflow = "";

        }

    });

});