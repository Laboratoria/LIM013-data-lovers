//import { example } from './data.js';

const bienvenido =()=>{
	document.querySelector('#conter').classList.add("ocultar");
	document.querySelector('#contenido').classList.remove("ocultar");
	document.querySelector('#content-nav').classList.remove("ocultar");
	console.log(document.querySelector('#contenido'))
}
const btnIntro= document.getElementById("btnIntro")
const btnIngresar = document.createElement("button");
btnIngresar.textContent ="Ingresar";
btnIngresar.addEventListener("click", bienvenido);
btnIntro.appendChild(btnIngresar);

//document.querySelector('#primerBoton').addEventListener('click',bienvenido);

const paginaPrin =()=>{
	document.querySelector('#contenido').style.display="block";
}

// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';
