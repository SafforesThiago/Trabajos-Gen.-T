// Seleccionar los botones y las imágenes
const moneyButton = document.getElementById("moneyButton");
const miamiButton = document.getElementById("miamiButton");
const maiameeeButton = document.getElementById("maiameeeButton");
const moneyImage = document.querySelector("img[alt='Imagen de Dinero']");
const miamiImage = document.querySelector("img[alt='Imagen de Miami']");
const maiameeeImage = document.querySelector("img[alt='Imagen de Maiameee']");

moneyButton.addEventListener("click", function() {
    toggleImageVisibility(moneyImage);
});

miamiButton.addEventListener("click", function() {
    toggleImageVisibility(miamiImage);
});

maiameeeButton.addEventListener("click", function() {
    toggleImageVisibility(maiameeeImage);
});

moneyImage.addEventListener("click", function() {
    toggleImageVisibility(moneyImage);
});

miamiImage.addEventListener("click", function() {
    toggleImageVisibility(miamiImage);
});

maiameeeImage.addEventListener("click", function() {
    toggleImageVisibility(maiameeeImage);
});

function toggleImageVisibility(image) {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}
