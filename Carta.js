const Boton = document.getElementById("Boton");
const Titulo = document.getElementById("Titulo");

Boton.addEventListener("mousedown", () => {
    Boton.style.backgroundColor="PeachPuff";
    Titulo.style.color = "PeachPuff";
});
 
Boton.addEventListener("mouseup", () => {
    Boton.style.backgroundColor="Black";
    Titulo.style.color = "Black";
});

const elementos = [
    "Medalla/Prueba_1.jpeg",
    "Medalla/Prueba_2.png",
    "Medalla/Prueba_3.png",
    "Medalla/Prueba_4_cancion.mp3",
    "Medalla/Prueba_5_video.mp4"
];

function Interaccion(elem) {
    const src = elem.src.toLowerCase();

    if (src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".png") || src.endsWith(".webp")) {
        elem.addEventListener("mouseenter", () => {
            elem.style.transform = "scale(1.3) rotate(9deg)";
        });
        elem.addEventListener("mouseleave", () => {
            elem.style.transform = "scale(1) rotate(0deg)";
        });
    }

    if (src.endsWith(".mp3") || src.endsWith(".wav")) {
        elem.style.width = "130px";
        elem.addEventListener("mouseenter", () => elem.play());
        elem.addEventListener("mouseleave", () => {
            elem.pause();
            elem.currentTime = 0;
        });
    }

    if (src.endsWith(".mp4")) {
        elem.style.width = "220px";
        elem.addEventListener("mouseenter", () => elem.play());
        elem.addEventListener("mouseleave", () => elem.pause());
    }
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function crearElemento() {

    const indice = numeroAleatorio(0, elementos.length);
    const ruta = elementos[indice];

    let nuevo;

    if (ruta.endsWith(".mp3") || ruta.endsWith(".wav")) {
        nuevo = document.createElement("audio");
        nuevo.src = ruta;
    }
    else if (ruta.endsWith(".mp4") || ruta.endsWith(".webm")) {
        nuevo = document.createElement("video");
        nuevo.src = ruta;
        nuevo.muted = true;
    }
    else {
        nuevo = document.createElement("img");
        nuevo.src = ruta;
    }

    nuevo.classList.add("elementosCreados");

    const zona = document.getElementById("zonaProhibida");
    const rect = zona.getBoundingClientRect();

    let x, y;

    do {
        x = numeroAleatorio(0, window.innerWidth - 200);
        y = numeroAleatorio(0, window.innerHeight - 200);
    } while (
        x > rect.left &&
        x < rect.right &&
        y > rect.top &&
        y < rect.bottom
    );

    nuevo.style.left = x + "px";
    nuevo.style.top = y + "px";

    document.body.append(nuevo);

    Interaccion(nuevo);
}

Boton.addEventListener("click", crearElemento);
