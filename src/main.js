import { filterData, searchData, sortData,candyCalculate } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemonSection = document.getElementById("pokemon");
const aboutOption = document.getElementById("aboutOption");
const pokemonOption = document.getElementById("pokemonOption");
const pokemonGo = document.getElementById("pokemonGo");
const aboutSection = document.getElementById("about");
const searchInput=document.getElementById('Search');
const loadPokemon=document.getElementById("loadPokemon");
const calculateSection = document.getElementById("calculate");
const calculateOption = document.getElementById("calculateOption");
const topSection = document.getElementById("top");
const topOption=document.getElementsByClassName("menu-top")[0];


  pokemonSection.classList.add("hide");
  searchInput.classList.add("hide");
  calculateSection.classList.add("hide");
  topSection.classList.add("hide");

//Mostrar sección Pokémon, about y calculate
const openPokemonSection = () => {
  aboutSection.classList.add("hide");
  pokemonSection.classList.remove("hide");
  searchInput.classList.remove("hide");
  calculateSection.classList.add("hide");
  topSection.classList.add("hide");
  displayPokemon(sortData(pokemonData,'number','valueFive').slice(0,cont));
}

pokemonOption.addEventListener("click", openPokemonSection); 
pokemonGo.addEventListener("click", openPokemonSection); 

const openAboutSection = () => {
  pokemonSection.classList.add("hide");
  searchInput.classList.add("hide");
  aboutSection.classList.remove("hide");
  calculateSection.classList.add("hide");
  topSection.classList.add("hide");
  
  }

aboutOption.addEventListener("click", openAboutSection); 

const openCalculateSection = () => {
  pokemonSection.classList.add("hide");
  searchInput.classList.add("hide");
  aboutSection.classList.add("hide");
  calculateSection.classList.remove("hide");
  topSection.classList.add("hide");
  }

calculateOption.addEventListener("click", openCalculateSection); 

const openTopSection = () => {
  pokemonSection.classList.add("hide");
  searchInput.classList.add("hide");
  aboutSection.classList.add("hide");
  calculateSection.classList.add("hide");
  topSection.classList.remove("hide");
  }

topOption.addEventListener("click", openTopSection); 
// Menu Responsive// 

const menuBurger= document.getElementsByClassName("toggleBtn")[0];
const logoHeader= document.getElementsByClassName("logo")[0];
const optionMenuBurger = document.getElementsByClassName("nav-links")[0];
const closeMenuBurger = document.getElementsByClassName("close-menu")[0];

const displayMenuBurger = () => {
  optionMenuBurger.classList.toggle("active");
  logoHeader.classList.toggle("active");
  }

  menuBurger.addEventListener("click", displayMenuBurger);
  closeMenuBurger.addEventListener("click", displayMenuBurger);

//Contenedor Principal 'root'
const containerRoot=document.getElementById("rootPokemon");
//Contenedor Principal Modal
const containerModal=document.getElementById("rootPokemonModal");
//Contenedor Principal 'root'
const containerRootTop=document.getElementById("rootPokemonTop");
//Contenedor Principal Modal
const containerModalTop=document.getElementById("rootPokemonModalTop");

// Data Pokemon
const pokemonData=data.pokemon;

//Top 10
const titleTop = document.getElementsByClassName("titleTop")[0];
const selectionTop= document.querySelector('.menu-top');

  selectionTop.addEventListener('change', (t) => {
  let topResult;
  if(t.target.value==='optionStrongest'){
    topResult=sortData(pokemonData,'number',t.target.value);
    titleTop.innerHTML="Top 10 Strongest"; 
    }
    else if(t.target.value==='optionDefense'){
      topResult=sortData(pokemonData,'number',t.target.value);
      titleTop.innerHTML="Top 10 Defense"; 
    }
    selectionType.value = 'all';
    selectionTop.value = 'topSelected';
    displayPokemonTop(topResult.slice(0,10)) ;
  });

//Ordenar
const selectionOrder = document.querySelector('.sort');

  selectionOrder.addEventListener('change', (s) => {
    loadPokemon.classList.add("hide");
  let orderResult;
  if(s.target.value==='valueTwo'){
      orderResult=sortData(pokemonData,'name',s.target.value);
      selectionOrder[1].innerHTML="Z-A"; 
      selectionOrder[1].value="valueFour"; 
    }
    else if(s.target.value==='valueFour'){
      orderResult=sortData(pokemonData,'name',s.target.value);
      selectionOrder[1].innerHTML="A-Z"; 
      selectionOrder[1].value="valueTwo"; 
    }
    else if(s.target.value==='valueThree'){
      orderResult=sortData(pokemonData,'number',s.target.value);
      selectionOrder[2].innerHTML="Lowest Number"; 
      selectionOrder[2].value="valueFive";
    }
    else if(s.target.value==='valueFive'){
      orderResult=sortData(pokemonData,'number',s.target.value);
      selectionOrder[2].innerHTML="Highest number"; 
      selectionOrder[2].value="valueThree";
    }
    cont=256;
    selectionType.value = 'all';
    selectionOrder.value = 'valueOne';
    displayPokemon(orderResult) ;
    
  });


