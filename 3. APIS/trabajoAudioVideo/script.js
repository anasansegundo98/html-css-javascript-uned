let video = document.getElementById("video");
let reproducir = document.getElementById("reproducir");
let parar = document.getElementById("parar");
let retroceder = document.getElementById("retroceder");
let adelantar = document.getElementById("adelantar");
let relleno = document.getElementById("relleno");

reproducir.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    reproducir.innerHTML = "❚❚";
  } else {
    video.pause();
    reproducir.innerHTML = "►";
  }
});

parar.addEventListener("click", function () {
  video.pause();
  video.currentTime = 0;
  reproducir.innerHTML = "►";
});

retroceder.addEventListener("click", function () {
  video.currentTime = Math.max(0, video.currentTime - 1);
});

adelantar.addEventListener("click", function () {
  if (video.duration) {
    video.currentTime = Math.min(video.duration, video.currentTime + 5);
  }
});

video.addEventListener("timeupdate", function () {
  if (video.duration) {
    let porcentaje = (video.currentTime / video.duration) * 100;
    relleno.style.width = porcentaje + "%";
  }
});

video.addEventListener("ended", function () {
  video.pause();
});
