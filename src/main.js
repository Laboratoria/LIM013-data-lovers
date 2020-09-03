/* import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data); */

import data from './data/pokemon/pokemon.js';

for (let i = 0; i < data.pokemon.length; i++) {
	// CREANDO VARIABLES
	let num = data.pokemon[i].num;
	let name = data.pokemon[i].name;
	let imgUrl = data.pokemon[i].img;
	let tipo = data.pokemon[i].type;
	let dataNueva = document.getElementById('dataPoke');

	//AGREGANDO DIV POKEMON
	let labelPokemon = document.createElement('div');
	labelPokemon.classList.add('pokemon');
	dataNueva.appendChild(labelPokemon);

	//AGREGANDO DIV IMG-CONTAINER
	let labelimgContainer = document.createElement('div');
	labelimgContainer.classList.add('img-container');
	labelPokemon.appendChild(labelimgContainer);

	// AGREGANDO IMAGEN
	let labelImg = document.createElement('img');
	labelImg.setAttribute('src', imgUrl); // set es asignar , get es obtener (agregando imagen)
	labelimgContainer.appendChild(labelImg);

	// AGREGANDO DIV INFO

	let labelinfo = document.createElement('div');
	labelinfo.classList.add('info');
	labelPokemon.appendChild(labelinfo);

	// AGREGANDO NUMERO
	let labelnumber = document.createElement('span');
	labelnumber.classList.add('number');
	labelinfo.appendChild(labelnumber);
	labelnumber.innerHTML = '#' + num; //agregando data de numero con #

	// AGREGANDO NOMBRE
	let labelname = document.createElement('h4');
	labelname.classList.add('name');
	labelinfo.appendChild(labelname);
	labelname.innerHTML = name;

	//AGREGANDO TIPO
	let labelTipo = document.createElement('small');
	labelTipo.classList.add('type');
	labelinfo.appendChild(labelTipo);
	labelTipo.innerHTML = tipo;
}

console.log(name);