//Filtrar por Tipo:
const selectionType = document.querySelector('.types');

selectionType.addEventListener('change', (t) => {
  cont=256;
  loadPokemon.classList.add("hide");
  if(t.target.value==='all'){
    displayPokemon(pokemonData) ;
  }
  else{
  const filterResult=filterData(pokemonData,t.target.value);
  displayPokemon(filterResult) ;
  }
});

//Buscar por Nombre o Número:

searchInput.addEventListener("keyup", function(e) {
  loadPokemon.classList.add("hide");
  if (e.keyCode === 13) {
    let searchValue=document.getElementById('Search').value;

  if(searchValue==="" || searchValue==0){
      alert("Enter a Name or Number to search");
      return false;
      }
    else if (searchValue<10 && searchValue>0) { //Para los Números de 1 digito agregar 2 ceros a la izquierda para realizar la busqueda.
      searchValue="00"+searchValue;
    }
    else if(searchValue<100 && searchValue>9){//Para los Números de 2 digito agregar 2 ceros a la izquierda para realizar la busqueda.
      searchValue="0"+searchValue;
    }
    else if (searchValue >=252 ){
      alert("Enter a number of 1 to 251");
      return false;
    }

    const searchResult=searchData(pokemonData,searchValue.toLowerCase());

    if (searchResult.length===0) { //No hay resultado para mostrar.
      alert("No results found"); //Mensaje "No se Encontro Resultado".
      return false;//No cargar resultado vacio.
    }
    selectionType.selectedIndex = null;
displayPokemon(searchResult) ;
  }

});



//Al dar clic en el campo para buscar se limpiara el campo y mostrarán todos los pokemones:
//const searchInput=document.getElementById('Search');
  searchInput.addEventListener("click", function() {
    loadPokemon.classList.add("hide");
    selectionType.selectedIndex = null;
    document.getElementById('Search').value="";
    displayPokemon(pokemonData);
  });


