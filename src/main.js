import { filteredPokemon } from "./data.js"; //fijo
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js"; //fijo
// import data from './data/rickandmorty/rickandmorty.js';

let allPokemon = data.pokemon;

//mostrar pokémons
function pokemonTemplate(poke) {
    return `
        <div class='poke'>
        <p class = 'poke-num'> ${poke.num}</p>
        <img class ='poke-img' src='${poke.img}'>
        <p class= 'poke-name'> ${poke.name}</p>    
        </div>
        `;
}

let root = document.getElementById("root");
root.innerHTML = `
    <div class = 'pokedex'>${allPokemon.map(pokemonTemplate).join("")}</div>
    `;
// Seleccionar por tipo
let list = document.getElementById("list");
list.addEventListener("change", () => {
    let typePokemon = allPokemon;
    let selectValue = list.value;
    // filtra si la seleccion es diferente a all pokemon
    if (selectValue !== "allPokemon") {
        typePokemon = filteredPokemon(allPokemon, selectValue); //Filtra los pokemones
        console.log(typePokemon);
    }
    console.log(selectValue);
    // Crea estructura de all pokemon o pokemon filtrado
    function pokemonTemplateFilter(type) {
        return `
        <div class='poke'>
        <p class = 'poke-num'> ${type.num}</p>
        <img class='poke-img' src='${type.img}'>
        <p class= 'poke-name'> ${type.name}<p>    
        </div>
        `;
    }
    // Mostrar Pokemones filtrados
    root.innerHTML = `
    <div class = 'pokedex'>${typePokemon
            .map(pokemonTemplateFilter)
            .join("")}</div>
    `;
});
//console.log(example, data);

