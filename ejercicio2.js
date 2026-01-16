let cont = 0;
let temporizadorError = null;

const contador = document.getElementById("contador");
const mensajeError = document.getElementById("mensajeError");

const up = document.getElementById("up");
const down = document.getElementById("down");
const reset = document.getElementById("reset");

function actualizarContador() {
    contador.textContent = cont;
}

up.addEventListener("click", function () {
    cont++;
    actualizarContador();

    if (cont > 10) {
        alert("El contador ha superado el valor 10");
    }
});

down.addEventListener("click", function () {
    if (cont > 0) {
        cont--;
        actualizarContador();
    } else {
        mostrarError();
    }
});

reset.addEventListener("click", function () {
    cont = 0;
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