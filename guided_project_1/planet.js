console.log("Hello World!");

const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');

fetch(`http://localhost:9001/api/planets/${id}`)
.then(response => response.json())
.then(data => newPlanet(data))
.catch((error) => console.error('Error:', error));

fetch(`http://localhost:9001/api/planets/${id}/characters`)
.then(response => response.json())
.then(data => console.log('GET:', data))
.catch((error) => console.error('Error:', error))

fetch(`http://localhost:9001/api/planets/${id}/films`)
.then(response => response.json())
.then(data => console.log('GET:', data))
.catch((error) => console.error('Error:', error))

function newPlanet(planetObject) {
    document.querySelector("#name").innerHTML = planetObject.name;
    document.querySelector('#climate').innerHTML= planetObject.climate;
    document.querySelector('#surface_water').innerHTML = planetObject.surface_water;
    document.querySelector("#diameter").innerHTML = planetObject.diameter;
    document.querySelector("#rotation_period").innerHTML = planetObject.rotation_period;
    document.querySelector("#terrain").innerHTML = planetObject.terrain;
    document.querySelector("#gravity").innerHTML = planetObject.gravity;
    document.querySelector("#orbital_period").innerHTML = planetObject.orbital_period;
    document.querySelector("#population").innerHTML = planetObject.population;

}