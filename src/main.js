import { example } from './data.js'; //fijo
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';  //fijo
// import data from './data/rickandmorty/rickandmorty.js';

let allPokemon= data.pokemon;

function pokemonTemplate(poke){
    return`
    <div class='poke'>
    <img class='poke-img' src='${poke.img}'>
    <p class= 'poke-name'> ${poke.name}<p>    
    </div>
    `
}

document.getElementById('root').innerHTML = `
<h2 class= 'rootTitle'>Pokemons (${allPokemon.length}results) <h2>
${allPokemon.map(pokemonTemplate).join('')}
`



const section = document.querySelector('section');
section.innerHTML=`
<select id='list'> 
<option value=''>All</option>
<option value='grass'>Hierba</option>
<option value='fire'>Fuego</option>
<option value='fairy'>Hada</option>
<option value='electric'>Electrico</option>
<option value='rock'>Roca</option>
<option value='water'>Agua</option>
</select>
`
let list= document.getElementById('list');
list.addEventListener('change',(event)=> {
    let selectValue = list.value;
    console.log(selectValue);
    
        function pokemonFilter(poke){
        return poke.type.includes(selectValue) 
    }
    allPokemon = allPokemon.filter(pokemonFilter);
    console.log(allPokemon);
           
    //mostrar pokémons
    
    
})

console.log(example, data);


