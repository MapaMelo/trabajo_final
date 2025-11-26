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
    "medalla/6.mp4",
    "medalla/7.mp4",
    "medalla/25.mp4",
    "medalla/26.mp4",
    "medalla/27.mp4",
    "medalla/36.mp4",
    "medalla/37.mp4",
    "medalla/41.mp4",
    "medalla/42.mp4",
    "medalla/43.mp4",
    "medalla/44.mp4",
    "medalla/45.mp4",
    "medalla/46.jpg",
    "medalla/52.jpg",
    "medalla/53.jpg",
    "medalla/55.jpg",
    "medalla/56.jpg",
    "medalla/57.jpg",
    "medalla/59.jpg",
    "medalla/60.jpg",
    "medalla/61.jpg",
    "medalla/63.jpg",
    "medalla/65.jpg",
    "medalla/66.jpg",
    "medalla/67.jpg",
    "medalla/68.jpg",
    "medalla/71.jpg",
    "medalla/73.jpg",
    "medalla/75.jpg",
    "medalla/a1.mp3",
    "medalla/a2.mp3",
    "medalla/a3.mp3",
    "medalla/a4.mp3",
    "medalla/a5.mp3"
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

    if (src.endsWith(".mp4") || src.endsWith(".mov") || src.endsWith(".avi")){
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
        nuevo.controls = true;
    }
    else if (ruta.endsWith(".mp4") || ruta.endsWith(".webm")) {
        nuevo = document.createElement("video");
        nuevo.src = ruta;
        nuevo.muted = true;
        nuevo.controls = false;
    }
    else {
        nuevo = document.createElement("img");
        nuevo.src = ruta;
    }

    nuevo.classList.add("elementosCreados");

    const zona = document.getElementById("zonaProhibidaCentro");
    const rect = zona.getBoundingClientRect();

    const w = 180;
    const h = 180;

    let x, y;

    do {
        x = numeroAleatorio(0, window.innerWidth - w);
        y = numeroAleatorio(0, window.innerHeight - h);
    } while (
        x < rect.right &&
        x + w > rect.left &&
        y < rect.bottom &&
        y + h > rect.top
    );
    nuevo.style.left = x + "px";
    nuevo.style.top = y + "px";

    document.body.append(nuevo);

    Interaccion(nuevo);
}

Boton.addEventListener("click", crearElemento);