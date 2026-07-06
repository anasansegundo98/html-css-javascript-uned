function iniciar(){
  dibujarPrimero();
  dibujarSegundo();
}

function dibujarPrimero(){
  var elemento = document.getElementById('lienzo');
  lienzo = elemento.getContext('2d');

  // Rectángulo
  lienzo.fillStyle = "#3399FF";
  lienzo.fillRect(50, 50, 120, 80);

  // Círculo
  lienzo.beginPath();
  lienzo.fillStyle = "#FF6633";
  lienzo.arc(300, 90, 50, 0, Math.PI * 2, false);
  lienzo.fill();

  // Texto
  lienzo.fillStyle = "#333333";
  lienzo.font = "bold 28px verdana, sans-serif";
  lienzo.textAlign = "center";
  lienzo.fillText("Mi dibujo con Canvas", 250, 220);
}

function dibujarSegundo(){
  var elemento2 = document.getElementById('lienzo2');
  lienzo2 = elemento2.getContext('2d');

  // Cielo
  var cielo = lienzo2.createLinearGradient(0, 0, 0, 300);
  cielo.addColorStop(0, "#4A90D9");
  cielo.addColorStop(1, "#BFE3F5");
  lienzo2.fillStyle = cielo;
  lienzo2.fillRect(0, 0, 500, 300);

  // Sol
  lienzo2.shadowColor = "rgba(0,0,0,0.3)";
  lienzo2.shadowOffsetX = 3;
  lienzo2.shadowOffsetY = 3;
  lienzo2.shadowBlur = 10;
  lienzo2.beginPath();
  lienzo2.fillStyle = "#FFD54F";
  lienzo2.arc(400, 70, 40, 0, Math.PI * 2, false);
  lienzo2.fill();
  lienzo2.shadowColor = "transparent";
  
}

window.addEventListener("load", iniciar, false);