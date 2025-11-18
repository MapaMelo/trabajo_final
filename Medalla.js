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
];

function crearElemento() {
    const elegido = elementos[Math.floor(Math.random() * elementos.length)];
    const nuevo = document.createElement("img");

    nuevo.src = elegido;
    nuevo.style.position = "absolute";
    nuevo.style.width = "180px";
    nuevo.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    nuevo.style.borderRadius = "10px";


   const centroX = window.innerWidth / 2;
   const centroY = window.innerHeight / 2;
   const rango = 400;
   
   const x = centroX + (Math.random() * rango * 2 - rango);
   const y = centroY + (Math.random() * rango * 2 - rango);


    nuevo.style.left = x + "px";
    nuevo.style.top = y + "px";

    document.body.appendChild(nuevo);
}

Boton.addEventListener("click", crearElemento);

