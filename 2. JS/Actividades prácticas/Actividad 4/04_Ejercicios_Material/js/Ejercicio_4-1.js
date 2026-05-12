// JavaScript Document


// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto) {
	document.getElementById("cuadro_texto").innerHTML = texto;
}

function ponfecha() {

// Aqui se tiene que poner el código que haga lo que pide el enunciado.

	var d = new Date();
	var semana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
	var dia_semana = d.getDay();
	var texto_dia_semana = semana[dia_semana];

	var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var numero_mes = d.getMonth();
	var texto_mes = mes[numero_mes];

	var dia_mes = d.getDate();
	var anyo = d.getFullYear();

	document.write("Hoy es " + texto_dia_semana + ", " + dia_mes + " de " + texto_mes + " de " + anyo);


}

