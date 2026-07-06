function iniciar(){
  var btnGrabar = document.getElementById('btnGrabar');
  var btnBorrar = document.getElementById('btnBorrar');

  btnGrabar.addEventListener('click', grabar, false);
  btnBorrar.addEventListener('click', borrar, false);

  mostrarHistorial();
}

function grabar(){
  var usuario = document.getElementById('usuario').value;
  var clave = document.getElementById('clave').value;

  if(usuario === "" || clave === ""){
    alert("Rellena usuario y clave antes de grabar");
    return;
  }

  var historial = localStorage.getItem('historial');

  if(historial === null){
    historial = [];
  } else {
    historial = JSON.parse(historial);
  }

  historial.push({usuario: usuario, clave: clave});

  localStorage.setItem('historial', JSON.stringify(historial));

  mostrarHistorial();

  document.getElementById('usuario').value = "";
  document.getElementById('clave').value = "";
}

function borrar(){
  localStorage.removeItem('historial');
  mostrarHistorial();
}

function mostrarHistorial(){
  var lista = document.getElementById('lista-historial');
  lista.innerHTML = "";

  var historial = localStorage.getItem('historial');

  if(historial === null){
    return;
  }

  historial = JSON.parse(historial);

  for(var i = 0; i < historial.length; i++){
    var item = document.createElement('li');
    item.textContent = "Usuario: " + historial[i].usuario + " — Clave: " + historial[i].clave;
    lista.appendChild(item);
  }
}

window.addEventListener("load", iniciar, false);