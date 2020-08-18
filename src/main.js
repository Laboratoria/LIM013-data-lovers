import { example } from './data.js'; //fijo
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';  //fijo
// import data from './data/rickandmorty/rickandmorty.js';

let allPokemon = data.pokemon;

function pokemonTemplate(poke){
    return `
    <div class= 'poke'>
    <img class= 'poke-img'  src= '${poke.img}'>
    <h2 class= 'poke-name'>${poke.name}</h2>
    </div>
    `
}

document.getElementById('root').innerHTML = `
<h2 class = 'rootTitle'>Pokemons (${allPokemon.length}results)</h2>
${allPokemon.map(pokemonTemplate).join('')}
`
   /* return `
    <div class='pokemon'>
      <img class='pok-img' src='${pokemon.img}'>
      <h2 class='pok-name'>${pokemon.name}</h2>
    </div>  
    `*/







console.log(example, data);


