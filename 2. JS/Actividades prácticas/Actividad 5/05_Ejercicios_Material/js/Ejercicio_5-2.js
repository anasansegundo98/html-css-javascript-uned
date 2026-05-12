// JavaScript Document
function registraEventos(){
    document.querySelector("img").addEventListener("mouseover", functionOver);
    document.querySelector("img").addEventListener("mouseout", functionOut);
    document.querySelector("img").addEventListener("click", functionClick);
    document.querySelector("img").addEventListener("dblclick", functionDblClick);

}

window.addEventListener("load", registraEventos);

function functionOver(){
    document.querySelector("img").src = "img/Donald_2.png";

}


function functionOut(){
    document.querySelector("img").src = "img/Donald_1.png";

}

function functionClick(){
        document.querySelector("img").src = "img/Goofi_1.png";

}

function functionDblClick(){
        document.querySelector("img").src = "img/Goofi_2.png";

}