// 
let displayPokemon = (pokemonData) => { //aplicar array.slice
  containerRoot.innerHTML = ''; //Vaciar Contenedor principal para actualizar datos
  containerModal.innerHTML = '';

  pokemonData.forEach(pokemon => {

  const pokemonElement=document.createElement('div'); //Cramos un elemento 'div' Contenedor Pokemon.
  pokemonElement.classList.add('pokemon'); //El div presenta una clase .pokemon
  pokemonElement.classList.add('type'+pokemon.type[0]); 

  let name = pokemon.name[0].toUpperCase()+pokemon.name.slice(1);//Mayuscula la primera letra del nombre
  const num= pokemon.num;
  const img=pokemon.img;

/* */
if (num==='029' || num==='032') { //Nidoran Para que no aparezca (female / male).**

  name = name.slice(0,9);//Acortamos el nombre**

    let cardPokemon = `
      <div class='title'>
      <h2 class="name"> ${name} </h2>
      <p class="number">${num}</p>
      <div class="info">
      ${displayTypes(pokemon)}
      </div>
    
      </div>
      <div class="img-container">
      <img src="${img}" alt="${name}">
      </div>
      
      `

    pokemonElement.innerHTML=cardPokemon;
    containerRoot.appendChild(pokemonElement);

/* Modal*/ 
    
  const pokemonModal= document.createElement("div");
  pokemonModal.classList.add("pokemonModal");
  pokemonModal.classList.add("hide");

  let  modalPokemon = `
  <div class="modalContent">
  <div class="type-header-${pokemon.type[0]} modalHeader">
    <span id="close${name}" class="close">&times;</span> 
  </div>
  <div class="type${pokemon.type[0]} infoPokemon">
    <div class="mainData">
      <div class="name-number">
        <h2 class="pokemonName"><b>${name}</b></h2>
        <p class="pokemonNumber"><b>${num}</b></p>
      </div>
      <div class="pokemonImg">
        <img src="${img}" alt="${name}">
    </div>
    </div>
    <div class="type-menu-${pokemon.type[0]} pokemonMenu">
      <ul class="modalLinks">
        <li class="active"><a id="firstOption${name}" href="#pokemonAbout">About</a></li>
        <li><a id="secondOption${name}" href="#stats">Stats</a></li>
        <li><a id="thirdtOption${name}" href="#evolution">Evolution</a></li>
        <li class="slide"></li>
      </ul>
      <div class="animation start-home"></div>
    </div>
    <section id="optionOne${name}" class="pokemonAbout">
      <p class="aboutModal"><br>${pokemon.about}</p>
      <div class="size">
        <div class="pokemon-size-height"><b>${pokemon.size["height"]}</b> <br>Height</div>
        <div><b>${pokemon.size["weight"]}</b> <br>Weight</div>
      </div>
      <div class="generation"><b>${pokemon.generation["name"]}</b> <br>${pokemon.generation["num"]}
      </div>
    </section>
    <section id="optionTwo${name}" class="stats">
    <div class="all-types">
      <h5 class="titleTypes">Types</h5>
        ${displayTypes(pokemon)}
    </div> 
      <div class="basicStats">
      <label for="file"><b><i>HP</i></b> <i class="stats-number">${pokemon.stats["max-hp"]}</i></label>
      <progress id="file" value="${pokemon.stats["max-hp"]}" max="403"></progress><br>
      <label for="file"><b><i>CP</i></b> <i class="stats-number">${pokemon.stats["max-cp"]}</i></label>
      <progress id="file" value="${pokemon.stats["max-cp"]}" max="4431"></progress><br>
      <label for="file"><b><i>DEF</i></b> <i class="stats-number">${pokemon.stats["base-defense"]}</i></label>
      <progress id="file" value="${pokemon.stats["base-defense"]}" max="396"></progress><br>
      <label for="file"><b><i>ATK</i></b> <i class="stats-number">${pokemon.stats["base-attack"]}</i></label>
      <progress id="file" value="${pokemon.stats["base-attack"]}" max="345"></progress><br>
      <label for="file"><b><i>STAM</i></b> <i class="stats-number">${pokemon.stats["base-stamina"]}</i></label>
      <progress id="file" value="${pokemon.stats["base-stamina"]}" max="496"></progress><br></br>
      </div>
      <h5 class="titleWeaknesses">Weaknesses</h5>
      <div class="all-weaknesses">${displayWeaknesses(pokemon)}</div>
      </section>

    <section id="optionThree${name}" class="evolution">
      <h5>Evolution chain</h5>

      <div class="evolutions">
      <div class="pre-evolution">${displaypreEvolution(pokemon)}</div>
      <div>
          <div class='title'>
          <h2 class="name"> ${name} </h2>
          </div>
          <div class="description">
          <div class="img-container">
          <img src="${img}" alt="${name}">
          </div>
          </div>
      </div>
      <div class="next-evolution">${displaynextEvolution(pokemon)}</div>
      </div>

    </section>
  </div>
</div>   
    </div>
  `;

pokemonModal.innerHTML=modalPokemon;
containerModal.appendChild(pokemonModal);

const openModal = () => {
    pokemonModal.classList.remove("hide");
}

pokemonElement.addEventListener("click", openModal); 

const stats = document.getElementById("optionTwo"+name);
const evolution = document.getElementById("optionThree"+name);
stats.classList.add("hide");
evolution.classList.add("hide");

const aboutPokemon = document.getElementById("optionOne"+name);
const optionAbout=document.getElementById("firstOption"+name);
const optionStats=document.getElementById("secondOption"+name);
const optionEvolution=document.getElementById("thirdtOption"+name);

optionStats.addEventListener("click", () => {
  aboutPokemon.classList.add("hide");
  evolution.classList.add("hide");
  stats.classList.remove("hide");
});

optionAbout.addEventListener("click", () => {
  stats.classList.add("hide");
  evolution.classList.add("hide");
  aboutPokemon.classList.remove("hide");
});

optionEvolution.addEventListener("click", () => {
  stats.classList.add("hide");
  aboutPokemon.classList.add("hide");
  evolution.classList.remove("hide");
});

const Close=document.getElementById("close"+name);

const closeModal = () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
  evolution.classList.add("hide");
  pokemonModal.classList.add("hide");
  
}

Close.addEventListener("click", closeModal); 
    
}
else
  {

    let cardPokemon = `
      <div class='title'>
      <h2 class="name"> ${name} </h2>
      <p class="number">${num}</p>
      <div class="info">
      ${displayTypes(pokemon)}
      </div>

      </div>
      <div class="img-container">
      <img src="${img}" alt="${name}">
      </div>
      
      
      
      `

      pokemonElement.innerHTML=cardPokemon;
      containerRoot.appendChild(pokemonElement);



  /* Modal*/ 
    
  const pokemonModal= document.createElement("div");
  pokemonModal.classList.add("pokemonModal");
  pokemonModal.classList.add("hide");

  let  modalPokemon = `

  <div class="modalContent">
    <div class="type-header-${pokemon.type[0]} modalHeader">
      <span id="close${name}" class="close">&times;</span> 
    </div>
    <div class="type${pokemon.type[0]} infoPokemon">
      <div class="mainData">
        <div class="name-number">
          <h2 class="pokemonName"><b>${name}</b></h2>
          <p class="pokemonNumber"><b>${num}</b></p>
        </div>
        <div class="pokemonImg">
          <img src="${img}" alt="${name}">
      </div>
      </div>
      <div class="type-menu-${pokemon.type[0]} pokemonMenu">
        <ul class="modalLinks">
          <li class="active"><a id="firstOption${name}" href="#pokemonAbout">About</a></li>
          <li><a id="secondOption${name}" href="#stats">Stats</a></li>
          <li><a id="thirdtOption${name}" href="#evolution">Evolution</a></li>
          <li class="slide"></li>
        </ul>
        <div class="animation start-home"></div>
      </div>
      <section id="optionOne${name}" class="pokemonAbout">
        <p class="aboutModal"><br>${pokemon.about}</p>
        <div class="size">
          <div class="pokemon-size-height"><b>${pokemon.size["height"]}</b> <br>Height</div>
          <div><b>${pokemon.size["weight"]}</b> <br>Weight</div>
        </div>
        <div class="generation"><b>${pokemon.generation["name"]}</b> <br>${pokemon.generation["num"]}
        </div>
      </section>
      <section id="optionTwo${name}" class="stats">
      <div class="all-types">
        <h5 class="titleTypes">Types</h5>
          ${displayTypes(pokemon)}
      </div> 
        <div class="basicStats">
        <label for="file"><b><i>HP</i></b> <i class="stats-number">${pokemon.stats["max-hp"]}</i></label>
        <progress id="file" value="${pokemon.stats["max-hp"]}" max="403"></progress><br>
        <label for="file"><b><i>CP</i></b> <i class="stats-number">${pokemon.stats["max-cp"]}</i></label>
        <progress id="file" value="${pokemon.stats["max-cp"]}" max="4431"></progress><br>
        <label for="file"><b><i>DEF</i></b> <i class="stats-number">${pokemon.stats["base-defense"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-defense"]}" max="396"></progress><br>
        <label for="file"><b><i>ATK</i></b> <i class="stats-number">${pokemon.stats["base-attack"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-attack"]}" max="345"></progress><br>
        <label for="file"><b><i>STAM</i></b> <i class="stats-number">${pokemon.stats["base-stamina"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-stamina"]}" max="496"></progress><br></br>
        </div>
        <h5 class="titleWeaknesses">Weaknesses</h5>
        <div class="all-weaknesses">${displayWeaknesses(pokemon)}</div>
        </section>

      <section id="optionThree${name}" class="evolution">
        <h5>Evolution chain</h5>

        <div class="evolutions">
        <div class="pre-evolution">${displaypreEvolution(pokemon)}</div>
        <div>
            <div class='title'>
            <h2 class="name"> ${name} </h2>
            </div>
            <div class="description">
            <div class="img-container">
            <img src="${img}" alt="${name}">
            </div>
            </div>
        </div>
        <div class="next-evolution">${displaynextEvolution(pokemon)}</div>
        </div>

      </section>
    </div>
  </div>   
      </div>
  `;

pokemonModal.innerHTML=modalPokemon;
containerModal.appendChild(pokemonModal);

const openModal = () => {
    pokemonModal.classList.remove("hide");
}

pokemonElement.addEventListener("click", openModal); 

const stats = document.getElementById("optionTwo"+name);
const evolution = document.getElementById("optionThree"+name);
stats.classList.add("hide");
evolution.classList.add("hide");

const aboutPokemon = document.getElementById("optionOne"+name);
const optionAbout=document.getElementById("firstOption"+name);
const optionStats=document.getElementById("secondOption"+name);
const optionEvolution=document.getElementById("thirdtOption"+name);

optionStats.addEventListener("click", () => {
  aboutPokemon.classList.add("hide");
  evolution.classList.add("hide");
  stats.classList.remove("hide");
});

optionAbout.addEventListener("click", () => {
  stats.classList.add("hide");
  evolution.classList.add("hide");
  aboutPokemon.classList.remove("hide");
});

optionEvolution.addEventListener("click", () => {
  stats.classList.add("hide");
  aboutPokemon.classList.add("hide");
  evolution.classList.remove("hide");
});

const Close=document.getElementById("close"+name);

const closeModal = () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
  evolution.classList.add("hide");
  pokemonModal.classList.add("hide");
  
}

Close.addEventListener("click", closeModal); 
  }

/* */



});

};







