/* import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data); */

import data from './data/pokemon/pokemon.js';

for (let i=0;i<251;i++) {
	/* CREANDO VARIABLES */
let num=data.pokemon[i].num;
let name=data.pokemon[i].name;
let img=data.pokemon[i].img;
	/* CREANDO ELEMENTOS */	
let labelImg=document.createElement("img");
let labelP=document.createElement("p");
	/* VISUALIZANDO EN EL NAVEGADOR */
labelImg.setAttribute("src",img);
labelP.innerHTML= num+" "+name;
document.getElementById ("dataPoke").appendChild(labelImg);
document.getElementById ("dataPoke").appendChild(labelP);
}
console.log(name);
