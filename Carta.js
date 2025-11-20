const Boton = document.getElementById("Boton");
const Titulo = document.getElementById("Titulo");

Boton.addEventListener("mousedown", () => {
    Boton.style.backgroundColor="PeachPuff";
    Titulo.style.color = "PeachPuff";
})
 
Boton.addEventListener("mouseup", () => {
    Boton.style.backgroundColor="Black";
    Titulo.style.color = "Black";
})



const elementos = [
    "Medalla/Prueba 1.jpeg",
    "Medalla/Prueba 2.png",
    "Medalla/Prueba 3.png",
    "Medalla/Prueba 4 cancion.mp3",
    "Medalla/Prueba 4 video.mp4"
];

function crearElemento() {
    const elegido = elementos[Math.floor(Math.random() * elementos.length)];
    let nuevo;

    if (elegido.endsWith(".mp3") || elegido.endsWith(".wav")) {
        nuevo = document.createElement("audio");
        nuevo.src = elegido;
    }
    else if (elegido.endsWith(".mp4") || elegido.endsWith(".webm")) {
        nuevo = document.createElement("video");
        nuevo.src = elegido;
        nuevo.muted = true; 
    }
    else {
        nuevo = document.createElement("img");
        nuevo.src = elegido;
    }

    nuevo.style.position = "absolute";
    nuevo.style.width = "180px";
    nuevo.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    nuevo.style.borderRadius = "10px";
    nuevo.style.transition = "all 0.3s ease";

    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;
    const rango = 400;

   let x, y;
let valido = false;

const botonRect = Boton.getBoundingClientRect();

while (!valido) {
    x = centroX + (Math.random() * rango * 2 - rango);
    y = centroY + (Math.random() * rango * 2 - rango);

    const ancho = 180;
    const alto = 180;

    const elemRect = {
        left: x,
        right: x + ancho,
        top: y,
        bottom: y + alto
    };

    const colision =
        !(elemRect.right < botonRect.left ||
          elemRect.left > botonRect.right ||
          elemRect.bottom < botonRect.top ||
          elemRect.top > botonRect.bottom);

    if (!colision) valido = true;
}

    nuevo.style.left = x + "px";
    nuevo.style.top = y + "px";

    document.body.appendChild(nuevo);

    agregarInteraccion(nuevo);
}

function agregarInteraccion(elem) {

    if (elem.tagName === "IMG") {
        elem.addEventListener("mouseenter", () => {
            elem.style.transform = "scale(1.3) rotate(5deg)";
        });
        elem.addEventListener("mouseleave", () => {
            elem.style.transform = "scale(1) rotate(0deg)";
        });
    }

    if (elem.tagName === "AUDIO") {
        elem.addEventListener("mouseenter", () => {
            elem.play();
        });
        elem.addEventListener("mouseleave", () => {
            elem.pause();
            elem.currentTime = 0;
        });
        elem.style.width = "130px";
    }

    if (elem.tagName === "VIDEO") {
        elem.addEventListener("mouseenter", () => {
            elem.play();
        });
        elem.addEventListener("mouseleave", () => {
            elem.pause();
        });
        elem.style.width = "220px";
    }
}

Boton.addEventListener("click", crearElemento);