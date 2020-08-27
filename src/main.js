//import {example} from './data.js'; Activar cuando sea necesario
import data from './data/pokemon/pokemon.js';

//Agregar clase para hacer visible los items de barra de navegación
const menudeploy = document.querySelector('.menu-deploy');
const menu=document.getElementById('listItem');
menudeploy.addEventListener('click',()=>{menu.classList.toggle('show');});

//accordion


//Traer nodo para manipular el DOM
let pokemonDisplay = document.getElementById("pokemonDisplay");
//crear dinamicamente elemntos section y asignarle imagen
//map()=método para recorrer un objeto sin modificar el objeto original
pokemonDisplay.innerHTML=`${data.pokemon.map((dataPokemon)=>{
    return `<section class="picture">
    <img class="img" src="${dataPokemon.img}">
    <section class="essentialInformation">
    <h2 class="numPok">#${dataPokemon.num}</h2>
    <h3 class="namePok">${dataPokemon.name}</h3>
    <section class="typePok"> 
    <p class="${dataPokemon.type[0]}">${dataPokemon.type.join(`</p>
    <p class="${dataPokemon.type[1]}">`)}</p>
    </section>
    <button class="morePok"><span>Read more</span></button>
    </section>
    </section>`;
}).join('')}`;

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

//mostrar pantalla de información detallada de pokemon responsive
const btnMorePok=document.querySelectorAll('.morePok');
for (let index = 0; index < btnMorePok.length; index++) {
    btnMorePok[index].addEventListener('click',()=>{
        document.querySelector('.informationDisplay').style.display="block";
        const informationDisplay = document.querySelector('.informationDisplay');
        const pokemonArea = document.querySelector('.pokemonArea');
        resizeInformation(pokemonArea,pokemonDisplay,informationDisplay)
        window.onresize=()=>{
            resizeInformation(pokemonArea,pokemonDisplay,informationDisplay)
        }  
    });  
}

//funcion para redimenzionar contenedor de pokemones y contenedor de información
function resizeInformation(a,b,c) {
    if (a.clientWidth<=1000) { 
        b.style.width="0%";
        c.style.width="98%"
    } else {
        b.style.width="60%"   
        c.style.width="40%";
    }   
}

//console.log(example, data);