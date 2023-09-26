import { worldCities } from "./worldcities.js";

/*----- constants -----*/
const winDist = 100;
const minDist = 3000;
const numOfGuesses = 3;
const numOfRounds = 5;

 /*----- state variables -----*/
let state;
let map;
let guessMarker;
let ansMarker;
let polyline;
let cities = [];

 /*----- cached elements  -----*/
const welcomeMsg = document.getElementById('welcome-msg');
const cityContainer = document.getElementById('city-container');
const startBtn = document.getElementById('start-btn');
const confirmBtn = document.getElementById('confirm-btn');
const nextBtn = document.getElementById('next-btn');
const gameStatsContainer = document.getElementById('game-stats-container'); 

const cityCounter = document.getElementById('city-counter');
const cityName = document.getElementById('city-name');
const guessNum = document.querySelectorAll('.guessNum');
const guessDist = document.querySelectorAll('.guessDist');

const guessWarning = document.getElementById('guess-warning');
const distAns = document.getElementById('dist-ans');
const score = document.getElementById('score');

 /*----- event listeners -----*/
startBtn.addEventListener('click', initialise);
confirmBtn.addEventListener('click', checkGuess);
nextBtn.addEventListener('click', newRound);

 /*----- functions -----*/
function initialise() {
    state = {
        score: 0,
        cityNum: 0,
        numOfGuesses: 0,
        currGuessLatLng: null
    }
    getCities();
    renderStart();
}

// to render initial state of game UI
function renderStart() {
    // render UI components
    const elToHide = [welcomeMsg, startBtn];
    elToHide.forEach(el => {
        el.style.display = "none";
    })

    confirmBtn.innerHTML = "Confirm Guess";

    const elToInitialise = [cityContainer, gameStatsContainer, confirmBtn];
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

    cityCounter.innerHTML = `City ${state.cityNum + 1} of 5:`;
    cityName.innerHTML = cities[state.cityNum].city.toUpperCase();
}

// to render UI for each new round
function renderGame() {
    // reset map zoom
    map.setView([0, 0], 0.5);
    map.on("click", handleClick);

    cityCounter.innerHTML = `City ${state.cityNum + 1} of ${numOfRounds}:`;
    cityName.innerHTML = cities[state.cityNum].city.toUpperCase();
    distAns.innerHTML = null;
    nextBtn.style.display = "none";
    confirmBtn.style.display = "block";
    guessNum.forEach(el => el.innerHTML = null);
    guessDist.forEach(el => el.innerHTML = null);
}

// to handle user's click on map
function handleClick(evt) {
        // get click latlng
        const latlng = evt.latlng;
        
        // check if marker exists before rendering new marker
        if (state.currGuessLatLng) {
            map.removeLayer(guessMarker);
            guessMarker = new L.Marker(latlng);
            map.addLayer(guessMarker);
            state.currGuessLatLng = latlng;
        } else {
            guessMarker = new L.Marker(latlng);
            map.addLayer(guessMarker);
            state.currGuessLatLng = latlng;
        }
}

// to prepare list of cities for game
function getCities() {
    let uniqueIdx = [];

    while (uniqueIdx.length < numOfRounds) {
        const randIdx = Math.floor(Math.random() * worldCities.length);
        if (!uniqueIdx.includes(randIdx)) {
            uniqueIdx.push(randIdx);
        }
    }

    uniqueIdx.forEach(idx => {
        cities.push(worldCities[idx]);
    })

    cities.forEach(city => {
        city.latlng = [city.lat, city.lng];
    })
}

function checkGuess() {
    // check if user added marker to map
    if (guessMarker && map.hasLayer(guessMarker)) {
        // to check how far player's guess is from answer
        const dist = (map.distance(state.currGuessLatLng, cities[state.cityNum].latlng))/1000;
        // if guess is within Xkm,
        if (dist <= winDist) {
            distAns.innerHTML = `You guessed it! You were only ${dist.toFixed(2)} km away!`
            showAns();

            calcScore(dist);

        } else {
            guessNum[state.numOfGuesses].innerHTML = state.numOfGuesses+1;
            guessDist[state.numOfGuesses].innerHTML = `${dist.toFixed(2)} km`;
        }

        state.numOfGuesses += 1;

        // render guess result UI
        if (state.numOfGuesses === numOfGuesses) {
            distAns.innerHTML = `You were ${dist.toFixed(2)} km away!`
            showAns();

            // only guesses within 3000km can accumulate a score
            if (dist <= minDist) {
                calcScore(dist);

                score.innerHTML = `Total Score: ${state.score}`
            }

            confirmBtn.style.display = "none";
            nextBtn.style.display = "block";
        }
    } else {
        // if user clicks confirm guess without making a guess
        guessWarning.innerHTML = "Please make a guess first!";
        setTimeout(() => {
            guessWarning.innerHTML = null;
        }, 3000)
    }
}

// to compute score within minDist
function calcScore(dist) {
    state.score += Math.floor(0.75**((dist/100)-11.75)*100);
}

// to zoom into answer + guess bounds
function showAns() {
    // TO-DO: style ansMarker to diff style
    ansMarker = new L.Marker(cities[state.cityNum].latlng).addTo(map);
    polyline = L.polyline([state.currGuessLatLng, cities[state.cityNum].latlng], { color: "green"}).addTo(map);
    map.fitBounds(polyline.getBounds().pad(0.2));
}

// to set up next round
function newRound() {
    // remove all graphics from map
    map.removeLayer(guessMarker);
    map.removeLayer(ansMarker);
    map.removeLayer(polyline);

    // reset states
    state.cityNum += 1;
    state.numOfGuesses = 0;
    state.currGuessLatLng = null;

    // reset game UI
    renderGame();
}


