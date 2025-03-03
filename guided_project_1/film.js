const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');

fetch(`http://localhost:9001/api/films/${id}`)
    .then(response => response.json())
    .then(data => updateFilmInfo(data))
    .catch((error) => console.error('Error: ', error));

    fetch(`http://localhost:9001/api/films/${id}/characters`)
    .then(response => response.json())
    .then(data => console.log('GET: ', data))
    .catch((error) => console.error('Error: ', error));

    fetch(`http://localhost:9001/api/films/${id}/planets`)
    .then(response => response.json())
    .then(data => console.log('GET: ', data))
    .catch((error) => console.error('Error: ', error));

    function updateFilmInfo (filmObject) {
        console.log(filmObject);
        console.log('release date: ', filmObject.release_date);
    }