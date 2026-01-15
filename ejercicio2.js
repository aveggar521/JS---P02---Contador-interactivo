let contador = 0;
let temporizadorError = null;

const contador = document.getElementById("contador");
const mensajeError = document.getElementById("mensajeError");

const up = document.getElementById("up");
const down = document.getElementById("down");
const reset = document.getElementById("reset");

function actualizarContador() {
    contadorHTML.textContent = contador;
}

up.addEventListener("click", function () {
    contador++;
    actualizarContador();

    if (contador > 10) {
        alert("El contador ha superado el valor 10");
    }
});

up.addEventListener("click", function () {
    if (contador > 0) {
        contador--;
        actualizarContador();
    } else {
        mostrarError();
    }
});

reset.addEventListener("click", function () {
    contador = 0;
    actualizarContador();
});

function mostrarError() {
    mensajeError.textContent = "El contador no puede ser menor que 0";

    if (temporizadorError !== null) {
        clearTimeout(temporizadorError);
    }

    temporizadorError = setTimeout(function () {
        mensajeError.textContent = "";
    }, 1000);
}