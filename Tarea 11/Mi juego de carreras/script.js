const autoRojo = document.getElementById("autoRojo");
const autoAzul = document.getElementById("autoAzul");

let acumuladorRojo = 0;
let acumuladorAzul = 0;

window.addEventListener("keyup", function(event) {
    if (event.key === "r") {
        acumuladorRojo++;
        autoRojo.style.marginLeft = acumuladorRojo + "px";
        if (acumuladorRojo + autoRojo.width >= pista.width) {

            alert("¡El auto rojo ganó la carrera!");
        }
    } else if (event.key === "a") {
        acumuladorAzul++;
        autoAzul.style.marginLeft = acumuladorAzul + "px";
        if (acumuladorAzul + autoAzul.width >= pista.width) {
            alert("¡El auto azul ganó la carrera!");
        }
    }
});

const pista = document.getElementById("pista");
