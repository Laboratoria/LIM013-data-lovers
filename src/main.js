//import {filterDataPok} from './data.js'; Activar cuando sea necesario
import data from './data/pokemon/pokemon.js';

//Agregar clase para hacer visible los items de barra de navegación
const menudeploy = document.querySelector('.menu-deploy');
const menu=document.getElementById('listItem');
menudeploy.addEventListener('click',()=>{menu.classList.toggle('show');});

//Traer nodo para manipular el DOM
const pokemonDisplay = document.getElementById("pokemonDisplay");
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

//mostrar informationDisplay detallada de pokemon responsive
const btnMorePok=document.querySelectorAll('.morePok');
for (let index = 0; index < btnMorePok.length; index++) {
    
    btnMorePok[index].addEventListener('click',()=>{
        document.querySelector('.informationDisplay').style.display="block";
        const informationDisplay = document.querySelector('.informationDisplay');
        const pokemonArea = document.querySelector('.pokemonArea');
        showInformationPok(informationDisplay,index);
        resizeInformation(pokemonArea,pokemonDisplay,informationDisplay);
        window.onresize=()=>{
            resizeInformation(pokemonArea,pokemonDisplay,informationDisplay);
        }  
    });  
}

//funcion para redimensionar contenedor de pokemones y contenedor de información
const resizeInformation = (a,b,c)=> {
    if (a.clientWidth<=1000) { 
        b.style.width="0%";
        c.style.width="98%";
    } else {
        b.style.width="60%"; 
        c.style.width="40%";
    }   
}

//mostrando información extra de pokémon según pokémon selecionado
const showInformationPok = (display,indexSelect) => {
    //devolvera un array que cumpla la condición
    let arrayPokSelect =data.pokemon.filter((dataPokemon)=>{ 
        const namePokSelect= document.querySelectorAll('.namePok')[indexSelect].textContent;
        return dataPokemon.name==namePokSelect;
    })
    console.log(arrayPokSelect[0].evolution["next-evolution"][0].name);

    display.innerHTML=`
    <section class="close">
        <button class="closePokSelectButton"><i class="fa fa-close"></i></button>
    </section>
    <section class="nameAndNum">
        <p class="num">#${arrayPokSelect[0].num}</p>
        <p class="name">${arrayPokSelect[0].name}</p>
    </section>
    <section class="mainInfo">
      <section class="leftInfo">
        <section class="pokemonType">
          <p class="sectionTitle">Type:</p>
        </section>
        <section class="pokemonBefore">
          <button class="pkmBefore">&lt</button>
        </section>
        <section class="pokemonSize">
          <p class="sectionTitle">Size:</p>
        </section>
      </section>
      <section class="centerInfo">
        <img class="imgPokSelect" src="${arrayPokSelect[0].img}">
        </section>
      <section class="rightInfo">
        <section class="pokemonWeakness">
          <p class="sectionTitle">Weakness:</p>
        </section>
        <section class="pokemonAfter">
          <button class="pkmBefore">&gt</button>
        </section>
      </section>
    </section>
    <p class="aboutPok">${arrayPokSelect[0].about}</p>
    <section class="lastContainer">
      <section class="featuresPok">sección que contendra todas las estadisticas del pokémon</section>
      <section class="evolutionsPok">
        <p class="sectionTitle">Evolutions:</p>
        <section class="evolutionsPokImages">
          <img class="imgPokEv" src="${arrayPokSelect[0].img}">
          <p class="evoSign">&gt</p>
          <img class="imgPokEv" src="${arrayPokSelect[0].img}">
          <p class="evoSign">&gt</p>
          <img class="imgPokEv" src="${arrayPokSelect[0].img}">
        </section>
      </section>
    </section>`
    
}


//console.log(example, data);


//const namePok= document.querySelector('.namePok').textContent;
//console.log(namePok);


