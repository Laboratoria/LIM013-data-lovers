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
const orderCp= document.getElementById("orderCp") 
const selectRegion= document.getElementById("selectRegion")
const container= document.getElementById("container")

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
          <p class='poke-name'><strong>${poke.name.toUpperCase()}</strong></p>
          <p class= 'poke-type'>Type: ${poke.type}</p>
          <p class= 'poke-stats["max-cp]'>CP: ${poke.stats["max-cp"]}</p>
          <p class= 'poke-stats["max-hp]'>HP: ${poke.stats["max-hp"]}</p>
      </div>
      `
}
divData.innerHTML = `
    ${infoPokemon.map(showPokemon).join("")}
    `;

// Modal 


// Filtro por tipo

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

// Filtro por orden alfabético

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

// Filtro por CP
orderCp.addEventListener("change", () =>{
    let selectCp = orderCp.value;
    let pokedexCp = infoPokemon;
    const pokeCpSorted = filters.sortByCp (infoPokemon, selectCp);
    console.log(pokeCpSorted);
    divData.innerHTML = `
    ${pokeCpSorted.map(showPokemon).join("")}`   
});

// Filtro por Región

selectRegion.addEventListener("change", () => {
    let filterByRegion = selectRegion.value;
    let pokedexRegion = infoPokemon;
    let selectTipo = fullTypes.value;

    if (selectTipo !== 'infoPokemon') {
        pokedexRegion = filters.filterRegion(infoPokemon, selectTipo);
    }

    let regionPokemon = pokedexRegion;
    if (filterByRegion !== 'infoPokemon') {
        regionPokemon = filters.filterRegion(infoPokemon, filterByRegion);
    }
    divData.innerHTML = `
        ${regionPokemon.map(showPokemon).join("")} 
    `
});
// // Ocultar divs
// const pokeBattle = document.querySelector("a[href='#']");
// pokeBattle.addEventListener("click", ()=>{
//     divData.classList.add('hide');
//     container.classList.add('hide'); 
        
// }); 

// Buscar por nombre

const selectName = document.getElementById('selectName');
    selectName.addEventListener('keyup', () => {
        let selectNameV = selectName.value;
        const searchName = filters.filterSearch(infoPokemon,selectNameV); 
        divData.innerHTML = `
        ${searchName.map(showPokemon).join("")}
        `; 
 });