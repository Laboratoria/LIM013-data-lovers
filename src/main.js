import { example } from './data.js'; //fijo
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';  //fijo
// import data from './data/rickandmorty/rickandmorty.js';

let allPokemon= data.pokemon;

//mostrar pokémons
    
   function pokemonTemplate(poke){
        return`
        <div class='poke'>
        <img class='poke-img' src='${poke.img}'>
        <p class= 'poke-name'> ${poke.name}<p>    
        </div>
        `
    }
    
    let root = document.getElementById('root');
    root.innerHTML = `
    <h3 class= 'rootTitle'>Pokemons (${allPokemon.length} results) <h3>
    <div class = 'pokedex'>${allPokemon.map(pokemonTemplate).join('')}</div>
    `
    


    /*let root = document.getElementById('root');
    root.innerHTML = `
    <h2 class= 'rootTitle'>Pokemons (${allPokemon.length}results) <h2>
    `
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML =`
    ${allPokemon.map(pokemonTemplate).join('')}
    `*/
     // Seleccionar por tipo

let list= document.getElementById('list');
list.addEventListener('change',()=> {
    let typePokemon = allPokemon;
    let selectValue = list.value;
    // Para ver si arreglo incluye valor seleccionado
    function pokemonFilter(poke){ 
       return poke.type.includes(selectValue) 
    }
    // filtra si la seleccion es diferente a all pokemon
    if (selectValue !== "allPokemon"){
       typePokemon = allPokemon.filter(pokemonFilter);  // Filtra los pokemones
        console.log(typePokemon);
    }
    console.log(selectValue);
 

   // Crea estructura de all pokemon o pokemon filtrado      
      function pokemonTemplateFilter(type){
        return`
        <div class='poke'>
        <img class='poke-img' src='${type.img}'>
        <p class= 'poke-name'> ${type.name}<p>    
        </div>
        `
    }
   // Mostrar Pokemones filtrados
    root.innerHTML = `
    <h3 class = 'rootTitle'>Pokemons (${typePokemon.length} results) <h3>
    <div class = 'pokedex'>${typePokemon.map(pokemonTemplateFilter).join('')}</div>
    `
})

console.log(example, data);
