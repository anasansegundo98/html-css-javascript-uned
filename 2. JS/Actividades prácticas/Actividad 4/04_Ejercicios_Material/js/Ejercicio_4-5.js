// JavaScript Document


function obtenerLetra(){
	var digitos = document.getElementById("numerodni").value;
    var posicion = parseInt(digitos) % 23;
	var letra = "TRWAGMYFPDXBNJZSQVHLCKET".charAt(posicion);
	document.getElementById("numerodni").value = digitos + letra;
}
