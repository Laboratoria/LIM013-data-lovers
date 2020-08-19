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
    <h2 class= 'rootTitle'>Pokemons (${allPokemon.length}results) <h2>
    ${allPokemon.map(pokemonTemplate).join('')}
    `
   
 // Seleccionar por tipo

let list= document.getElementById('list');
list.addEventListener('change',(event)=> {
    let selectValue = list.value;
    console.log(selectValue);
 
  // Para ver si arreglo incluye valor seleccionado
        function pokemonFilter(poke){
        return poke.type.includes(selectValue) 
    }
   // Filtra los pokemones 

    let typePokemon = allPokemon.filter(pokemonFilter);
    console.log(typePokemon);

   // Crea estructura para pokemon filtrado      
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
    <h2 class= 'rootTitle'>Pokemons (${typePokemon.length}results) <h2>
    ${typePokemon.map(pokemonTemplateFilter).join('')}
    `
    

})

console.log(example, data);


