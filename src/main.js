//import { example } from './data.js';

const bienvenido =()=>{
	document.querySelector('#conter').style.display="none";
	document.querySelector('#contenido').style.display="block";
	console.log(document.querySelector('#contenido'))
}

document.querySelector('#primerBoton').addEventListener('click',bienvenido);

const paginaPrin =()=>{
	document.querySelector('#contenido').style.display="block";
}

// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';