//Funcion para Mostrar los tipos:
let displayTypes = (pokemons) => {
  let poketypes='';
    for(let i=0;i < pokemons.type.length;i++){ 

      poketypes =poketypes + ` <div class="type ${pokemons.type[i]}"> <img src="img/type/Icon_${pokemons.type[i]}.png"> <i class="text-type">${pokemons.type[i]}</i></div>`
  
  }
    return poketypes;
};

//Funcion para Mostrar las Debilidades:
let displayWeaknesses = (pokemons) => {
  let pokeWeaknesses='';
    for(let i=0;i < pokemons.weaknesses.length;i++){ 

      pokeWeaknesses = pokeWeaknesses + ` <div class="type ${pokemons.weaknesses[i]}"> <img src="img/type/Icon_${pokemons.weaknesses[i]}.png"> <i class="text-type">${pokemons.weaknesses[i]}</i></div>`
  
  }
    return pokeWeaknesses;
};

//Funcion para mostrar las evoluciones
/* - Pre Evolución - */
let displaypreEvolution = (pokemons)=>{

  let pokeEvolution='';

const objprevEvolution = pokemons.evolution["prev-evolution"];

  for (const prop in objprevEvolution) {

      let name = objprevEvolution[prop]["name"][0].toUpperCase()+objprevEvolution[prop]["name"].slice(1);//Mayuscula la primera letra del nombre
      let num = objprevEvolution[prop]["num"];

    if (objprevEvolution.hasOwnProperty(prop )) {

      pokeEvolution = ` 
                <div>
                    <div class='title'>
                    <h2 class="name"> ${name} </h2>
                    </div>
                    <div class="description">
                    <div class="img-container">
                    <img src="https://www.serebii.net/pokemongo/pokemon/${num}.png" alt="${name}">
                    </div>
                    </div>
                </div>
                `

    const objprevEvolutionTwo =objprevEvolution[prop]['prev-evolution'];

        for (const prop  in objprevEvolutionTwo ) {

            let namep = objprevEvolutionTwo[prop]["name"][0].toUpperCase()+objprevEvolutionTwo[prop]["name"].slice(1);//Mayuscula la primera letra del nombre
            let nump = objprevEvolutionTwo[prop]["num"];

          if (objprevEvolutionTwo .hasOwnProperty(prop )) {
            pokeEvolution = ` 
                <div>
                    <div class='title'>
                    <h2 class="name"> ${namep} </h2>
                    </div>
                    <div class="description">
                    <div class="img-container">
                    <img src="https://www.serebii.net/pokemongo/pokemon/${nump}.png" alt="${namep}">
                    </div>
                    </div>
                </div>
                `+ pokeEvolution;

          }
        }
      return pokeEvolution;
    }
  }
  return pokeEvolution;
};

