/* Nuestro argumento es como empieza esta funcion, es el example */
import metodos from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);
const arrPokemon = data.pokemon;
const divData= document.getElementById("dataCompleta");

 const cardCrear = (poke) => {
    return`
    <div class="dataPoke">
        <h2> #${poke.num}</h2> 
        <img src=${poke.img}> 
        <p> ${poke.name}</>
       <button> Info </button>
    </div>
    `;
  };
    divData.innerHTML= arrPokemon.map(cardCrear).join(" ");

    const type= document.querySelector("#Type");
    type.addEventListener("change", (e)=> {
    const result=e.target.value;
    const prueba=metodos.filtrarPokemon(arrPokemon,result);
        console.log(prueba);
    divData.innerHTML = cardCrear.join("");
        
    //cardCrear(metodos.filtrarPokemon(arrPokemon, result));
});
