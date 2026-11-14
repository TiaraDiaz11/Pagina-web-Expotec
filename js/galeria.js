const imagenes = document.querySelectorAll(".contenedor-galeria img");
const visor = document.getElementById("visorImagen");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const cerrar = document.getElementById("cerrarVisor");
const anterior = document.getElementById("imagenAnterior");
const siguiente = document.getElementById("imagenSiguiente");
const contador = document.getElementById("contadorImagen");

let indiceActual = 0;

function mostrarImagen(indice) {
    indiceActual = (indice + imagenes.length) % imagenes.length;
    imagenAmpliada.src = imagenes[indiceActual].src;
    imagenAmpliada.alt = imagenes[indiceActual].alt;
    contador.textContent = `${indiceActual + 1} de ${imagenes.length}`;
    visor.classList.add("activo");
}

function cerrarVisor() {
    visor.classList.remove("activo");
}

imagenes.forEach((imagen, indice) => {
    imagen.addEventListener("click", () => mostrarImagen(indice));
});

cerrar.addEventListener("click", cerrarVisor);

anterior.addEventListener("click", () => {
    mostrarImagen(indiceActual - 1);
});

siguiente.addEventListener("click", () => {
    mostrarImagen(indiceActual + 1);
});

visor.addEventListener("click", (evento) => {
    if (evento.target === visor) {
        cerrarVisor();
    }
});

document.addEventListener("keydown", (evento) => {
    if (!visor.classList.contains("activo")) return;

    if (evento.key === "Escape") cerrarVisor();
    if (evento.key === "ArrowLeft") mostrarImagen(indiceActual - 1);
    if (evento.key === "ArrowRight") mostrarImagen(indiceActual + 1);
});
