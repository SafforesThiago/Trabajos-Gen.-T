const colorInput = document.getElementById("colorInput");

const colores = {
    "rojo": "red",
    "verde": "green",
    "azul": "blue"
};

colorInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const colorEnEspañol = colorInput.value.toLowerCase();
        const colorEnInglés = colores[colorEnEspañol];
        
        if (colorEnInglés) {
            document.body.style.backgroundColor = colorEnInglés;
            colorInput.value = ""; 
        }
    } else if (event.key === "Backspace") {
        document.body.style.backgroundColor = "white";
    }
});
