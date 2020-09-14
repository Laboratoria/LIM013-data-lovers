/* Nuestro argumento es como empieza esta funcion, es el example */
import {filters, sortByNameUpward, filterGeneration} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);
const infoPokemon = data.pokemon;
const divData= document.getElementById("dataCompleta")
const fullTypes= document.getElementById("fullTypes")
const orderPoke= document.getElementById("orderPoke")

function showPokemon(poke) {
    const pokeTypes = poke.type;
    console.log(pokeTypes);
    const elementPokemon = pokeTypes.map((type) => {
        return `<p>${type}</p>`
    }).join("")

  return `
      <div class='dataPoke' data-num='${poke.num}'>     
          <p class='poke-num'>#${poke.num}</p>
          <img class='poke-img' src='${poke.img}'>
          <p class='poke-name'>${poke.name.toUpperCase()}</p> 
          <button>INFO</button>
      </div>
      `
}
divData.innerHTML = `
    ${infoPokemon.map(showPokemon).join("")}
    `;
//filtrar por tipo
fullTypes.addEventListener("change", () => {
        let typePokemon = infoPokemon;
        let selectType = fullTypes.value;
        if (selectType !== "infoPokemon") {
            typePokemon = filters.filtroPorPokemon(infoPokemon, selectType);        
        }
        divData.innerHTML = `
        ${typePokemon
                .map(showPokemon)
                .join("")}
        `;   
    });

//Ordenar en orden alfabetico

orderPoke.addEventListener("change", () => {
    let selectType = fullTypes.value;
    let selectGeneration = generation.value;
    let pokeBox = infoPokemon; /* --inicio-- */
    if (selectType !== 'infoPokemon') {
        pokeBox = typePokemon(infoPokemon, selectType);
    }
    let pokeBoxOrder = pokeBox;
    if (selectGeneration !== 'InfoPokemon'){
        pokeBoxOrder = filters.filterGeneration(pokeboxOrder, selectGeneration);
    }

    // Ordenando pokemones por nombre

    let pokeListValue = pokeList.value;

    if (pokeListValue === 'upward') {
        sortByNameUpward(pokeBoxOrder)
    }
    if (pokeListValue === 'downward') {
        sortByNameUpward(pokeBoxOrder).reverse();
    }

    // mostrando pokemones ordenados

    divData.innerHTML = `
        ${pokeBoxOrder
            .map(showPokemon)
            .join("")}
    `;   
});

    // Filtro: Generación

    generation.addEventListener("change", () => {
        let pokeGeneration = infoPokemon; // inicio
        let selectGeneration = generation.value;
        let selectType = pokeList.value;
        console.log(selectValue);
        if(selectType !== 'infoPokemon') {
            pokeGeneration = filters.filtroPorPokemon(infoPokemon, selectType);
        }
        let pokeGenerationFilter = pokeGeneration;
        if (selectGeneration !== 'infoPokemon') {
            pokeGenerationFilter = filters.filterGeneration(pokeGeneration, selectGeneration);
        }
    // mostrando pokemones filtrados por generación
        divData.innerHTML = `
            ${pokeGeneration.map(infoPokemon).join("")}
        `;
    });