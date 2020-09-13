/* Nuestro argumento es como empieza esta funcion, es el example */
import filters from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);
const infoPokemon = data.pokemon;
const divData= document.getElementById("dataCompleta")

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
          <div class='poke-type'>${elementPokemon}</div>
      </div>
      `
}
divData.innerHTML = `
    ${infoPokemon.map(showPokemon).join("")}
    `;

const callingType = document.querySelector("#Type");
    callingType.addEventListener("change", (e) => {
        const valueType = e.target.value;
        if (valueType !== infoPokemon) {
            const showPokeTypes = filters.filtrarPokemon(infoPokemon,valueType)
            console.log(showPokeTypes);
            }
            divData.innerHTML = `
            ${infoPokemon.map(showPokemon).join("")}
            `;
    }
    
    );


        