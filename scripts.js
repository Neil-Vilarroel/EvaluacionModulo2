
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

tiempoMostrado.innerHTML = time + "se";


palabraIngresada.addEventListener("keypress", function () {
    if (event.key == "Enter") {
        if (palabraIngresada.value == palabraAleatoria.innerHTML) {
            (time += 3);
            tiempoMostrado.innerHTML = time + "se";
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
        tiempoMostrado.innerHTML = time + "se";
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
    var volveAEmpezar = '<button onclick="location.reload()">Volvé a empezar</button>' + '<br>';
    var hasPerdido = "<p>Has perdido</p>";
    var volveAEmpezar = '<button onclick="location.reload()">Volvé a empezar</button>' + '<br>';
    contenedorGameOver.innerHTML = hasPerdido + volveAEmpezar;
    divisionPrincipal.innerHTML = "";
};