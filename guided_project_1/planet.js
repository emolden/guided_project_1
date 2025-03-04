const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');

fetch(`http://localhost:9001/api/planets/${id}`)
    .then(response => response.json())
    .then(data => newPlanet(data))
    .catch((error) => console.error('Error:', error));

fetch(`http://localhost:9001/api/planets/${id}/characters`)
    .then(response => response.json())
    .then(data => characterList(data))
    .catch((error) => console.error('Error:', error))

fetch(`http://localhost:9001/api/planets/${id}/films`)
    .then(response => response.json())
    .then(data => filmList(data))
    .catch((error) => console.error('Error:', error))

// function newPlanet(planetObject) {
//     document.querySelector("#name").innerHTML = planetObject.name;
//     document.querySelector('#climate').innerHTML+= planetObject.climate;
//     document.querySelector('#surface_water').innerHTML += planetObject.surface_water;
//     document.querySelector("#diameter").innerHTML += planetObject.diameter;
//     document.querySelector("#rotation_period").innerHTML += planetObject.rotation_period;
//     document.querySelector("#terrain").innerHTML += planetObject.terrain;
//     document.querySelector("#gravity").innerHTML += planetObject.gravity;
//     document.querySelector("#orbital_period").innerHTML += planetObject.orbital_period;
//     document.querySelector("#population").innerHTML += planetObject.population;
// };

function newPlanet(planetObject) {
    document.querySelector("#name").innerHTML = planetObject.name

    //Make Table Header
    let planetTable = document.getElementById('planetTable');
    let tableHolder = "";
    let tableHolder2 = "";
    //Make Rows
    tableHolder += '<thead><tr><th>Climate</th><th>Surface Water</th><th>Diameter</th><th>Rotation Period</th></tr></thead>';
    tableHolder2 += '<thead><tr><th>Terrain</th><th>Gravity</th><th>Orbital Period</th><th>Population</th></tr></thead>';
    tableHolder += '<tbody>';

    tableHolder += '<tr>';

    tableHolder += `<td>${planetObject.climate}</td>`;
    tableHolder += `<td>${planetObject.surface_water}</td>`;
    tableHolder += `<td>${planetObject.diameter}</td>`;
    tableHolder += `<td>${planetObject.rotation_period}</td>`;

    tableHolder += '</tr>';

    tableHolder += '<tr>';

    tableHolder2 += `<td>${planetObject.terrain}</td>`;
    tableHolder2 += `<td>${planetObject.gravity}</td>`;
    tableHolder2 += `<td>${planetObject.orbital_period}</td>`;
    tableHolder2 += `<td>${planetObject.population}</td>`;

    tableHolder += '</tr>'
    tableHolder += '</tbody>';
    planetTable.innerHTML = tableHolder + tableHolder2;
};


function characterList(characters) {
    for (character of characters) [
        document.querySelector('#characters').innerHTML += `<h4><a href="character.html?id=${character.id}">${character.name}</a></h4>`
    ]
}

function filmList(films) {
    for (film of films) [
        document.querySelector('#films').innerHTML += `<h4><a href="film.html?id=${film.id}">${film.title}</a></h4>`
    ]
}