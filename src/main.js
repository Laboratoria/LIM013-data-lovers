/* Nuestro argumento es como empieza esta funcion, es el example */
import filters from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);
const infoPokemon = data.pokemon;
const divData= document.getElementById("dataCompleta")
const fullTypes= document.getElementById("fullTypes")
const orderPoke= document.getElementById("orderPoke")
const selectRegion= document.getElementById("selectRegion")

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

//filtrar por orden alfabetico
orderPoke.addEventListener("change", ()=>{
    let selectOrden = orderPoke.value;
    let pokedexFilter = infoPokemon; 
    if (selectOrden === 'up') {
        filters.sortByNameUpward(pokedexFilter)
    }
    if (selectOrden === 'down') {
        filters.sortByNameUpward(pokedexFilter).reverse();
    }
    divData.innerHTML = `
        ${infoPokemon.map(showPokemon).join("")}
        `;    

});

//filtrar por region
selectRegion.addEventListener("change",()=>{
    let regionSelect= selectRegion.value;
    let infoRegion= infoPokemon;
    let selectTipo= fullTypes.value
    if(selectTipo !== 'infoPokemon'){
        regionSelect = filters.filterRegion(infoPokemon,selectTipo);
    }
    let regionPoke=regionSelect;
    if (regionSelect !== 'infoPokemon') {
        regionPoke= filters.filterRegion(infoPokemon, regionSelect);
    }
   
    divData.innerHTML = `
    ${regionPoke
        .map(showPokemon)
        .join("")}
    `;
});
