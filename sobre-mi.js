
// ========================================
// TONIDEV71 - SOBRE MÍ
// ========================================


// Seleccionar las tarjetas de habilidades

const tarjetasHabilidades = document.querySelectorAll(".habilidad");


// Efecto visual al pasar el ratón

tarjetasHabilidades.forEach(function(tarjeta) {

    tarjeta.addEventListener("mouseenter", function() {

        tarjeta.classList.add("habilidad-activa");

    });

    tarjeta.addEventListener("mouseleave", function() {

        tarjeta.classList.remove("habilidad-activa");

    });

});


// Mensaje de bienvenida en consola

console.log("TONIDEV71 - Página Sobre mí cargada correctamente");
