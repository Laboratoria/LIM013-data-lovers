//import {example} from './data.js'; Activar cuando sea necesario
import data from './data/pokemon/pokemon.js';

//Agregar clase para hacer visible los items de barra de navegación
const menudeploy = document.querySelector('.menu-deploy');
const menu=document.getElementById('listItem');
menudeploy.addEventListener('click',()=>{menu.classList.toggle('show');});

//Traer nodo para manipular el DOM
let pokemonDisplay = document.getElementById("pokemonDisplay");
//crear dinamicamente elemntos section y asignarle imagen
//map()=método para recorrer un objeto sin modificar el objeto original
pokemonDisplay.innerHTML=`<section class="containerPicture">
${data.pokemon.map((dataPokemon)=>{
    return `<section class="picture">
    <img class="img" src="${dataPokemon.img}">
    <section class="essentialInformation">
    <p class="numPok">${dataPokemon.num}</p>
    <p class="namePok">${dataPokemon.name}</p> 
    <p class="${dataPokemon.type[0]}">${dataPokemon.type.join(`</p><p class="${dataPokemon.type[1]}">`)}</p>
    <button class="morePok">Ver más</button>
    </section>
    </section>`;
}).join('')}
</section>`;


//funcion para agregar caracteristicas principales al pasar el mouse por el elemento
const showEssential = document.querySelectorAll('.picture');
for (let index = 0; index < showEssential.length; index++) {
    showEssential[index].addEventListener('mouseover',()=>{
        document.querySelectorAll('.img')[index].style.display="none";
        document.querySelectorAll('.essentialInformation')[index].style.display="block";
    }); 
    showEssential[index].addEventListener('mouseout',()=>{
        document.querySelectorAll('.img')[index].style.display="block";
        document.querySelectorAll('.essentialInformation')[index].style.display="none";
    });
}

//console.log(example, data);
//console.log(container);

