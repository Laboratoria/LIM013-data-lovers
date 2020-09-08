import { orderData } from './data.js';
import data from './data/pokemon/pokemon.js';
let dataPokemon = data.pokemon;

const dataCarte = (dataPokemon) => {
	for (let i = 0; i < dataPokemon.length; i++) {
		// CREANDO VARIABLES
		let num = dataPokemon[i].num;
		let name = dataPokemon[i].name;
		let imgUrl = dataPokemon[i].img;
		let tipo = dataPokemon[i].type;
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
};

window.onload = dataCarte(data.pokemon);

const ordenarSelectBox = document.getElementById('ordenar');
/* ordenarSelectBox.addEventListener('chance',() => { constordenarSelectBox.value; */
ordenarSelectBox.addEventListener('change', function (e) {
	const valor = e.target.value;
	console.log(valor);
	const dataOrdenado = orderData(data.pokemon, valor);
	dataPokemon = dataOrdenado;
	document.getElementById('dataPoke').innerHTML = '';
	dataCarte(dataPokemon);
});