/* - Fin Pre Evolución - */

/* - Next Evolución - */
let displaynextEvolution = (pokemons)=>{

let pokeEvolution='';

const objnextEvolution = pokemons.evolution["next-evolution"];

  for (const prop in objnextEvolution) {

      let name = objnextEvolution[prop]["name"][0].toUpperCase()+objnextEvolution[prop]["name"].slice(1);//Mayuscula la primera letra del nombre
      let num = objnextEvolution[prop]["num"];

    if (objnextEvolution.hasOwnProperty(prop )) {

        pokeEvolution = `
                <div>
                    <div class='title'>
                    <h2 class="name"> ${name} </h2>
                    </div>
                    <div class="description">
                    <div class="img-container">
                    <img src="https://www.serebii.net/pokemongo/pokemon/${num}.png" alt="${name}">
                    </div>
                    </div>
                </div>
                `

    const objnextEvolutionTwo =objnextEvolution[prop ]['next-evolution'];

        for (const prop  in objnextEvolutionTwo ) {

            let namep = objnextEvolutionTwo[prop]["name"][0].toUpperCase()+objnextEvolutionTwo[prop]["name"].slice(1);//Mayuscula la primera letra del nombre
            let nump = objnextEvolutionTwo[prop]["num"];

          if (objnextEvolutionTwo .hasOwnProperty(prop)) {
            pokeEvolution += `
                <div>
                    <div class='title'>
                    <h2 class="name"> ${namep} </h2>
                    </div>
                    <div class="description">
                    <div class="img-container">
                    <img src="https://www.serebii.net/pokemongo/pokemon/${nump}.png" alt="${namep}">
                    </div>
                    </div>
                </div>
                `

          }
        }
    return pokeEvolution;
    }
  }

  return pokeEvolution;
};

