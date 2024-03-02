const parrafos = document.querySelectorAll("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", () => {
        parrafos[i].classList.toggle("resaltado");
    });
}
