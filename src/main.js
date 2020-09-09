/* Nuestro argumento es como empieza esta funcion, es el example */
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

const arrPokemon = data.pokemon;
const divData= document.getElementById("dataCompleta");

divData.innerHTML= arrPokemon.map(example).join(" ")
/* ` 
<h1 class="app-title"> Tenemos (${pokemonData.length}) pokemones </h1>
${pokemonData.map(function(poke){
  
}).join("")}
`*/
 


