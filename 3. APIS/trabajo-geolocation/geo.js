function iniciar(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(exito, error);
  } else {
    document.getElementById('mensaje-error').textContent =
      "Tu navegador no soporta geolocalización";
  }
}

function exito(posicion){
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;

  document.getElementById('latitud').textContent = "Latitud: " + latitud;
  document.getElementById('longitud').textContent = "Longitud: " + longitud;

  var mapaURL = 'https://maps.google.com/maps?hl=es&ie=UTF8&q=' +
                latitud + ',' + longitud + '&z=14&output=embed';

  document.getElementById('mapa1').src = mapaURL;
}

function error(err){
  var mensaje = "";

  switch(err.code){
    case err.PERMISSION_DENIED:
      mensaje = "Has denegado el permiso de ubicación";
      break;
    case err.POSITION_UNAVAILABLE:
      mensaje = "La posición no está disponible";
      break;
    case err.TIMEOUT:
      mensaje = "Se agotó el tiempo de espera para obtener la posición";
      break;
    default:
      mensaje = "Ocurrió un error desconocido";
  }

  document.getElementById('mensaje-error').textContent = mensaje;
}

window.addEventListener("load", iniciar, false);