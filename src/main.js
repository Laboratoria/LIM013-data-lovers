import datajs from './data.js';
const data = window.rickAndMorty.results;
console.log(data);

const bienvenido = () => {
	document.querySelector('#conter').classList.add("ocultar");
	document.querySelector('#contenido').classList.remove("ocultar");
	document.querySelector('#container-header').classList.remove("ocultar");
	document.querySelector('#content-footer').classList.remove("ocultar");
	document.querySelector('#ctn-bars-search').classList.remove("ocultar");


}

const obtenerPersonajes = (data) => {
		return `<div class="person">
		<div class="imagenes">
		<img class="photo" src="${data.image}">
		</div>
		<div class="info">
		<h2 class="name">${data.name}</h2>
		<p class="Text-datos">Genero:${data.gender}</p>
		<p class="Text-datos">Origen:${data.origin.name}</p>
		<p class="Text-datos">Especie:${data.species}</p>
		<p class="Text-datos">Estado:${data.status}</p>
		</div>
		</div>`
	}
	document.getElementById("alldata").innerHTML = `
	<h1 class="app-title">Total de Personajes(${data.length})</h1>
	${data.map(obtenerPersonajes).join(" ")}
	`

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

//Función de los botonde de filtro y checkbox
const checkboxE = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#especies').classList.remove("ocultar");
	document.querySelector('#origen').classList.add("ocultar");
	document.querySelector('#genero').classList.add("ocultar");
	document.querySelector('#estado').classList.add("ocultar");

}
const btnEspecies = document.getElementById("btn-especies")
btnEspecies.addEventListener("click", checkboxE);

const checkboxO = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#origen').classList.remove("ocultar");
	document.querySelector('#especies').classList.add("ocultar");
	document.querySelector('#genero').classList.add("ocultar");
	document.querySelector('#estado').classList.add("ocultar");
}
const btnOrigen = document.getElementById("btn-origen")
btnOrigen.addEventListener("click", checkboxO);

const checkboxG = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#genero').classList.remove("ocultar");
	document.querySelector('#especies').classList.add("ocultar");
	document.querySelector('#origen').classList.add("ocultar");
	document.querySelector('#estado').classList.add("ocultar");
}
const btnGenero = document.getElementById("btn-genero")
btnGenero.addEventListener("click", checkboxG);

const checkboxEs = () => {
	document.querySelector('#content-cb').classList.remove("ocultar");
	document.querySelector('#estado').classList.remove("ocultar");
	document.querySelector('#especies').classList.add("ocultar");
	document.querySelector('#origen').classList.add("ocultar");
	document.querySelector('#genero').classList.add("ocultar");
}
const btnEstado = document.getElementById("btn-estado")
btnEstado.addEventListener("click", checkboxEs);

//Filtro de especie humanos
const radioEspecies = document.querySelector("#especies").children;
const pruebacontI=document.getElementById("especies")
const pruebaInputs =pruebacontI.getElementsByTagName("input");
console.log(pruebaInputs)
const btnH = () => {
	document.querySelector('#alldata').classList.add("ocultar");
	document.querySelector('#dataHuman').classList.remove("ocultar");
	for(let i=0; i<pruebaInputs.length; i++){
		if(pruebaInputs[i].checked==true){
				let dataH=pruebaInputs[i].getAttribute("value");
	console.log(dataH)
	datajs.filterHumans(data,dataH)
		}
		
	
	//let inpuH= document.getElementById('btn-human')
}
}
/*const btnH = () => {
	document.querySelector('#alldata').classList.add("ocultar");
	document.querySelector('#dataHuman').classList.remove("ocultar");
	let inpuH= document.getElementById('btn-human')
	let dataH=inpuH.getAttribute("value");
	console.log(dataH)
	datajs.filterHumans(data,dataH)
}
const btnHuman = document.getElementById("btn-human")
btnHuman.addEventListener("click", btnH);*/

for(let i=0; i<radioEspecies.length; i++){
	radioEspecies[i].addEventListener("click", btnH);
}



//Buscador de cotenido

//Declarando variebles
let contenBus = document.getElementById('ctn-bars-search');
const coverBus = document.getElementById("cover-ctn-search");
const inputSeatch = document.getElementById('inputSeatch');
const boxSear = document.getElementById('box-search');

const MuestraBusca = () =>{
	contenBus.style.top= "80px";
	boxSear.style.display = "block";
	inputSeatch.focus();
}
 document.getElementById("ctn-icon-search").addEventListener("click",MuestraBusca);

 const ocultaBusca = () =>{
 	contenBus.style.top = "-10px";
 	boxSear.style.display = 'none';
 	inputSeatch.value = "";
 }

 document.getElementById("cover-ctn-search").addEventListener("click",ocultaBusca);


 let texto = document.getElementById('inputSeatch');
 let buimg = document.getElementById('local');

 const pruevas = () =>{
  	 //alert(texto.value.toLowerCase());
  	 let textoMin = texto.value.toLowerCase();
  	 for(var i=0;i<data.length;i++){
  	 	let dataMin = data[i].name.toLowerCase();
  	 	if(dataMin.indexOf(textoMin) !== -1){
  	 		boxSear.innerHTML+='<li><a onclick="nuevo">'+data[i].name+' de '+data[i].name+'</a> </li>';
  	 	}
  	 }
}
 
document.getElementById("local").addEventListener("click",pruevas);


const nuevo = () =>{
	console.log(nuevo);
  datoOb.obtenerPersonajes();
}

document.getElementById("alldata").addEventListener("click",nuevo);
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';
