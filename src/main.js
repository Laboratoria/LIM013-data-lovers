import { filteredPokemon, orderPokemonUpward } from "./data.js"; //fijo
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
        // console.log(typePokemon);
    }
    //console.log(selectValue);
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

// -------------------Función ordenar pokemones alfabéticamente-------------------------

/*function orderPokemon(myArray) {
    myArray.sort(function(a,b){
          let x = a.name;
          let y = b.name;
          if (x < y){return -1;}
          if (x > y){return 1;}
          return 0;
      });
  
      console.log(myArray);
      return myArray;
  }*/

let orderList = document.getElementById("orderList");
orderList.addEventListener("change", () => {
    let orderListValue = orderList.value;
    if (orderListValue === 'upward') {
        orderPokemonUpward(allPokemon);
    }
    if (orderListValue === 'downward') {
        orderPokemonUpward(allPokemon).reverse();
    }

    function pokemonTemplateOrdered(poke) {
        return `
            <div class='poke'>
            <p class = 'poke-num'> ${poke.num}</p>
            <img class ='poke-img' src='${poke.img}'>
            <p class= 'poke-name'> ${poke.name}</p>    
            </div>
            `;
    }

    root.innerHTML = `
        <div class = 'pokedex'>${allPokemon.map(pokemonTemplateOrdered).join("")}</div>
        `;
})




//-----------Calculos de movimientos-------------


//----Obteniendo movimientos el quick-move-------

function pokemonQuickmove(obj) {
    return obj["quick-move"][0];
}
let quickMove = allPokemon.map(pokemonQuickmove);
console.log(quickMove);



//---Obteniendo movimientos special attack----
function pokAttack(obj) {
    return obj["special-attack"][0];
}
let attackMove = allPokemon.map(pokAttack);
console.table(attackMove);


//----Eps[energía/(move-duration-seg)]-------

function epsPokemon(movement) {
    return movement.energy / movement["move-duration-seg"];

}

let eps = quickMove.map(epsPokemon);
console.table(eps);



 //---Stab[base damage * 1.20] Si el tipo de ataque = al tipo de pokemon--------




 //---Dps [base damage/ move duration seg] Si es un ataque de tipo se considera el stab en lughar del base damage-------








//console.log(example, data);
