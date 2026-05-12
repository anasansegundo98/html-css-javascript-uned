// JavaScript Document


window.onload = function () {


    var enlaces = document.getElementsByTagName("a");
    var num_enlaces = enlaces.length;
    var info = document.getElementById("informacion");
    
    contador = 0;

    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href !== "http://prueba/") {
            contador++;
        }
    }

    var parrafos = document.getElementsByTagName("p");
    var enlaces_parrafo2 = parrafos[1].getElementsByTagName("a");
    var num_enlaces_p2 = enlaces_parrafo2.length;

    info.innerHTML = "<h3>Información pedida en el enunciado</h3>";
    info.innerHTML = info.innerHTML + "Número de enlaces: " + num_enlaces + "<br>";
    info.innerHTML = info.innerHTML + "Dirección del tercer enlace: " + enlaces[2].href + "<br>";
    info.innerHTML = info.innerHTML + "Número de enlaces que no apuntan a http://prueba :" + contador + "<br>";
    info.innerHTML = info.innerHTML + "Número de enlaces en el segundo párrafo: " + num_enlaces_p2;







}