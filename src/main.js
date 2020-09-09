import data from './data/pokemon/pokemon.js';
import {
	orderData,
	filterDataType,
	filterDataGeneracion,
	filterDataEgg,
} from './data.js';

//MOSTRAR LA DATA
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
window.onload = dataCarte(dataPokemon);
// FIN MOSTRAR LA DATA

//ORDENANDO Y FILTRANDO LA DATA

const ordenarSelectBox = document.getElementById('ordenar');
const selectFilter = document.querySelectorAll('.seleccionar');

const filtros = (e) => {
	const valueSelecttype = selectFilter[0].value;
	const valueSelectGene = selectFilter[1].value;
	const valueSelectEgg = selectFilter[2].value;
	const valueOrdenar = ordenarSelectBox.value;

	let arrayfiltrado = data.pokemon;

	arrayfiltrado = filterDataType(arrayfiltrado, valueSelecttype);
	arrayfiltrado = filterDataGeneracion(arrayfiltrado, valueSelectGene);
	arrayfiltrado = filterDataEgg(arrayfiltrado, valueSelectEgg);
	arrayfiltrado = orderData(arrayfiltrado, valueOrdenar);

	document.getElementById('dataPoke').innerHTML = ''; //mostrando data sin repetir
	dataCarte(arrayfiltrado);
};

selectFilter[0].addEventListener('change', filtros);
selectFilter[1].addEventListener('change', filtros);
selectFilter[2].addEventListener('change', filtros);
ordenarSelectBox.addEventListener('change', filtros);



//FIN DE ORDENANDO Y FILTRANDO LA DATA
