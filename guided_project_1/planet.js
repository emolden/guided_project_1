console.log("Hello World!");
const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');

fetch(`http://localhost:9001/api/planets/${id}`)
.then(response => response.json())
.then(data => console.log('GET:', data))
.catch((error) => console.error('Error:', error));

fetch(`http://localhost:9001/api/planets/${id}/characters`)
.then(response => response.json())
.then(data => console.log('GET:', data))
.catch((error) => console.error('Error:', error))

fetch(`http://localhost:9001/api/planets/${id}/films`)
.then(response => response.json())
.then(data => console.log('GET:', data))
.catch((error) => console.error('Error:', error))