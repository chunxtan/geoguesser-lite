# [geoguesser-lite](https://chunxtan.github.io/geoguesser-lite/)
## Overview
Inspired by Geoguessr --- without the new jazzy new avatars & a subscription to pay for the Google Maps API, but with all the guesses you need! Geoguesser-lite is a game for map & city lovers or potentially an inspiration for your next holiday destination. 

### Getting Started
* 5 rounds of randomised cities, 3 guesses each
* Click anywhere on the map where you think the city is
* Guess within 3000km of the answer to score some points & within 100km to get an instant win for each round
* Country hint available for each round
Guess away!

![ezgif com-gif-maker](https://github.com/chunxtan/geoguesser-lite/assets/99042026/39139df5-a8f5-4b36-8978-387e9597698e)

Made with Javascript, HTML, CSS, Leafletjs library

## Process
### 1. Figma Prototyping
![geoguesser-lite figma](https://github.com/chunxtan/geoguesser-lite/assets/99042026/a2262854-e524-4b42-bbdc-b42db7ac2a0b)
<br>
Simple prototype wireframing on figma to test out interaction and user flow. 

### 2. Finding a list of cities with coordinates
![Screenshot 2023-10-03 at 21 06 13](https://github.com/chunxtan/geoguesser-lite/assets/99042026/b0d472af-5cb8-4804-ba85-a0c8fbd2427b)
<br>
~43,000 cities and their associated latlng coordinates found on https://simplemaps.com/data/world-cities 🌎

### 3. Experimenting with different basemaps
![Screenshot 2023-10-03 at 21 08 27](https://github.com/chunxtan/geoguesser-lite/assets/99042026/57be26c8-8cf9-4d82-b603-c44e4e844be5)
<br>
Finding a suitable basemap (without giving away any names!) on https://github.com/leaflet-extras/leaflet-providers

### 4. Leafletjs
https://leafletjs.com/
* Open-source JS library for interactive maps
* Provided map interactions for getting coordinates, rendering pins/polylines & zooming
![image](https://github.com/chunxtan/geoguesser-lite/assets/99042026/cf9a4bd3-fe94-43de-a9fb-8524cca37139)

### 5. Future Development
* Penalty of score with the use of hints
* Option for user to choose continent/country/region to play
* Option to reveal direction to city from current guess

## Favourites
### 😄 #1 Rendering the Answer Marker & Distance to nearest guess
This function renders the answer marker & a dotted polyline between the guess made and answer marker. 
It is called with each guess being confirmed. This function takes in two arguments:
* `isGuessCorrect` is a boolean value. To check if the guess made was an immediate win or not.
* `shortestDistGuess` takes in an object | null. The object has properties of `guessNum` (number of guesses made for this round), `latlng` (coordinates of guess) & 'distance' (distance from answer).

```Javascript
// to zoom into answer + guess bounds
function showAns(isGuessCorrect, shortestDistGuess) {
    giveHint();
    ansMarker = new L.Marker(cities[state.cityNum].latlng, {icon: ansIcon}).addTo(map);

    // if user did not manage to guess the city location
    if (!isGuessCorrect) {
        // render line to guess with the shortest distance
        polyline = L.polyline([shortestDistGuess.latlng, cities[state.cityNum].latlng], { color: "green", dashArray: "6" }).addTo(map);
    } else {
        // render marker of guess within winDist 
        polyline = L.polyline([state.currGuessLatLng, cities[state.cityNum].latlng], { color: "green", dashArray: "6" }).addTo(map);
    }

    map.fitBounds(polyline.getBounds().pad(0.2));
}
```
### 😄 #2 Rendering direction of answer relative to current guess
Use a single north-facing arrow and rotate it rather than using multiple arrow images pointing to different directions + switch cases.
```Javascript
function checkDirection(guessLatLng, ansLatLng) {
    const latDiff = ansLatLng[0] - guessLatLng.lat;
    const lngDiff = ansLatLng[1] - guessLatLng.lng;

    let calc_angle = Math.atan2(lngDiff, latDiff);

    const final_angle = calc_angle * 180 / Math.PI;

    return final_angle;
}
```

## Challenges
* Finding an appropriate basemap without labels. Tried to venture into styling using WebGL but turned out to be a rabbithole!

## Attributions
<a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Those Icons - Flaticon</a>
<br>
<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
<br>
<a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>
