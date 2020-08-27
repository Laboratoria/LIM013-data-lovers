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
// ------------------------Filtrar por tipo------------------------
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
      
    // Mostrar Pokemones filtrados
    root.innerHTML = `
    <div class = 'pokedex'>${typePokemon
            .map(pokemonTemplate)
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
    //Mostrar pokemones ordenados
    root.innerHTML = `
        <div class = 'pokedex'>${allPokemon.map(pokemonTemplate).join("")}</div>
        `;
})


//---------------------------Calculos de movimientos------------------------


//----------------------Obteniendo movimientos el quick-move--------
const pokemonQuickmove = (obj) =>obj["quick-move"];

let allPokemonQuickMoves = allPokemon.map(pokemonQuickmove);
//console.log(allPokemonQuickMoves);

//---Obteniendo movimientos special attack----
const pokAttack = (obj) =>obj ["special-attack"];

let allPokemonAttackMoves = allPokemon.map(pokAttack);
//console.table(attackMove);

//----Eps[energía/(move-duration-seg)]------- 

function epsPokemon(movement) {
    return movement.energy / movement["move-duration-seg"];
}

let epsQuickMove = allPokemonQuickMoves.map((quickMovesArray)=>{
    return quickMovesArray.map(epsPokemon);
});

let epsAttackMoves= allPokemonAttackMoves.map((attackMovesArray)=>{
    return attackMovesArray.map(epsPokemon);
})

console.log(epsQuickMove);
console.log(epsAttackMoves);

 //---Stab[base damage * 1.20] Si el tipo de ataque = al tipo de pokemon--------


 //---Dps [base damage/ move duration seg] Si es un ataque de tipo se considera el stab en lughar del base damage-------




//console.log(example, data);