/* - Fin Next Evolución - */



let cont=8; //Iniciamos contador en 8

// displayPokemon(pokemonData);//Mostrar Todos Los Pokemones
displayPokemon(pokemonData.slice(0,cont));//Mostrar Los Pokemones

//Boton Load More:
  loadPokemon.addEventListener("click", function() {
    cont=cont+8;
      if(cont===256){
        displayPokemon(pokemonData.slice(0,cont));//Mostrar Pokemones +8
      loadPokemon.classList.add("hide");
      }
    else{
      displayPokemon(pokemonData.slice(0,cont));//Mostrar Pokemones +8
      // console.log(cont);
    }
});

/* - Candy Cost Next Evolución - */
let displaycandyCost = (i)=>{
  let candyEvolution='';
  const objnxtEvolution = pokemonData[i].evolution["next-evolution"];
  
    for (const prop in objnxtEvolution) {
    if (objnxtEvolution.hasOwnProperty(prop)) {
    candyEvolution = objnxtEvolution[prop]['candy-cost'];
    } 
  }
  
    return candyEvolution;
  };
    /* -Candy Cost Next Evolución  - */

  
  
const pokemonToCalculate = () => {

  let selectPokemon =document.getElementById("allPokemon");
  
  for (let i = 0; i < pokemonData.length; i++) { //cuenta la cantidad de pokemones - esta afuera del displaypokemon solo pokemonData 
    /*console.log(pokemonData[i].name);*/
    let option = document.createElement("option");
    option.innerHTML=pokemonData[i].name;
    
    option.value=displaycandyCost(i); //Agregando value al option - value = candy-cost

    if(option.value===""){ 
      option.value="Last Evolution";
    } 
  
    selectPokemon.appendChild(option);
    
  }

}
pokemonToCalculate();


const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const selectionCandy = document.querySelector('.allPokemon').value; //Lamar valor de los options
  const candyPokemon =document.getElementById("candyPokemon").value; //Llamar valor del input
  
  if(isNaN(selectionCandy)){
    document.getElementById("candy").innerHTML="Not Evolution";
  } 
  else{
    document.getElementById("candy").innerHTML= candyCalculate(candyPokemon,selectionCandy);
}
});



// *********  Top 10 Display *******

