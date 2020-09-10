/* Nuestro argumento es como empieza esta funcion, es el example */
import { filtrarTipo } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

const arrPokemon = data.pokemon;
const divData= document.getElementById("dataCompleta");




 const cardCrear = (poke) => {
    return`
    <div class="dataPoke">
        <img src="${poke.img}">
        <h2> #"${poke.num}"</h2>      
        <p><strong>Nombre:</strong> "${poke.name}"</>
       <button> Info </button>
    </div>
    `;
  };
  divData.innerHTML= arrPokemon.map(cardCrear).join(" ");

let llamadoTipo= document.querySelector("#Type");
llamadoTipo.addEventListener("change", function(e){
    const valorTipo= e.target.value;
    filtrarTipo(valorTipo, arrPokemon);
    console.log("Hola", valorTipo);
});

