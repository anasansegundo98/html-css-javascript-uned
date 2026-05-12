// JavaScript Document

var imagenes = ["fotoCiencias.jpg", "fotoDerecho.jpg", "fotoEconomicas.jpg", "fotoEducacion.jpg", "fotoFilologia.jpg", "fotoFilosofia.jpg", "fotoGeografiaHistoria.jpg", "fotoIndustriales130.jpg", "fotoInformatica.jpg", "fotoPsicologia.jpg"];

var nombres = ["Facultad de Ciencias", "Facultad de Derecho", "Facultad de Económicas", "Facultad de Educación", "Facultad de Filología", "Facultad de Filosofía", "Facultad de Geografía e Historia", "Escuela de Industriales", "Facultad de Informática", "Facultad de Psicología"];

window.onload = cambiarFoto;

function cambiarFoto() {

    var num = Math.floor(Math.random() * 10);
    document.getElementById("facultades").src = "img/" + imagenes[num];
    document.getElementById("titulos").innerHTML = nombres[num];
    
    t = setTimeout(function () { cambiarFoto() }, 2000);


}






