/*----- constants -----*/
const winDist = 50;

 /*----- state variables -----*/
let state;
let map;
let guessMarker;

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
        }],
        currGuess: null
    }

    renderStart();
}

// to render initial state of game UI
function renderStart() {
    // render UI components
    welcomeMsg.style.display = "none";

    confirmBtn.innerHTML = "Confirm Guess";

    const elToInitialise = [cityContainer, gameStatsContainer];
    elToInitialise.forEach(el => {
        el.style.display = "block";
    })

    // render Map
    map = L.map('map', {
        center: [0, 0],
        zoomSnap: 0.25,
        zoom: 0.5,
        minZoom: 1
    });
    
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors', 
    }).addTo(map);

    map.setMaxBounds(map.getBounds());
    map.on("click", handleClick);
}

// to handle user's click on map
function handleClick(evt) {
    // get click latlng
    const latlng = evt.latlng;
    
    // check if marker exists before rendering new marker
    if (state.currGuess) {
        map.removeLayer(guessMarker);
        guessMarker = new L.Marker(latlng);
        map.addLayer(guessMarker);
        state.currGuess = latlng;
    } else {
        guessMarker = new L.Marker(latlng);
        map.addLayer(guessMarker);
        state.currGuess = latlng;
    }
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


