//import {filterDataPok} from './data.js'; Activar cuando sea necesario
import data from './data/pokemon/pokemon.js';
import {filterForNumber} from './data.js';
import {extractImgPok} from './data.js';


//Agregar clase para hacer visible los items de barra de navegación
const menudeploy = document.querySelector('.menu-deploy');
const menu=document.getElementById('listItem');
menudeploy.addEventListener('click',()=>{menu.classList.toggle('show');});


//**********Accordion - toggle**********************
document.querySelectorAll(".accordionButton").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("accordionButtonActive");
    })
})

//Traer nodo para manipular el DOM
const pokemonDisplay = document.getElementById("pokemonDisplay");
//crear dinamicamente elemntos section y asignarle imagen
//map()=método para recorrer un objeto sin modificar el objeto original
pokemonDisplay.innerHTML=`${data.pokemon.map((dataPokemon)=>{
    return `<section class="picture">
    <img class="img" src="${dataPokemon.img}">
    <section class="essentialInformation">
    <h2 class="numPokH2">
    <span>#</span><span class="numPok">${dataPokemon.num}</span>
    </h2>
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
const informationDisplay = document.querySelector('.informationDisplay');
const pokemonArea = document.querySelector('.pokemonArea');
for (let index = 0; index < btnMorePok.length; index++) {

    btnMorePok[index].addEventListener('click',()=>{
        document.querySelector('.informationDisplay').style.display="block";
        
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
        c.style.width="100%";
    } else {
        b.style.width="60%"; 
        c.style.width="40%";
    }   
}

//mostrando información extra de pokémon según pokémon selecionado
const showInformationPok = (display,indexSelect) => {
    //traer nombre de pokémon selecionado para buscar informmacíón extra
   const numPokSelect= document.querySelectorAll('.numPok')[indexSelect].textContent;
   const arrayPokSelect=filterForNumber(data.pokemon,numPokSelect);
   const pokEvolutionHtml=pokEvolution(arrayPokSelect);
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
          <section class="typePok2">
            <p class="${arrayPokSelect[0].type[0]}">${arrayPokSelect[0].type.join(`</p>
            <p class="${arrayPokSelect[0].type[1]}">`)}</p>
          </section>
        </section>
        <section class="pokemonBefore">
          <button class="pkmBefore">&lt</button>
        </section>
        <section class="pokemonSize">
          <p class="sectionTitle">Size:</p>
          <p class="pokemonHAndW">Height : </p>
          <p class="pokemonHAndWResult">${arrayPokSelect[0].size.height}</p>
          <p class="pokemonHAndW">Weight : </p>
          <p class="pokemonHAndWResult">${arrayPokSelect[0].size.weight}</p>
        </section>        
      </section>
      <section class="centerInfo">
        <section class="circleImg">
          <img class="imgPokSelect" src="${arrayPokSelect[0].img}">
        </section>
      </section>
      <section class="rightInfo">                 
        <section class="pokemonResistant">
          <p class="sectionTitle">Resistant:</p>
          ${extractTypePok(arrayPokSelect[0].resistant).join("")}
        </section>        
        <section class="pokemonAfter">
          <button class="pkmBefore">&gt</button>
        </section>
        <section class="pokemonWeaknesses">
          <p class="sectionTitle">Weaknesses:</p>
          <section class="typePok3">
            ${extractTypePok(arrayPokSelect[0].weaknesses).join("")} 
          </section>     
        </section>
      </section>
    </section>
    </section>
    <section class="midContainer">
      <section class="featuresPok">
        <p>Stats : <p>
        <table class="tableStats">
        <tr><td>Base attack</td><td>${arrayPokSelect[0].stats["base-attack"]}</td></tr>
        <tr><td>Base defense</td><td>${arrayPokSelect[0].stats["base-defense"]}</td></tr>
        <tr><td>Base stamina</td><td>${arrayPokSelect[0].stats["base-stamina"]}</td></tr>
        <tr><td>Max cp</td><td>${arrayPokSelect[0].stats["max-cp"]}</td></tr>
        <tr><td>Max hp</td><td>${arrayPokSelect[0].stats["max-hp"]}</td></tr>
        </table>
      </section>
      <section class="aboutPokContainer">
      <p class="titleaboutPok">About : <P>
      <section class="sectionAboutPok">
      <p class="aboutPok">${arrayPokSelect[0].about}</p>
      </section>
      </section>
    </section>
    <section class="lastContainer">
      <p class="sectionTitle">Evolutions:</p>
      <section class="evolutionsPokImages">
        ${pokEvolutionHtml}
      </section>
    </section>`

    //ocultar contenido de la sección de información
    document.querySelector('.closePokSelectButton').addEventListener('click',()=>{
    display.style.display="none";
    pokemonDisplay.style.width="100%" });
}


//funcion que devuelve elementos HTML con información de la evoluciones de los pokémon

const pokEvolution = (arrayPokSelect) => {
const quantityPropEv = Object.keys(arrayPokSelect[0].evolution).length;
const itemEvolution =arrayPokSelect[0].evolution
if (quantityPropEv===2 && Object.keys(itemEvolution)[1]==="next-evolution") {
    const arrayNextEvolution =arrayPokSelect[0].evolution["next-evolution"][0];
    const imgPokNext1 = extractImgPok(data.pokemon,arrayNextEvolution.num);
    const quantityNextEvo=Object.keys(arrayPokSelect[0].evolution["next-evolution"][0]).length;
    const noPropPermit = Object.keys(arrayPokSelect[0].evolution["next-evolution"][0])[3];
    
    if(quantityNextEvo===4 && noPropPermit!=="evolution-item"){
        const imgPokNext2 = extractImgPok(data.pokemon,arrayNextEvolution["next-evolution"][0].num);
        return `
        <section class="currentPok">
            <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
            <p class="evoSectionPokNum">#${arrayPokSelect[0].num}</p>
            <p class="evoSectionPokName">${arrayPokSelect[0].name}</p>
        </section>
        <section class="nextEvolution">
            <section><img class="imgPokEv" src="${imgPokNext1}"></section>
            <p class="evoSectionPokNum">#${arrayNextEvolution.num}</p>
            <p class="evoSectionPokName">${arrayNextEvolution.name}</p>
            <p class="evoSectionPokCandy">Candy cost: ${arrayNextEvolution["candy-cost"]}</p>
        </section>
        <section class="nextEvolution">
            <section><img class="imgPokEv" src="${imgPokNext2}"></section>
            <p class="evoSectionPokNum">#${arrayNextEvolution["next-evolution"][0].num}</p>
            <p class="evoSectionPokName">${arrayNextEvolution["next-evolution"][0].name}</p>
            <p class="evoSectionPokCandy">Cost of candy: ${arrayNextEvolution["next-evolution"][0]["candy-cost"]}</p>
        </section>`
    }
    else if (quantityNextEvo===3 || noPropPermit==="evolution-item"){
        const arrayNextEvolution =arrayPokSelect[0].evolution["next-evolution"][0];
        const imgPokNext1 = extractImgPok(data.pokemon,arrayNextEvolution.num);
        return `
        <section class="currentPok">
            <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
            <p class="evoSectionPokNum">#${arrayPokSelect[0].num}</p>
            <p class="evoSectionPokName">${arrayPokSelect[0].name}</p>
        </section>
        <section class="nextEvolution">
            <section><img class="imgPokEv" src="${imgPokNext1}"></section>
            <p class="evoSectionPokNum">#${arrayNextEvolution.num}</p>
            <p class="evoSectionPokName">${arrayNextEvolution.name}</p>
            <p class="evoSectionPokCandy">Candy cost: ${arrayNextEvolution["candy-cost"]}</p>
        </section>`
    }
}

else if (quantityPropEv===2 && Object.keys(itemEvolution)[1]==="prev-evolution"){
    const arrayPrevEvolution =arrayPokSelect[0].evolution["prev-evolution"][0];
    const imgPokPrev1 = extractImgPok(data.pokemon,arrayPrevEvolution.num);
    const quantityPrevEvo=Object.keys(arrayPokSelect[0].evolution["prev-evolution"][0]).length;
    const noPropPermit = Object.keys(arrayPokSelect[0].evolution["prev-evolution"][0])[3]
    if(quantityPrevEvo==4 && noPropPermit!=="evolution-item"){
        const imgPokPrev2 = extractImgPok(data.pokemon,arrayPrevEvolution["prev-evolution"][0].num);
        return `
        <section class="prevEvolution">
            <section><img class="imgPokEv" src="${imgPokPrev2}"></section>
            <p class="evoSectionPokNum">#${arrayPrevEvolution["prev-evolution"][0].num}</p>
            <p class="evoSectionPokName">${arrayPrevEvolution["prev-evolution"][0].name}</p>
            <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["prev-evolution"][0]["candy-cost"]}</p>
        </section>
        <section class="prevEvolution">
            <section><img class="imgPokEv" src="${imgPokPrev1}"></section>
            <p class="evoSectionPokNum">#${arrayPrevEvolution.num}</p>
            <p class="evoSectionPokName">${arrayPrevEvolution.name}</p>
            <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["candy-cost"]}</p>
        </section>
        <section class="currentPok">
            <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
            <p class="evoSectionPokNum">#${arrayPokSelect[0].num}</p>
            <p class="evoSectionPokName">${arrayPokSelect[0].name}</p>
        </section>`
    }
    else if(quantityPrevEvo==3 || noPropPermit==="evolution-item"){
        return `
        <section class="prevEvolution">
            <section><img class="imgPokEv" src="${imgPokPrev1}"></section>
            <p class="evoSectionPokNum">#${arrayPrevEvolution.num}</p>
            <p class="evoSectionPokName">${arrayPrevEvolution.name}</p>
            <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["candy-cost"]}</p>
        </section>
        <section class="currentPok">
            <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
            <p class="evoSectionPokNum"><#${arrayPokSelect[0].num}</p>
            <p class="evoSectionPokName">${arrayPokSelect[0].name}</p>
        </section>`
    }
}

else if (quantityPropEv==3){
    const arrayNextEvolution =arrayPokSelect[0].evolution["next-evolution"][0];
    const imgPokNext1 = extractImgPok(data.pokemon,arrayNextEvolution.num);
    const arrayPrevEvolution =arrayPokSelect[0].evolution["prev-evolution"][0];
    const imgPokPrev1 = extractImgPok(data.pokemon,arrayPrevEvolution.num);
    return `
    <section class="preEvolution">
        <section class><img class="imgPokEv" src="${imgPokPrev1}"></section>
        <p class="evoSectionPokNum">#${arrayPrevEvolution.num}</p>
        <p class="evoSectionPokName">${arrayPrevEvolution.name}</p>
        <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["candy-cost"]}</p>
    </section>
    <section class="currentPok">
        <section><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
        <p class="evoSectionPokNum">#${arrayPokSelect[0].num}</p>
        <p class="evoSectionPokName">${arrayPokSelect[0].name}</p>
    </section>
    <section class="nextEvolution">
        <section><img class="imgPokEv" src="${imgPokNext1}"></section>
        <p class="evoSectionPokNum">#${arrayNextEvolution.num}</p>
        <p class="evoSectionPokName">${arrayNextEvolution.name}</p>
        <p class="evoSectionPokCandy">Candy cost: ${arrayNextEvolution["candy-cost"]}</p>
    </section>`
}

else {
    return`<section class="preEvolution">
        <p class="noEvolution">¡There are no evolutions for this pokémon</p>
    </section>`
    }
}

//función para extraer tipo.
const extractTypePok = (dataType) => {
    return dataType.map( (x)=>{
        return `<p class="${x}">${x}</p>`;
    })}


//**************Egda****************

// sort alphabetically in ascending or descending order
//funcion para jalar de la data los nombres y ordenarlos alfabeticamente en consola:
/*const pokemonName = data.pokemon.map((dataPokemon) => {
    return `${dataPokemon.name}`;
});

console.log(pokemonName);
console.log(pokemonName.sort());*/

//función para ordenar alfabeticamente con acción de botón:
const alphaAscButton = document.getElementById("alphaAsc");

function onClickAlphaAscButton() {
    const pokemonDisplay = document.getElementById("pokemonDisplay");
    
    data.pokemon.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });

    pokemonDisplay.innerHTML=`${data.pokemon.map((dataPokemon)=>{
        return `<section class="picture">
        <img class="img" src="${dataPokemon.img}">
        <section class="essentialInformation">
        <h2 class="numPokH2">
        <span>#</span><span class="numPok">${dataPokemon.num}</span>
        </h2>
        <h3 class="namePok">${dataPokemon.name}</h3>
        <section class="typePok"> 
        <p class="${dataPokemon.type[0]}">${dataPokemon.type.join(`</p>
        <p class="${dataPokemon.type[1]}">`)}</p>
        </section>
        <button class="morePok"><span>Read more</span></button>
        </section>
        </section>`;
    }).join('')}`;

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
 
}

alphaAscButton.addEventListener("click", onClickAlphaAscButton);
























































































//**************Consuelo*****************************










