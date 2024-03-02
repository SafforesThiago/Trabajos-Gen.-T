const body = document.body;
const sigueCursorImg = document.querySelector(".sigueCursor");
let mousePresionado = false;

body.addEventListener("mousedown", () => {
    mousePresionado = true;
});

body.addEventListener("mouseup", () => {
    mousePresionado = false;
    sigueCursorImg.style.top = "0";
    sigueCursorImg.style.left = "0";
});

body.addEventListener("mousemove", (event) => {
    if (mousePresionado) {
        sigueCursorImg.style.top = event.clientY + "px";
        sigueCursorImg.style.left = event.clientX + "px";
    }
});
