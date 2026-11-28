
/* ========================================
   TONIDEV71 - JAVASCRIPT
======================================== */


/* ========================================
   1. ELEMENTOS DEL MENÚ
======================================== */

const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");


/* ========================================
   2. ABRIR Y CERRAR MENÚ MÓVIL
======================================== */

if (botonMenu && menu) {

    function abrirCerrarMenu() {

        const menuAbierto = menu.classList.toggle("abierto");

        botonMenu.setAttribute("aria-expanded", menuAbierto);

        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

        botonMenu.textContent = menuAbierto ? "✕" : "☰";

    }


    function cerrarMenu() {

        menu.classList.remove("abierto");

        botonMenu.setAttribute("aria-expanded", "false");

        botonMenu.setAttribute("aria-label", "Abrir menú");

        botonMenu.textContent = "☰";

    }


    /* BOTÓN HAMBURGUESA */

    botonMenu.addEventListener("click", abrirCerrarMenu);


    /* CERRAR AL SELECCIONAR UNA PÁGINA */

    const enlacesMenu = menu.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", cerrarMenu);

    });


    /* CERRAR AL CAMBIAR EL TAMAÑO DE PANTALLA */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            cerrarMenu();

        }

    });


    /* CERRAR AL CAMBIAR LA ORIENTACIÓN DEL IPHONE */

    window.addEventListener("orientationchange", function () {

        cerrarMenu();

    });

}


/* ========================================
   3. AÑO AUTOMÁTICO DEL FOOTER
======================================== */

const fechaActual = new Date().getFullYear();

const textoFooter = document.querySelector(".pie-pagina p");

if (textoFooter) {

    textoFooter.innerHTML = textoFooter.innerHTML.replace(
        /© \d{4}/,
        "© " + fechaActual
    );

}
