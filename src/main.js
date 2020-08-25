import datajs from './data.js';
let data = window.rickAndMorty.results;
console.log(data);
let currentPage = 1;
let rows = 20;
const listElement = document.getElementById('alldata');
const paginationElemnent = document.getElementById('pagination');

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

const displayList = (items, wrapper, rows_per_page, page) => {


	wrapper.innerHTML= '<h1 class="app-title">Total de Personajes('+items.length+')</h1>';
	page --;
	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginationItems = items.slice(start, end);

	for (let i = 0; i< paginationItems.length; i++){
		let item = paginationItems[i];

		let itemElement = document.createElement('div');
		itemElement.innerText = item.name;

		wrapper.innerHTML += obtenerPersonajes(item);
		//'<h1 class="app-title">Total de Personajes(${item.length})</h1>'+
		//obtenerPersonajes(item);

		//wrapper.appendChild(itemElement);
		}
	}

const paginationbuttons = (page,items) =>{ 
    let buttons = document.createElement('button');
    buttons.innerText = page;

    if (currentPage == page) buttons.classList.add('active');

    buttons.addEventListener('click',function() {
    	currentPage = page;
    	displayList(items,listElement,rows,currentPage);
    	let currentBtn = document.querySelector('.pagenumbers button.active');
    	currentBtn.classList.remove('active');
    	buttons.classList.add('active');
    });
    return buttons;
}


const setupagination = (items, wrapper, rows_per_page) =>{
	wrapper.innerHTML = "";

	let pageCount = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < pageCount + 1; i++){
		let btns = paginationbuttons(i,items);
		wrapper.appendChild(btns);
	}
}




const bienvenido = () => {
	document.querySelector('#conter').classList.add("ocultar");
	document.querySelector('#contenido').classList.remove("ocultar");
	document.querySelector('#container-header').classList.remove("ocultar");
	document.querySelector('#content-footer').classList.remove("ocultar");
	document.querySelector('#ctn-bars-search').classList.remove("ocultar");

	displayList(data, listElement, rows, currentPage);
	setupagination(data, paginationElemnent, rows);
	//document.getElementById("alldata").innerHTML =
	//	`<h1 class="app-title">Total de Personajes(${data.length})</h1>
	//	${data.map(obtenerPersonajes).join(" ")}`
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
	bienvenido();
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

//Filtro de especies
const botonesFiltros = document.querySelector("#content-cb").children;
const contentUl = document.getElementById("content-cb");
const inputName = contentUl.getElementsByTagName("input");
const btnF = () => {
	const filtroData = datajs.filterSpecies(data, inputName);
	displayList(filtroData, listElement, rows, currentPage);
	setupagination(filtroData, paginationElemnent, rows);

	//document.getElementById("alldata").innerHTML =
	//	`<h1 class="app-title">Total de Personajes(${filtroData.length})</h1>
	//	${filtroData.map(obtenerPersonajes).join(" ")}`
}

for (let i = 0; i < botonesFiltros.length; i++) {
	const inputsFiltros = botonesFiltros[i].children;
	for (let j = 0; j < inputsFiltros.length; j++) {
		inputsFiltros[j].addEventListener("click", btnF);
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
		displayList(filternames, listElement, rows, currentPage);
	   setupagination(filternames, paginationElemnent, rows);

		//document.getElementById("alldata").innerHTML =
		//	`<h1 class="app-title">Total de Personajes(${filternames.length})</h1>
		//${filternames.map(obtenerPersonajes).join(" ")}`
		//console.log("filternaes", filternames);

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
	displayList(data, listElement, rows, currentPage);
	setupagination(data, paginationElemnent, rows);
	//document.getElementById('alldata').innerHTML = `
	//<h1 class="app-title">Total de Personajes(${data.length})</h1>
	//${data.map(obtenerPersonajes).join(" ")}
	//`
}

document.getElementById("bos-1").addEventListener("click", acenA_Z);

const acenZ_A = () => {
	console.log("entro22");
	datajs.nameZ_A(data);
	document.getElementById('alldata').innerHTML = " ";
	displayList(data, listElement, rows, currentPage);
	setupagination(data, paginationElemnent, rows);
	//document.getElementById('alldata').innerHTML = `
	//<h1 class="app-title">Total de Personajes(${data.length})</h1>
	//${data.map(obtenerPersonajes).join(" ")}
	//`
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
//const closeFilter = document.getElementById("close");
//closeFilter.addEventListener("click", closeModal);


	



// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';


