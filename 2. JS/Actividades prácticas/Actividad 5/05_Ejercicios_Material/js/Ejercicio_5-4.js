// Primera parte

function reproducir_pausa() {
    var video = document.getElementById("player");

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function pequeño() {
    var video = document.getElementById("player");
    video.width = 480;
}

function grande() {
    var video = document.getElementById("player");
    video.width = 840;
}
function normal() {
    var video = document.getElementById("player");
    video.width = 720;
}

/*Segunda parte*/ 

window.onload = function () {
    var video = document.getElementById("player");
    video.addEventListener("timeupdate", actualizarTiempo);
};

function actualizarTiempo() {
    var video = document.getElementById("player");
    document.getElementById("tiempo").innerHTML = video.currentTime;
    for (let i = 0; i < segundos.length; i++) {
        if (video.currentTime >= segundos[i]) {
           document.getElementById("diapo").src = "img/" + imagenes[i];

        } 
        
    }
}

/*Tercera parte*/ 
var imagenes = ["Imagen01_000.jpg", "Imagen02_007.jpg", "Imagen03_012.jpg", "Imagen04_017.jpg", "Imagen05_023.jpg", "Imagen06_027.jpg", "Imagen07_031.jpg", "Imagen08_032.jpg"];

var segundos = [0, 7, 12, 17, 23, 27, 31, 32];