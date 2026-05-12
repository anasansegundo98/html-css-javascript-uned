// Escribir en este fichero las funciones factorial() y convertir() pedidas en el enunciado 
function factorial(num1) {
    num1 = parseInt(num1);
    let resultado = 1;
    for (i = num1; i >= 1; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

function convertir(idCentigrados) {
    idCentigrados = parseInt(idCentigrados);
    let conversion = (idCentigrados * 9 / 5) + 32;
    return conversion;
}






