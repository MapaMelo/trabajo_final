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
    "https://1drv.ms/v/c/3dce5c747f671e00/EfiebHVm99dMoT56a3prgcoBHJPl886ehCbXq-6DwPZ1ug?e=qNLfUK&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D"
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