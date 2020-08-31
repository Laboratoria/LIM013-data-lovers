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
          <p class="${arrayPokSelect[0].type[0]}">${arrayPokSelect[0].type.join(`</p>
          <p class="${arrayPokSelect[0].type[1]}">`)}</p>
        </section>
        <section class="pokemonBefore">
          <button class="pkmBefore">&lt</button>
        </section>
        <section class="pokemonSize">
          <p class="sectionTitle">Size:</p>
          <p class="pokemonHAndW">height : ${arrayPokSelect[0].size.height}</p>
          <p class="pokemonHAndW">weight : ${arrayPokSelect[0].size.weight}</p>
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
          ${extractTypePok(arrayPokSelect[0].weaknesses).join("")}
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

    
}

//funcion que devuelve elementos HTML con información de la evoluciones de los pokémon
const PokEvolution = (arrayPokSelect) => {
    const objEvolution = arrayPokSelect[0].evolution;
    const quantityProp = Object.keys(objEvolution).length;

    if (quantityProp==2) {
        
        if (Object.keys(objEvolution)[1]=="next-evolution") {
            const quantityNextEvo=Object.keys(objEvolution["next-evolution"][0]).length;
            const arrayNextEvolution=arrayPokSelect[0].evolution["next-evolution"][0];
            const nextPok1=arrayNextEvolution.name;
            const imgPokNext1=filterForName(data.pokemon,nextPok1)[0].img;

            if (quantityNextEvo==4) {
                const nextPok2=arrayNextEvolution["next-evolution"][0].name;
                const imgPokNext2=filterForName(data.pokemon,nextPok2)[0].img;
                return `
                <section class="currentPok">
                    <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
                    <p class="evoSectionPokNum"><span>#${arrayPokSelect[0].num} </span></p>
                    <p class="evoSectionPokName"><span>${arrayPokSelect[0].name}</span></p>
                </section>
                <section class="nextEvolution">
                    <section><img class="imgPokEv" src="${imgPokNext1}"></section>
                    <p class="evoSectionPokNum"><span>#${arrayNextEvolution.num} </span></p>
                    <p class="evoSectionPokName"><span>${nextPok1}</span></p>
                    <p class="evoSectionPokCandy">Candy cost: ${arrayNextEvolution["candy-cost"]}</p>
                </section>
                <section class="nextEvolution">
                    <section><img class="imgPokEv" src="${imgPokNext2}"></section>
                    <p class="evoSectionPokNum"><span>#${arrayNextEvolution["next-evolution"][0].num} </span></p>
                    <p class="evoSectionPokName"><span>${nextPok2}</span></p>
                    <p class="evoSectionPokCandy">Cost of candy: ${arrayNextEvolution["next-evolution"][0]["candy-cost"]}</p>
                </section>`
                
            } else {
                return `
                    <section class="currentPok">
                        <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
                        <p class="evoSectionPokNum"><span>#${arrayPokSelect[0].num} </span></p>
                        <p class="evoSectionPokName"><span>${arrayPokSelect[0].name}</span></p>
                    </section>
                    <section class="nextEvolution">
                        <section><img class="imgPokEv" src="${imgPokNext1}"></section>
                        <p class="evoSectionPokNum"><span>#${arrayNextEvolution.num} </span></p>
                        <p class="evoSectionPokName"><span>${nextPok1}</span></p>
                        <p class="evoSectionPokCandy">Cost of candy: ${arrayNextEvolution["candy-cost"]}</p>
                    </section>`
                
            }

        } else {
            const quantityPrevEvo=Object.keys(objEvolution["prev-evolution"][0]).length;
            const arrayPrevEvolution=arrayPokSelect[0].evolution["prev-evolution"][0];
            const prevPok2=arrayPrevEvolution.name;
            const imgPokPrev2=filterForName(data.pokemon,prevPok2)[0].img;
            if (quantityPrevEvo==4) {
                const prevPok1=arrayPrevEvolution["prev-evolution"][0].name;
                const imgPokPrev1=filterForName(data.pokemon,prevPok1)[0].img;
                return `
            <section class="prevEvolution">
                <section><img class="imgPokEv" src="${imgPokPrev1}"></section>
                <p class="evoSectionPokNum"><span>#${arrayPrevEvolution["prev-evolution"][0].num} </span></p>
                <p class="evoSectionPokName"><span>${prevPok1}</span></p>
                <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["prev-evolution"][0]["candy-cost"]}</p>
            </section>
            <section class="prevEvolution">
                <section><img class="imgPokEv" src="${imgPokPrev2}"></section>
                <p class="evoSectionPokNum"><span>#${arrayPrevEvolution.num} </span></p>
                <p class="evoSectionPokName"><span>${prevPok2}</span></p>
                <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["candy-cost"]}</p>
            </section>
            <section class="currentPok">
                <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
                <p class="evoSectionPokNum"><span>#${arrayPokSelect[0].num} </span></p>
                <p class="evoSectionPokName"><span>${arrayPokSelect[0].name}</span></p>
            </section>`
                
            } else {
                return `
            <section class="prevEvolution">
                <section><img class="imgPokEv" src="${imgPokPrev2}"></section>
                <p class="evoSectionPokNum"><span>#${arrayPrevEvolution.num} </span></p>
                <p class="evoSectionPokName"><span>${prevPok2}</span></p>
                <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["candy-cost"]}</p>
            </section>
            <section class="currentPok">
                <section class><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
                <p class="evoSectionPokNum"><span>#${arrayPokSelect[0].num} </span></p>
                <p class="evoSectionPokName"><span>${arrayPokSelect[0].name}</span></p>
            </section>`  
            }
            
        }
    } 

    else {
        const arrayNextEvolution=arrayPokSelect[0].evolution["next-evolution"][0];
        const arrayPrevEvolution=arrayPokSelect[0].evolution["prev-evolution"][0];
        const nextPok1=arrayNextEvolution.name;
        const prevPok1=arrayPrevEvolution.name;
        const imgPokNext=filterForName(data.pokemon,nextPok1)[0].img;
        const imgPokPrev=filterForName(data.pokemon,prevPok1)[0].img;
        return `
        <section class="preEvolution">
            <section class><img class="imgPokEv" src="${imgPokPrev}"></section>
            <p class="evoSectionPokNum"><span>#${arrayPrevEvolution.num}</span></p>
            <p class="evoSectionPokName"><span>${prevPok1}</span></p>
            <p class="evoSectionPokCandy">Candy cost: ${arrayPrevEvolution["candy-cost"]}</p>
        </section>
        <section class="currentPok">
            <section><img class="imgPokEv" src="${arrayPokSelect[0].img}"></section>
            <p class="evoSectionPokNum"><span>#${arrayPokSelect[0].num} </span></p>
            <p class="evoSectionPokName"><span>${arrayPokSelect[0].name}</span></p>
        </section>
        <section class="nextEvolution">
            <section><img class="imgPokEv" src="${imgPokNext}"></section>
            <p class="evoSectionPokNum"><span>#${arrayNextEvolution.num}</span></p>
            <p class="evoSectionPokName"><span>${nextPok1}</span></p>
            <p class="evoSectionPokCandy">Candy cost: ${arrayNextEvolution["candy-cost"]}</p>
        </section>`
    }
    
}

//función para extraer tipo.
const extractTypePok = (dataType) => {
    return dataType.map( (x)=>{
        return `<p class="${x}">${x}</p>`;
    })}



//console.log(example, data);


//const namePok= document.querySelector('.namePok').textContent;
//console.log(namePok);

