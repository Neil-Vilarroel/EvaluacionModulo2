
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
    'chili',
];

var palabraAleatoria = document.getElementById("randomWord");

var palabraRandom;

var time = 10;

var score = 0;

function randomWords() {
    var i = Math.floor(Math.random() * words.length);
    palabraRandom = words[i];
}

function addToDom() {
    randomWords();
    palabraAleatoria.innerHTML = palabraRandom;
}

addToDom();

var tiempoMostrado = document.getElementById("timeSpan");

var palabraIngresada = document.getElementById("text");

tiempoMostrado.innerHTML = time + "s";


palabraIngresada.addEventListener("keypress", function () {
    if (event.key == "Enter") {
        if (palabraIngresada.value == palabraAleatoria.innerHTML) {
            (time += 3);
            tiempoMostrado.innerHTML = time + "s";
            (palabraIngresada.value = "");
            addToDom();
            updateScore();
        } else {
            (palabraIngresada.value = "");
            addToDom()
        }
    }
}
);

function actualizarTiempo() {
    if (time === 0) {
        clearInterval(timeInterval);
        scoreFinal = scoreMostrado.innerHTML;
        gameOver();
    } else {
        time--;
        tiempoMostrado.innerHTML = time + "s";
    }
};

let timeInterval = setInterval(actualizarTiempo, 1000);

var scoreMostrado = document.getElementById("score");
scoreMostrado.innerHTML = score;

function updateScore() {
    score++;
    scoreMostrado.innerHTML = score;
};

var contenedorGameOver = document.getElementById("end-game-container");

var divisionPrincipal = document.getElementById("main");

function gameOver() {
    var tituloSinTiempo = "<p>Has perdido</p>";
    var botonVolveAEmpezar = '<button onclick="location.reload()">Volvé a empezar</button>';
    contenedorGameOver.innerHTML = tituloSinTiempo + botonVolveAEmpezar;
    divisionPrincipal.innerHTML = "";
};