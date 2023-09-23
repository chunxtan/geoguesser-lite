 /*----- constants -----*/
const winDist = 50;

 /*----- state variables -----*/
let state;

 /*----- cached elements  -----*/
const welcomeMsg = document.getElementById('welcome-msg');
const cityContainer = document.getElementById('city-container');
const confirmBtn = document.getElementById('confirm-btn');
const gameStatsContainer = document.getElementById('game-stats-container'); 

const guessNum = document.querySelectorAll('.guessNum');
const guessDist = document.querySelectorAll('.guessDist');

 /*----- event listeners -----*/
confirmBtn.addEventListener('click', startGame);

 /*----- functions -----*/

function startGame() {
    initialise();
}

function initialise() {
    state = {
        score: 0,
        cityCounter: 1,
        citiesPlayed: [],
        cityGuesses: [{
            "1": null,
            "2": null,
            "3": null
        }]
    }

    renderStart();
}

// to render initial state of game UI
function renderStart() {
    welcomeMsg.style.display = "none";

    confirmBtn.innerHTML = "Confirm Guess";

    const elToInitialise = [cityContainer, gameStatsContainer];
    elToInitialise.forEach(el => {
        el.style.display = "block";
    })
}

function getCity() {
    // to retrieve random city from list
    // check if city in citiesPlayed
}

function checkGuess() {
    // to check how far player's guess is from answer
    // if guess is within Xkm,
        // show win message & render point + line on leaflet map
}


