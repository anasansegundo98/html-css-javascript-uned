var destino;

function arrastrado(e) {
    e.dataTransfer.setData('Text', e.target.id);
}

function iniciar() {
    var imagenes = document.querySelectorAll('.cajaizda img');
    for (let i = 0; i < imagenes.length; i++) {
        const element = imagenes[i];
        element.addEventListener('dragstart', arrastrado, false);
    }

    destino = document.querySelector('.cajadcha');
    destino.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
    destino.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
    destino.addEventListener('drop', soltado, false);
}

function soltado(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var imagen = document.getElementById(id);
    destino.appendChild(imagen);
}

window.addEventListener('load', iniciar, false);