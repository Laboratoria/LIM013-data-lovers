import datajs from './data.js';
let data = window.rickAndMorty.results;
console.log(data);

const bienvenido = () => {
	document.querySelector('#conter').classList.add("ocultar");
	document.querySelector('#contenido').classList.remove("ocultar");
	document.querySelector('#container-header').classList.remove("ocultar");
	document.querySelector('#content-footer').classList.remove("ocultar");
	document.querySelector('#ctn-bars-search').classList.remove("ocultar");

	document.getElementById("alldata").innerHTML =
		`<h1 class="app-title">Total de Personajes(${data.length})</h1>
		${data.map(obtenerPersonajes).join(" ")}`
}

//Contenidos para el html
const obtenerPersonajes = (data) => {
	return `<div class="person">
		<div class="imagenes">
		<img class="photo" src="${data.image}">
		</div>
		<div class="info">
		<h2 class="name">${data.name}</h2>
		<p class="Text-datos">Genero: ${data.gender}</p>
		<p class="Text-datos">Origen: ${data.origin.name}</p>
		<p class="Text-datos">Especie: ${data.species}</p>
		<p class="Text-datos">Estado: ${data.status}</p>
		</div>
		</div>`
}

//Botón de inicio
const btnIntro = document.getElementById("btnIntro")
const btnIngresar = document.createElement("button");
btnIngresar.textContent = "Ingresar";
btnIngresar.addEventListener("click", bienvenido);
btnIntro.appendChild(btnIngresar);

//Funciónes de barra de navegación-menu
const cambiarClase = () => {
	let siteNav = document.getElementById('menu');
	siteNav.classList.toggle('menu-open');
	let menuOpen = document.getElementById('menu-toggle');
	menuOpen.classList.toggle('menu-open');
}
const tongle = document.getElementById("tongle");
tongle.addEventListener("click", cambiarClase);

//Función de los botonde de filtro e inputs de radio
const resetRadioButtons = (groupName) => {
	const arRadioBtn = document.getElementsByName(groupName);
	for (let i = 0; i < arRadioBtn.length; i++) {
		let radButton = arRadioBtn[i];
		radButton.checked = false;
	}
}

const botonTodos = () => {
	document.getElementById("alldata").innerHTML =
		`<h1 class="app-title">Total de Personajes(${data.length})</h1>
		${data.map(obtenerPersonajes).join(" ")}`

	document.querySelector('#content-cb').classList.add("ocultar");
	resetRadioButtons("esp");
	resetRadioButtons("orig");
	resetRadioButtons("gener");
	resetRadioButtons("estd");
}
const btnTodos = document.getElementById("btn-todos")
btnTodos.addEventListener("click", botonTodos);

const checkboxE = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#especies').classList.remove("ocultar");
	document.querySelector('#origen').classList.add("ocultar");
	document.querySelector('#genero').classList.add("ocultar");
	document.querySelector('#estado').classList.add("ocultar");
	resetRadioButtons("orig");
	resetRadioButtons("gener");
	resetRadioButtons("estd");
}
const btnEspecies = document.getElementById("btn-especies")
btnEspecies.addEventListener("click", checkboxE);

const checkboxO = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#origen').classList.remove("ocultar");
	document.querySelector('#especies').classList.add("ocultar");
	document.querySelector('#genero').classList.add("ocultar");
	document.querySelector('#estado').classList.add("ocultar");
	resetRadioButtons("esp");
	resetRadioButtons("gener");
	resetRadioButtons("estd");
}
const btnOrigen = document.getElementById("btn-origen")
btnOrigen.addEventListener("click", checkboxO);

const checkboxG = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#genero').classList.remove("ocultar");
	document.querySelector('#especies').classList.add("ocultar");
	document.querySelector('#origen').classList.add("ocultar");
	document.querySelector('#estado').classList.add("ocultar");
	resetRadioButtons("esp");
	resetRadioButtons("orig");
	resetRadioButtons("estd");
}
const btnGenero = document.getElementById("btn-genero")
btnGenero.addEventListener("click", checkboxG);

const checkboxEs = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#estado').classList.remove("ocultar");
	document.querySelector('#especies').classList.add("ocultar");
	document.querySelector('#origen').classList.add("ocultar");
	document.querySelector('#genero').classList.add("ocultar");
	resetRadioButtons("esp");
	resetRadioButtons("orig");
	resetRadioButtons("gener");
}
const btnEstado = document.getElementById("btn-estado")
btnEstado.addEventListener("click", checkboxEs);

//Filtro de data

const botonesFiltros = document.querySelector("#content-cb").children;
const contentUl = document.getElementById("content-cb");
const inputName = contentUl.getElementsByTagName("input");
const btnF = () => {
	const filtroData = datajs.filterSpecies(data, inputName);
	document.getElementById("alldata").innerHTML =
		`<h1 class="app-title">Total de Personajes(${filtroData.length})</h1>
		${filtroData.map(obtenerPersonajes).join(" ")}`
}

