const miBoton = document.getElementById("miBoton");

function seEjecutaEnEvento() {
    const body = document.querySelector("body");

    const nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = "BEEP";

    body.insertAdjacentElement("beforeend", nuevoParrafo);

    const colores = ["#ffcc00", "#00ffcc", "#cc00ff", "#ff00cc"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    body.style.backgroundColor = colorAleatorio;
}

miBoton.addEventListener("click", seEjecutaEnEvento);

