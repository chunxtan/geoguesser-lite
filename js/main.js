import { worldCities } from "./worldcities.js";

/*----- constants -----*/
const winDist = 100;
const minDist = 3000;
const numOfGuesses = 3;
const numOfRounds = 5;

const guessIcon = L.icon({
    iconUrl: "./src/img/pin_blue.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40]
})
const ansIcon = L.icon({
    iconUrl: "./src/img/pin_green.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40]
})

 /*----- state variables -----*/
let state;
let map;
let guessMarker;
let ansMarker;
let polyline;
let cities;

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
const guessDir = document.querySelectorAll('.guessDir');

const guessWarning = document.getElementById('guess-warning');
const distAns = document.getElementById('dist-ans');
const score = document.getElementById('score');
const endMsg = document.getElementById('end-msg');
const restartBtn = document.getElementById('restart-btn');

 /*----- event listeners -----*/
startBtn.addEventListener('click', startGame);
confirmBtn.addEventListener('click', checkGuess);
nextBtn.addEventListener('click', newRound);
restartBtn.addEventListener('click', restartGame);

 /*----- functions -----*/
function startGame() {
    initialiseStates();
    getCities();
    renderStart();
}

// to initialise/restart game states
function initialiseStates() {
    state = {
        score: 0,
        cityNum: 0,
        distGuesses: [],
        currGuessLatLng: null
    }

    cities = [];
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
    guessDir.forEach(el => el.innerHTML = null);
}

// to handle user's click on map
function handleClick(evt) {
        // get click latlng
        const latlng = evt.latlng;
        
        // check if marker exists before rendering new marker
        if (state.currGuessLatLng) {
            map.removeLayer(guessMarker);
            guessMarker = new L.Marker(latlng, {icon: guessIcon}).addTo(map);
            state.currGuessLatLng = latlng;
        } else {
            guessMarker = new L.Marker(latlng, {icon: guessIcon}).addTo(map);
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
        state.distGuesses.push({
            guessNum: state.distGuesses.length,
            latlng: state.currGuessLatLng,
            distance: dist
        });

        // to keep track of guess # for this round
        const currGuesses = state.distGuesses.length;
        
        guessNum[currGuesses - 1].innerHTML = currGuesses;
        guessDist[currGuesses - 1].innerHTML = `${dist.toFixed(2)} km`;
        // get direction to city from guess
        const direction = checkDirection(state.currGuessLatLng, cities[state.cityNum].latlng);
        const arrowImg = document.createElement('img');
        arrowImg.src = "./src/img/direction-arrow.png";
        arrowImg.style.height = "100%";
        arrowImg.style.transform = `rotate(${direction}deg)`;
        guessDir[currGuesses - 1].appendChild(arrowImg);

        // if guess is within winDist,
        if (dist <= winDist) {
            distAns.innerHTML = `You guessed it! You were only ${dist.toFixed(2)} km away!`
            showAns(true, null);

            calcScore(dist);

            confirmBtn.style.display = "none";
            nextBtn.style.display = "block";

            checkEndGame();
        } 

        // if all guesses have been used up before a correct guess
        // render result UI
        if (currGuesses === numOfGuesses && dist > winDist) {
            const shortestDistGuess = state.distGuesses.sort((a, b) => (a.distance-b.distance))[0];
            const shortestDist = shortestDistGuess.distance;
            distAns.innerHTML = `Your closest guess was ${shortestDist.toFixed(2)} km away!`
            showAns(false, shortestDistGuess);

            // only guesses within 3000km can accumulate a score
            if (shortestDist <= minDist) {
                calcScore(shortestDist);

                score.innerHTML = `Total Score: ${state.score}`
            }

            confirmBtn.style.display = "none";
            nextBtn.style.display = "block";

            checkEndGame();
        }

    } else {
        // if user clicks confirm guess without making a guess
        guessWarning.innerHTML = "Please make a guess first!";
        setTimeout(() => {
            guessWarning.innerHTML = null;
        }, 3000)
    }
}

// to check if the user has completed all rounds
function checkEndGame() {
    if (state.cityNum+1 === numOfRounds) {

        console.log("end:", state.cityNum+1);
        nextBtn.style.display = "none";
        gameStatsContainer.style.display = "none";
        endMsg.style.display = "block";
        restartBtn.style.display = "block";

        endMsg.innerHTML = `Nice! Your total score is ${state.score}!`
    }
}

// to compute score within minDist
function calcScore(dist) {
    state.score += Math.floor(0.75**((dist/100)-11.75)*100);
}

// to zoom into answer + guess bounds
function showAns(isGuessCorrect, shortestDistGuess) {
    ansMarker = new L.Marker(cities[state.cityNum].latlng, {icon: ansIcon}).addTo(map);

    // if user did not manage to guess the city location
    if (!isGuessCorrect) {
        // render marker of guess with the shortest distance
        map.removeLayer(guessMarker);
        guessMarker = new L.Marker(shortestDistGuess.latlng, {icon: guessIcon}).addTo(map);
        polyline = L.polyline([shortestDistGuess.latlng, cities[state.cityNum].latlng], { color: "green", dashArray: "6" }).addTo(map);
    } else {
        // render marker of guess within winDist 
        polyline = L.polyline([state.currGuessLatLng, cities[state.cityNum].latlng], { color: "green", dashArray: "6" }).addTo(map);
    }

    map.fitBounds(polyline.getBounds().pad(0.2));
}

function checkDirection(guessLatLng, ansLatLng) {
    const latDiff = ansLatLng[0] - guessLatLng.lat;
    const lngDiff = ansLatLng[1] - guessLatLng.lng;

    let calc_angle = Math.atan2(lngDiff, latDiff);

    const final_angle = calc_angle * 180 / Math.PI;

    return final_angle;
}

// to set up next round
function newRound() {
    removeMapGraphics();

    // reset states
    state.cityNum += 1;
    state.distGuesses = [];
    state.currGuessLatLng = null;

    // reset game UI
    renderGame();
}

// remove all graphics from map
function removeMapGraphics() {
    map.removeLayer(guessMarker);
    map.removeLayer(ansMarker);
    map.removeLayer(polyline);
}

// to restart the game
function restartGame() {
    endMsg.style.display = "none";
    restartBtn.style.display = "none";
    gameStatsContainer.style.display = "block";
    score.innerHTML = "Total Score: 0";

    removeMapGraphics();
    initialiseStates();
    getCities();
    renderGame();
}
