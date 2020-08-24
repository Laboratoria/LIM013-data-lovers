//import {example} from './data.js'; Activar cuando sea necesario
import data from './data/pokemon/pokemon.js';
//Agregar clase para hacer visible los items de barra de navegación
const menudeploy = document.querySelector('.menu-deploy');
const menu=document.getElementById('listItem');
menudeploy.addEventListener('click',()=>{menu.classList.toggle('show');});

//Traer nodo para manipular el DOM
let containerMain = document.getElementById("containerMain");
//crear dinamicamente elemntos section y asignarle imagen
//map()=método para recorrer un objeto sin modificar el objeto original
pokemonDisplay.innerHTML=`<section class="containerPicture">
${data.pokemon.map((picture)=>{
    return `<section class="picture">
    <img class="img" src="${picture.img}">
    </section>`;
}).join('')}
</section>`

//console.log(example, data);
//console.log(container);

