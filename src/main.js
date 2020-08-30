//import {filterDataPok} from './data.js'; Activar cuando sea necesario
import data from './data/pokemon/pokemon.js';
import {filterForName} from './data.js';


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
        resizeInformation(pokemonArea,pokemonDisplay,informationDisplay);
        showInformationPok(informationDisplay,index);
        
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
    //traer nombre de pokémon selecionado para buscar informmacíón extra
   const namePokSelect= document.querySelectorAll('.namePok')[indexSelect].textContent;
   const arrayPokSelect=filterForName(data.pokemon,namePokSelect);
   const pokEvolutionHtml=PokEvolution(arrayPokSelect);
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
          ${pokEvolutionHtml}
        </section>`
}

//funcion que devuelve elementos HTML con información de la evoluciones de los pokémon
const PokEvolution = (arrayPokSelect) => {
    const objEvolution = arrayPokSelect[0].evolution;
    const quantityProp = Object.keys(objEvolution).length;
    if (quantityProp==2) {

        if (Object.keys(objEvolution)[1]=="next-evolution") {
            const arrayNextEvolution=arrayPokSelect[0].evolution["next-evolution"][0];
            const nextPok1=arrayNextEvolution.name;
            const nextPok2=arrayNextEvolution["next-evolution"][0].name;
            const imgPokNext1=filterForName(data.pokemon,nextPok1)[0].img;
            const imgPokNext2=filterForName(data.pokemon,nextPok2)[0].img;
            return `
            <section class="currentPok">
                <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
                <p><span>${arrayPokSelect[0].name} </span><span>${arrayPokSelect[0].num}</span></p>
            </section>
            <section class="nextEvolution">
                <section><img class="imgPokEv" src="${imgPokNext1}"></section>
                <p><span>${nextPok1} </span><span>${arrayNextEvolution.num}</span></p>
                <p>Cost of candy: ${arrayNextEvolution["candy-cost"]}</p>
            </section>
            <section class="nextEvolution">
                <section><img class="imgPokEv" src="${imgPokNext2}"></section>
                <p><span>${nextPok2} </span><span>${arrayNextEvolution["next-evolution"][0].num}</span></p>
                <p>Cost of candy: ${arrayNextEvolution["next-evolution"][0]["candy-cost"]}</p>
            </section>`

        } else {
            const arrayPrevEvolution=arrayPokSelect[0].evolution["prev-evolution"][0];
            const prevPok1=arrayPrevEvolution.name;
            const prevPok2=arrayPokSelect[0].evolution["prev-evolution"][0]["prev-evolution"][0].name;
            const imgPokPrev1=filterForName(data.pokemon,prevPok1)[0].img;
            const imgPokPrev2=filterForName(data.pokemon,prevPok2)[0].img;
            return `
            <section class="prevEvolution">
                <section><img class="imgPokEv" src="${imgPokPrev1}"></section>
                <p><span>${prevPok1} </span><span>${arrayPrevEvolution.num}</span></p>
                <p>Cost of candy: ${arrayPrevEvolution["candy-cost"]}</p>
            </section>
            <section class="prevEvolution">
                <section><img class="imgPokEv" src="${imgPokPrev2}"></section>
                <p><span>${prevPok2} </span><span>${arrayPrevEvolution["prev-evolution"][0].num}</span></p>
                <p>Cost of candy: ${arrayPrevEvolution["prev-evolution"][0]["candy-cost"]}</p>
            </section>
            <section class="currentPok">
                <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
                <p><span>${arrayPokSelect[0].name} </span><span>${arrayPokSelect[0].num}</span></p>
            </section>`
        }
    } 

    else if(quantityProp==3){
        const arrayNextEvolution=arrayPokSelect[0].evolution["next-evolution"][0];
        const arrayPrevEvolution=arrayPokSelect[0].evolution["prev-evolution"][0];
        const nextPok1=arrayNextEvolution.name;
        const prevPok1=arrayPrevEvolution.name;
        const imgPokNext=filterForName(data.pokemon,nextPok1)[0].img;
        const imgPokPrev=filterForName(data.pokemon,prevPok1)[0].img;
        return `
        <section class="preEvolution">
            <section class><img class="imgPokEv" src="${imgPokPrev}"></section>
            <p><span>${prevPok1}</span><span>${arrayPrevEvolution.num}</span></p>
            <p>Cost of candy: ${arrayPrevEvolution["candy-cost"]}</p>
        </section>
        <section class="currentPok">
            <section><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
            <p><span>${arrayPokSelect[0].name} </span><span>${arrayPokSelect[0].num}</span></p>
        </section>
        <section class="nextEvolution">
            <section><img class="imgPokEv" src="${imgPokNext}"></section>
            <p><span>${nextPok1}</span><span>${arrayNextEvolution.num}</span></p>
            <p>Cost of candy: ${arrayNextEvolution["candy-cost"]}</p>
        </section>`
    }
    
}


//console.log(example, data);


//const namePok= document.querySelector('.namePok').textContent;
//console.log(namePok);