// 
let displayPokemonTop = (pokemonData) => { 
  containerRootTop.innerHTML = ''; //Vaciar Contenedor principal para actualizar datos
  containerModalTop.innerHTML = '';

  pokemonData.forEach(pokemon => {

  const pokemonElement=document.createElement('div'); //Cramos un elemento 'div' Contenedor Pokemon.
  pokemonElement.classList.add('pokemon'); //El div presenta una clase .pokemon
  pokemonElement.classList.add('type'+pokemon.type[0]); 

  let name = pokemon.name[0].toUpperCase()+pokemon.name.slice(1);//Mayuscula la primera letra del nombre
  const num= pokemon.num;
  const img=pokemon.img;

/* */
if (num==='029' || num==='032') { //Nidoran Para que no aparezca (female / male).**

  name = name.slice(0,9);//Acortamos el nombre**

    let cardPokemon = `
      <div class='title'>
      <h2 class="name"> ${name} </h2>
      <p class="number">${num}</p>
      <div class="info">
      ${displayTypes(pokemon)}
      </div>
    
      </div>
      <div class="img-container">
      <img src="${img}" alt="${name}">
      </div>
      
      `

    pokemonElement.innerHTML=cardPokemon;
    containerRootTop.appendChild(pokemonElement);

/* Modal*/ 
    
  const pokemonModal= document.createElement("div");
  pokemonModal.classList.add("pokemonModal");
  pokemonModal.classList.add("hide");

  let  modalPokemon = `
  <div class="modalContent">
    <div class="type-header-${pokemon.type[0]} modalHeader">
      <span id="close${name}" class="close">&times;</span> 
    </div>
    <div class="type${pokemon.type[0]} infoPokemon">
      <div class="mainData">
        <div class="name-number">
          <h2 class="pokemonName"><b>${name}</b></h2>
          <p class="pokemonNumber"><b>${num}</b></p>
        </div>
        <div class="pokemonImg">
          <img src="${img}" alt="${name}">
      </div>
      </div>
      <div class="type-menu-${pokemon.type[0]} pokemonMenu">
        <ul class="modalLinks">
          <li class="active"><a id="firstOption${name}" href="#pokemonAbout">About</a></li>
          <li><a id="secondOption${name}" href="#stats">Stats</a></li>
          <li><a id="thirdtOption${name}" href="#evolution">Evolution</a></li>
          <li class="slide"></li>
        </ul>
        <div class="animation start-home"></div>
      </div>
      <section id="optionOne${name}" class="pokemonAbout">
        <p class="aboutModal"><br>${pokemon.about}</p>
        <div class="size">
          <div class="pokemon-size-height"><b>${pokemon.size["height"]}</b> <br>Height</div>
          <div><b>${pokemon.size["weight"]}</b> <br>Weight</div>
        </div>
        <div class="generation"><b>${pokemon.generation["name"]}</b> <br>${pokemon.generation["num"]}
        </div>
      </section>
      <section id="optionTwo${name}" class="stats">
      <div class="all-types">
        <h5 class="titleTypes">Types</h5>
          ${displayTypes(pokemon)}
      </div> 
        <div class="basicStats">
        <label for="file"><b><i>HP</i></b> <i class="stats-number">${pokemon.stats["max-hp"]}</i></label>
        <progress id="file" value="${pokemon.stats["max-hp"]}" max="403"></progress><br>
        <label for="file"><b><i>CP</i></b> <i class="stats-number">${pokemon.stats["max-cp"]}</i></label>
        <progress id="file" value="${pokemon.stats["max-cp"]}" max="4431"></progress><br>
        <label for="file"><b><i>DEF</i></b> <i class="stats-number">${pokemon.stats["base-defense"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-defense"]}" max="396"></progress><br>
        <label for="file"><b><i>ATK</i></b> <i class="stats-number">${pokemon.stats["base-attack"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-attack"]}" max="345"></progress><br>
        <label for="file"><b><i>STAM</i></b> <i class="stats-number">${pokemon.stats["base-stamina"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-stamina"]}" max="496"></progress><br></br>
        </div>
        <h5 class="titleWeaknesses">Weaknesses</h5>
        <div class="all-weaknesses">${displayWeaknesses(pokemon)}</div>
        </section>

      <section id="optionThree${name}" class="evolution">
        <h5>Evolution chain</h5>

        <div class="evolutions">
        <div class="pre-evolution">${displaypreEvolution(pokemon)}</div>
        <div>
            <div class='title'>
            <h2 class="name"> ${name} </h2>
            </div>
            <div class="description">
            <div class="img-container">
            <img src="${img}" alt="${name}">
            </div>
            </div>
        </div>
        <div class="next-evolution">${displaynextEvolution(pokemon)}</div>
        </div>

      </section>
    </div>
  </div>   
      </div>
  `;

pokemonModal.innerHTML=modalPokemon;
containerModalTop.appendChild(pokemonModal);

const openModal = () => {
    pokemonModal.classList.remove("hide");
}

pokemonElement.addEventListener("click", openModal); 

const stats = document.getElementById("optionTwo"+name);
const evolution = document.getElementById("optionThree"+name);
stats.classList.add("hide");
evolution.classList.add("hide");

const aboutPokemon = document.getElementById("optionOne"+name);
const optionAbout=document.getElementById("firstOption"+name);
const optionStats=document.getElementById("secondOption"+name);
const optionEvolution=document.getElementById("thirdtOption"+name);

optionStats.addEventListener("click", () => {
  aboutPokemon.classList.add("hide");
  evolution.classList.add("hide");
  stats.classList.remove("hide");
});

optionAbout.addEventListener("click", () => {
  stats.classList.add("hide");
  evolution.classList.add("hide");
  aboutPokemon.classList.remove("hide");
});

optionEvolution.addEventListener("click", () => {
  stats.classList.add("hide");
  aboutPokemon.classList.add("hide");
  evolution.classList.remove("hide");
});

const Close=document.getElementById("close"+name);

const closeModal = () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
  evolution.classList.add("hide");
  pokemonModal.classList.add("hide");
  
}

Close.addEventListener("click", closeModal); 
    
}
else
  {

    let cardPokemon = `
      <div class='title'>
      <h2 class="name"> ${name} </h2>
      <p class="number">${num}</p>
      <div class="info">
      ${displayTypes(pokemon)}
      </div>

      </div>
      <div class="img-container">
      <img src="${img}" alt="${name}">
      </div>
      
      
      
      `

      pokemonElement.innerHTML=cardPokemon;
      containerRootTop.appendChild(pokemonElement);



  /* Modal*/ 
    
  const pokemonModal= document.createElement("div");
  pokemonModal.classList.add("pokemonModal");
  pokemonModal.classList.add("hide");

  let  modalPokemon = `

  <div class="modalContent">
    <div class="type-header-${pokemon.type[0]} modalHeader">
      <span id="close${name}" class="close">&times;</span> 
    </div>
    <div class="type${pokemon.type[0]} infoPokemon">
      <div class="mainData">
        <div class="name-number">
          <h2 class="pokemonName"><b>${name}</b></h2>
          <p class="pokemonNumber"><b>${num}</b></p>
        </div>
        <div class="pokemonImg">
          <img src="${img}" alt="${name}">
      </div>
      </div>
      <div class="type-menu-${pokemon.type[0]} pokemonMenu">
        <ul class="modalLinks">
          <li class="active"><a id="firstOption${name}" href="#pokemonAbout">About</a></li>
          <li><a id="secondOption${name}" href="#stats">Stats</a></li>
          <li><a id="thirdtOption${name}" href="#evolution">Evolution</a></li>
          <li class="slide"></li>
        </ul>
        <div class="animation start-home"></div>
      </div>
      <section id="optionOne${name}" class="pokemonAbout">
        <p class="aboutModal"><br>${pokemon.about}</p>
        <div class="size">
          <div class="pokemon-size-height"><b>${pokemon.size["height"]}</b> <br>Height</div>
          <div><b>${pokemon.size["weight"]}</b> <br>Weight</div>
        </div>
        <div class="generation"><b>${pokemon.generation["name"]}</b> <br>${pokemon.generation["num"]}
        </div>
      </section>
      <section id="optionTwo${name}" class="stats">
      <div class="all-types">
        <h5 class="titleTypes">Types</h5>
          ${displayTypes(pokemon)}
      </div> 
        <div class="basicStats">
        <label for="file"><b><i>HP</i></b> <i class="stats-number">${pokemon.stats["max-hp"]}</i></label>
        <progress id="file" value="${pokemon.stats["max-hp"]}" max="403"></progress><br>
        <label for="file"><b><i>CP</i></b> <i class="stats-number">${pokemon.stats["max-cp"]}</i></label>
        <progress id="file" value="${pokemon.stats["max-cp"]}" max="4431"></progress><br>
        <label for="file"><b><i>DEF</i></b> <i class="stats-number">${pokemon.stats["base-defense"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-defense"]}" max="396"></progress><br>
        <label for="file"><b><i>ATK</i></b> <i class="stats-number">${pokemon.stats["base-attack"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-attack"]}" max="345"></progress><br>
        <label for="file"><b><i>STAM</i></b> <i class="stats-number">${pokemon.stats["base-stamina"]}</i></label>
        <progress id="file" value="${pokemon.stats["base-stamina"]}" max="496"></progress><br></br>
        </div>
        <h5 class="titleWeaknesses">Weaknesses</h5>
        <div class="all-weaknesses">${displayWeaknesses(pokemon)}</div>
        </section>

      <section id="optionThree${name}" class="evolution">
        <h5>Evolution chain</h5>

        <div class="evolutions">
        <div class="pre-evolution">${displaypreEvolution(pokemon)}</div>
        <div>
            <div class='title'>
            <h2 class="name"> ${name} </h2>
            </div>
            <div class="description">
            <div class="img-container">
            <img src="${img}" alt="${name}">
            </div>
            </div>
        </div>
        <div class="next-evolution">${displaynextEvolution(pokemon)}</div>
        </div>

      </section>
    </div>
  </div>   
      </div>
  `;

pokemonModal.innerHTML=modalPokemon;
containerModalTop.appendChild(pokemonModal);

const openModal = () => {
    pokemonModal.classList.remove("hide");
}

pokemonElement.addEventListener("click", openModal); 

const stats = document.getElementById("optionTwo"+name);
const evolution = document.getElementById("optionThree"+name);
stats.classList.add("hide");
evolution.classList.add("hide");

const aboutPokemon = document.getElementById("optionOne"+name);
const optionAbout=document.getElementById("firstOption"+name);
const optionStats=document.getElementById("secondOption"+name);
const optionEvolution=document.getElementById("thirdtOption"+name);

optionStats.addEventListener("click", () => {
  aboutPokemon.classList.add("hide");
  evolution.classList.add("hide");
  stats.classList.remove("hide");
});

optionAbout.addEventListener("click", () => {
  stats.classList.add("hide");
  evolution.classList.add("hide");
  aboutPokemon.classList.remove("hide");
});

optionEvolution.addEventListener("click", () => {
  stats.classList.add("hide");
  aboutPokemon.classList.add("hide");
  evolution.classList.remove("hide");
});

const Close=document.getElementById("close"+name);

const closeModal = () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
  evolution.classList.add("hide");
  pokemonModal.classList.add("hide");
  
}

Close.addEventListener("click", closeModal); 
  }

/* Fin Modal*/



});

};
//*********** Top 10