for (let i = 0; i < botonesFiltros.length; i++) {
	const inputsFiltros = botonesFiltros[i].children;
	for (let j = 0; j < inputsFiltros.length; j++) {
		inputsFiltros[j].addEventListener("click", btnF);
	}
}

const botonesFiltrosM = document.querySelector("#accordions").children;
const contentUlM = document.getElementById("accordions");
const inputNameM = contentUlM.getElementsByTagName("input");
const btnFM = () => {
	const filtroDataM = datajs.filterSpecies(data, inputNameM);
	document.getElementById("alldata").innerHTML =
		`<h1 class="app-title">Total de Personajes(${filtroDataM.length})</h1>
		${filtroDataM.map(obtenerPersonajes).join(" ")}`
	document.querySelector('#my_modal').classList.add("ocultar");
}

for (let i = 0; i < botonesFiltrosM.length; i++) {
	const divGenM = botonesFiltrosM[i].children;
	for (let j = 0; j < divGenM.length; j++) {
		const divContM = divGenM[j].children;
		for (let l = 0; l < divContM.length; l++) {
			const inputsFiltrosM = divContM[l].children;
			for (let k = 0; k < inputsFiltrosM.length; k++) {
				inputsFiltrosM[k].addEventListener("click", btnFM);
			}
		}
	}
}

//Declarando variables
let contenBus = document.getElementById('ctn-bars-search');
const coverBus = document.getElementById("cover-ctn-search");
const inputSeatch = document.getElementById('inputSeatch');


const pruebas = () => {
	let texto = document.getElementById('inputSeatch');
	texto = texto.value.replace(/ /g, "");

	if (texto != "") {
		let textoMin = texto.toLowerCase();
		console.log(textoMin);
		let filternames = datajs.filterName(data, textoMin);
		document.getElementById("alldata").innerHTML =
			`<h1 class="app-title">Total de Personajes(${filternames.length})</h1>
		${filternames.map(obtenerPersonajes).join(" ")}`
		console.log("filternaes", filternames);

	}
}

document.getElementById("local").addEventListener("click", pruebas);

const presionarTecla = () => {
	let teclaEsc = event.keyCode;
	if (teclaEsc == 13) {
		return pruebas();
	}
}

window.onkeydown = presionarTecla;

const MuestraBusca = () => {

	contenBus.style.top = "80px";
	coverBus.style.display = "block";
	//boxSear.style.display = "block";
	inputSeatch.focus();
}
document.getElementById("ctn-icon-search").addEventListener("click", MuestraBusca);

const ocultaBusca = () => {
	contenBus.style.top = "-10px";
	coverBus.style.display = "none";
	//boxSear.style.display = "none";
	inputSeatch.value = " ";
}
document.getElementById("cover-ctn-search").addEventListener("click", ocultaBusca);

const salida2 = () => {
	contenBus.style.top = "-10px";
	coverBus.style.display = "none";
	boxSear.style.display = "none";
	inputSeatch.value = " ";
}

document.getElementById("exit").addEventListener("click", salida2);

const letras = () => {
	document.querySelector('#letritas').classList.remove("ocultar");
}

document.getElementById("orden").addEventListener("click", letras);

const acenA_Z = () => {
	console.log("entro");
	datajs.nameA_Z(data);
	document.getElementById('alldata').innerHTML = " ";
	document.getElementById('alldata').innerHTML = `
	<h1 class="app-title">Total de Personajes(${data.length})</h1>
	${data.map(obtenerPersonajes).join(" ")}
	`
}

document.getElementById("bos-1").addEventListener("click", acenA_Z);

const acenZ_A = () => {
	console.log("entro22");
	datajs.nameZ_A(data);
	document.getElementById('alldata').innerHTML = " ";
	document.getElementById('alldata').innerHTML = `
	<h1 class="app-title">Total de Personajes(${data.length})</h1>
	${data.map(obtenerPersonajes).join(" ")}
	`
}

document.getElementById("bos-2").addEventListener("click", acenZ_A);

//Funciones del modal de filtros mobile
const modalAdd = () => {
	document.querySelector('#my_modal').classList.remove("ocultar");
}
const btnFilterM = document.getElementById("content-filtro-m")
btnFilterM.addEventListener("click", modalAdd);

const closeModal = () => {
	document.querySelector('#my_modal').classList.add("ocultar");
}
const closeFilter = document.getElementById("close");
closeFilter.addEventListener("click", closeModal);

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

//Funciones del acordeón
accordionItemHeaders.forEach(accordionItemHeader => {
	accordionItemHeader.addEventListener("click", event => {
		const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
		if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
			currentlyActiveAccordionItemHeader.classList.toggle("active");
			currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
		}

		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if (accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		}
		else {
			accordionItemBody.style.maxHeight = 0;
		}
		resetRadioButtons("esp");
		resetRadioButtons("orig");
		resetRadioButtons("gener");
		resetRadioButtons("estd");
	});
});



// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';


