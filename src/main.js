import datajs  from './data.js';
const data = window.rickAndMorty.results;
var datagen=data;
console.log(data);

const bienvenido =()=>{
	document.querySelector('#conter').classList.add('ocultar');
	document.querySelector('#contenedor').classList.remove('ocultar');
    document.querySelector('#box').classList.remove('ocultar');
	function obtenerPersonajes (data) {
		return `<div class="person">
		<div class="imagenes">
		<img class="photo" src="${data.image}">
		</div>
		<div class="info">
		<h2 class="name">${data.name}</h2>
		<p class="origin">Genero:${data.gender}</p>
		<p class="origin">Origen:${data.origin.name}</p>
		<p class="origin">Especie:${data.species}</p>
		<p class="origin">Estado:${data.status}</p>
		</div>
		</div>`
	}
	document.getElementById("all-data").innerHTML =`
	<h1 class="app-title">Total de Personajes(${data.length})</h1>
	${data.map(obtenerPersonajes).join(" ")}
	`
	console.log("all-data");
}

document.querySelector('#primerBoton').addEventListener('click',bienvenido);

const checki =()=>{
document.querySelector('#check').classList.remove('ocultar');

}

document.querySelector('#especies').addEventListener('click',checki);

const checkbox =()=>{
	
}
 
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';
