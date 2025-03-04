const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');

fetch(`http://localhost:9001/api/films/${id}`)
    .then(response => response.json())
    .then(data => updateFilmInfo(data))
    .catch((error) => console.error('Error: ', error));

fetch(`http://localhost:9001/api/films/${id}/characters`)
    .then(response => response.json())
    .then(data => updateCharacters(data))
    .catch((error) => console.error('Error: ', error));

fetch(`http://localhost:9001/api/films/${id}/planets`)
    .then(response => response.json())
    .then(data => updatePlanets(data))
    .catch((error) => console.error('Error: ', error));
    console.log('another console.log!');

    function updateFilmInfo (filmObject) {
        document.querySelector('#release_date').innerHTML+= filmObject.release_date;
        document.querySelector('#film').innerHTML = filmObject.title;
        document.querySelector('#director').innerHTML += filmObject.director;
        document.querySelector('#episode').innerHTML+= filmObject.episode_id;

    }
    console.log('hello')

    function updateCharacters (characterArray) {
        for(character of characterArray) {
            document.querySelector('#characters').innerHTML += `<li><a href="character.html?id=${character.id}">${character.name}</li>`
        }
    }
    
    function updatePlanets(planetArray) {
        for(planet of planetArray) {
            document.querySelector('#planets').innerHTML += `<li><a href="/planet.html?id=${planet.id}">${planet.name}</a></li>`
        }
    }