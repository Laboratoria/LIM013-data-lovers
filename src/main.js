/* Nuestro argumento es como empieza esta funcion, es el example */
import filters from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);
const infoPokemon = data.pokemon;
const divData= document.getElementById("dataCompleta")
const selecType= document.getElementById("fullTypes")
const ordenPoke= document.getElementById("ordenPoke")

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
//orden por tipo
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
ordenPoke.addEventListener("change",()=>{

    let selectOrden = ordenPoke.value;
    let pokedexFilter = infoPokemon; 
    ///-------------------- Ordenar--------------------------
    if (selectOrden === 'up') {
        filters.orderPokemonAz(pokedexFilter)
    }
    if (selectOrden === 'down') {
        filters.orderPokemonAz(pokedexFilter).reverse();
    }
    //----------------- Mostrar pokemones ordenados --------------
    divData.innerHTML = `
        ${infoPokemon.map(showPokemon).join("")}
        `;    
});



