// JavaScript Document



function escribirLetra() {
    var dni = document.getElementById("textoDNI").value;
    var letras = "TRWAGMYFPDXBNJZSQVHLCKET"
    var posicion = dni % 23;
    letra = letras.charAt(posicion);
    document.getElementById("textoDNI").value = dni + "-" + letra;
}

function cambiarTexto() {
    document.getElementById("capaTextoId").innerHTML = "DNI completo";
}
function cambiarColorFondo() {
    document.getElementById("form").style.backgroundColor = "#81F7D8";
}

function comprobar() {
    var longitud = document.getElementById("textoDNI").value.length;
    if (longitud == 8) {
        escribirLetra();
        cambiarTexto();
        cambiarColorFondo();
    }
}
