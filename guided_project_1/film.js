//looks for the parameters in the url
const sp = new URLSearchParams(window.location.search);
//saves the id parameter as a variable
const id = sp.get('id');

//fetches info about the film from the id in the url
fetch(`http://localhost:9001/api/films/${id}`)
    .then(response => response.json())
    .then(data => updateFilmInfo(data))
    .catch((error) => console.error('Error: ', error));

//fetches the names of the characters in the film from the
//film id in the url
fetch(`http://localhost:9001/api/films/${id}/characters`)
    .then(response => response.json())
    .then(data => updateCharacters(data))
    .catch((error) => console.error('Error: ', error));

//fetches the planets in the film from the film id in the url
fetch(`http://localhost:9001/api/films/${id}/planets`)
    .then(response => response.json())
    .then(data => updatePlanets(data))
    .catch((error) => console.error('Error: ', error));

//takes in the film info and updates the html
function updateFilmInfo (filmObject) {
    document.querySelector('#release_date').innerHTML+= filmObject.release_date;
    document.querySelector('#film').innerHTML = filmObject.title;
    document.querySelector('#director').innerHTML += filmObject.director;
    document.querySelector('#episode').innerHTML+= filmObject.episode_id;

}

//takes in the name of the characters and displays them
//in a list in html
function updateCharacters (characterArray) {
    for(character of characterArray) {
        document.querySelector('#characters').innerHTML += `<li><a href="character.html?id=${character.id}">${character.name}</li>`
    }
}

//take sin the list of planets and displays them
//in a list in html
function updatePlanets(planetArray) {
    for(planet of planetArray) {
        document.querySelector('#planets').innerHTML += `<li><a href="/planet.html?id=${planet.id}">${planet.name}</a></li>`
    }
}