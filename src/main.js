//import {example} from './data.js'; Activar cuando sea necesario
import data from './data/pokemon/pokemon.js';

//Agregar clase para hacer visible los items de barra de navegación
const menudeploy = document.querySelector('.menu-deploy');
const menu=document.getElementById('listItem');
menudeploy.addEventListener('click',()=>{menu.classList.toggle('show');});

//accordion
document.querySelectorAll(".typeButton").forEach(button => {
    button.addEventListener("click", () => {
        const typeContainerOpenSection = button.addElementSibling;

        button.classList.toogle("typeButtonActive");

        if (button.classList.contains("typeButtonActive")) {
            typeContainerOpenSection.style.maxHeigth = typeContainerOpenSection.scrollHeight + "px";
        } else {
            typeContainerOpenSection.style.maxHeigth = 0;
        }
    })
})

//Traer nodo para manipular el DOM
let pokemonDisplay = document.getElementById("pokemonDisplay");
//crear dinamicamente elemntos section y asignarle imagen
//map()=método para recorrer un objeto sin modificar el objeto original
pokemonDisplay.innerHTML=`${data.pokemon.map((dataPokemon)=>{
    return `<section class="picture">
    <img class="img" src="${dataPokemon.img}">
    <section class="essentialInformation">
    <p class="numPok">${dataPokemon.num}</p>
    <p class="namePok">${dataPokemon.name}</p> 
    <p class="${dataPokemon.type[0]}">${dataPokemon.type.join(`</p>
    <p class="${dataPokemon.type[1]}">`)}</p>
    <button class="morePok">Ver más</button>
    </section>
    </section>`;
}).join('')}`;

//función para "capitalizar" nombre

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

//mostrar pantalla de información detallada de pokemon
const btnMorePok=document.querySelectorAll('.morePok');
for (let index = 0; index < btnMorePok.length; index++) {
    btnMorePok[index].addEventListener('click',()=>{
        document.querySelector('.informationDisplay').style.display="block";
        pokemonDisplay.style.width="60%"   
        document.querySelector('.informationDisplay').style.width="40%";
        
    });  
}
console.log(btnMorePok.length);
//console.log(example, data);
