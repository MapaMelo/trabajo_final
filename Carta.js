const Boton = document.getElementById("Boton")
const titulo = document.getElementById("titulo-centrado")

Boton.addEventListener("mousedown", () => {
Boton.style.backgroundColor="red"
})

Boton.addEventListener("mousedown", () => {
titulo.style.color = "red"
})


Boton.addEventListener("mouseup", () => {
Boton.style.backgroundColor="Black"
})

