function randomWords(WORDS) {
    const words = [
        'californication',
        'plataforma5',
        'black',
        'summer',
        'flea',
        'aeroplane',
        'peppers',
        'unlimited',
        'arcadium',
        'love',
        'getaway',
        'stadium',
        'quixoticelixer',
        'quarter',
        'snow',
        'dylan',
        'zephyr',
        'funky',
        'chili'
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

let palabraAleatoria;
let time = 10;
let score = 0;

function addToDOM() {
    palabraAleatoria = randomWords();
    const h1 = document.querySelector("h1");
    h1.textContent = palabraAleatoria;
}

addToDOM();

console.log(palabraAleatoria);

const inputElement = document.getElementById("text");
var palabraIngresada = "";

inputElement.addEventListener("input", function (e) {
    palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
        score += 1;
        time += 3;
        // Vaciar el input después de una coincidencia
        inputElement.value = "";
        addToDOM();
        console.log("Coincidencia! Puntaje: " + score + " - Tiempo: " + time + " segundos");
    }
});

function actualizarTiempo() {
    const tiempoElement = document.getElementById("timeSpan"); // Elemento HTML donde se muestra el tiempo
    tiempoElement.textContent = `${time} s`; // Modificar solo el valor numérico del tiempo

    if (time > 0) {
        time -= 1;
    } else {
        // Cuando el tiempo llega a 0, detenemos el contador y llamamos a la función gameOver
        clearInterval(intervalID);
        gameOver();
    }
}

// Llama a la función actualizarTiempo para iniciar la cuenta regresiva
const intervalID = setInterval(actualizarTiempo, 1000);

function updateScore() {
    score += 1;
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Puntaje: ${score}`;
}

// Llama a la función updateScore cuando el usuario ingrese correctamente la palabra
updateScore();

function gameOver() {
    const endGameContainer = document.getElementById("end-game-container");

    // Título que indica que el usuario se quedó sin tiempo
    const title = document.createElement("h1");
    title.textContent = "¡Se ha acabado el tiempo!";

    // Párrafo que muestra el puntaje final
    const scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = `Puntaje final: ${score}`;

    // Botón para volver a empezar (recargar la página)
    const restartButton = document.createElement("button");
    restartButton.textContent = "Volver a empezar";
    restartButton.onclick = function () {
        location.reload();
    };

    // Agregar elementos al contenedor
    endGameContainer.appendChild(title);
    endGameContainer.appendChild(scoreParagraph);
    endGameContainer.appendChild(restartButton);
}

// Llama a la función gameOver cuando el tiempo se agote
if (time === 0) {
    gameOver();
}
