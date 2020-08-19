import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//Traer nodo para manipular el DOM
let containerMain = document.getElementById("containerMain");

//crear dinamicamente elemntos section y asignarle imagen
//map()=método para recorrer un objeto sin modificar el objeto original
containerMain.innerHTML=`<section class="containerPicture">
${data.pokemon.map((picture)=>{
    return `<section class="picture">
    <img class="img" src="${picture.img}">
    </section>` ;
}).join('')}
</section>`

console.log(example, data);


console.log(container);

