import { filterData, searchData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';



const pokemonSection = document.getElementById("pokemon");
const aboutOption = document.getElementById("aboutOption");
const pokemonOption = document.getElementById("pokemonOption");
const pokemonGo = document.getElementById("pokemonGo");
const aboutSection = document.getElementById("about");
const searchInput=document.getElementById('Search');
const loadPokemon=document.getElementById("loadPokemon");


  pokemonSection.classList.add("hide");
  searchInput.classList.add("hide");



//Mostrar sección Pokémon
const openPokemonSection = () => {
  aboutSection.classList.add("hide");
  pokemonSection.classList.remove("hide");
  searchInput.classList.remove("hide");
}

pokemonOption.addEventListener("click", openPokemonSection); 
pokemonGo.addEventListener("click", openPokemonSection); 

const openAboutSection = () => {
  pokemonSection.classList.add("hide");
  searchInput.classList.add("hide");
  aboutSection.classList.remove("hide");
  }

aboutOption.addEventListener("click", openAboutSection); 

//Contenedor Principal 'root'
const containerRoot=document.getElementById("rootPokemon");
const containerModal=document.getElementById("rootPokemonModal");

// Data Pokemon
const pokemonData=data.pokemon;

//Ordenar
const selectionOrder = document.querySelector('.sort');

  selectionOrder.addEventListener('change', (s) => {
    loadPokemon.classList.add("hide");
  let orderResult;
  if(s.target.value==='valueTwo'){
      orderResult=sortData(pokemonData,'name',s.target.value);
      selectionOrder[1].innerHTML="Z-A"; 
      selectionOrder[1].value="valueFour"; 
    console.log(orderResult) ;
    }
    else if(s.target.value==='valueFour'){
      orderResult=sortData(pokemonData,'name',s.target.value);
      selectionOrder[1].innerHTML="A-Z"; 
      selectionOrder[1].value="valueTwo"; 
    console.log(orderResult) ;
    }
    else if(s.target.value==='valueThree'){
      orderResult=sortData(pokemonData,'number',s.target.value);
      selectionOrder[2].innerHTML="Lowest Number"; 
      selectionOrder[2].value="valueFive";
  console.log(orderResult) ;
    }
    else if(s.target.value==='valueFive'){
      orderResult=sortData(pokemonData,'number',s.target.value);
      selectionOrder[2].innerHTML="Highest number"; 
      selectionOrder[2].value="valueThree";
  console.log(orderResult) ;
    }
    selectionType.value = 'all';
    selectionOrder.value = 'valueOne';
    displayPokemon(orderResult) ;
  });


//Filtrar por Tipo:
const selectionType = document.querySelector('.types');

selectionType.addEventListener('change', (t) => {
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
    selectionType.selectedIndex = null;
    document.getElementById('Search').value="";
    displayPokemon(pokemonData);
  });



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
    <div class="typeheader${pokemon.type[0]} modalHeader">
      <span id="close${name}" class="close">&times;</span> 
    </div>
    <div class="type${pokemon.type[0]} infoPokemon">
      <div class="mainData">
        <h2 class="pokemonName"><br><b>${name}</b></h2>
        <p class="pokemonNumber"><b>${num}</b></p>
        <div class="pokemonImg">
          <img src="${img}" alt="${name}">
      </div>
      </div>
      <div class="typemenu${pokemon.type[0]} pokemonMenu">
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
        <label for="file">HP ${pokemon.stats["max-hp"]}</label>
        <progress id="file" value="${pokemon.stats["max-hp"]}" max="403"></progress><br>
        <label for="file">CP ${pokemon.stats["max-cp"]}</label>
        <progress id="file" value="${pokemon.stats["max-cp"]}" max="4431"></progress><br>
        <label for="file">DEF ${pokemon.stats["base-defense"]}</label>
        <progress id="file" value="${pokemon.stats["base-defense"]}" max="396"></progress><br>
        <label for="file">ATK ${pokemon.stats["base-attack"]}</label>
        <progress id="file" value="${pokemon.stats["base-attack"]}" max="345"></progress><br>
        <label for="file">STAM ${pokemon.stats["base-stamina"]}</label>
        <progress id="file" value="${pokemon.stats["base-stamina"]}" max="496"></progress><br></br>
        </div>
        <h5 class="titleWeaknesses">Weaknesses</h5>
        ${displayWeaknesses(pokemon)}
        </section>

      <section id="optionThree${name}">

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
stats.classList.add("hide");

const aboutPokemon = document.getElementById("optionOne"+name);

// const evolution = document.getElementById("optionThree");
const optionAbout=document.getElementById("firstOption"+name);
const optionStats=document.getElementById("secondOption"+name);

optionStats.addEventListener("click", () => {
  aboutPokemon.classList.add("hide");
  stats.classList.remove("hide");
});

optionAbout.addEventListener("click", () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
});

const Close=document.getElementById("close"+name);

const closeModal = () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
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
    <div class="modalHeader">
      <span id="close${name}" class="close">&times;</span> 
    </div>
    <div class="infoPokemon">
      <div class="mainData">
        <h2 class="pokemonName"><b>${name}</b></h2>
        <p class="pokemonNumber"><b>${num}</b></p>
        <div class="pokemonImg">
          <img src="${img}" alt="${name}">
      </div>
      </div>
      <div class="pokemonMenu">
        <ul class="modalLinks">
          <li class="active"><a id="firstOption${name}" href="#pokemonAbout">About</a></li>
          <li><a id="secondOption${name}" href="#stats">Stats</a></li>
          <li><a id="thirdtOption${name}" href="#evolution">Evolution</a></li>
          <li class="slide"></li>
        </ul>
        <div class="animation start-home"></div>
      </div>
      <section id="optionOne${name}" class="pokemonAbout">
        <p class="aboutModal">${pokemon.about}</p>
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

      <section id="optionThree${name}">

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
stats.classList.add("hide");

const aboutPokemon = document.getElementById("optionOne"+name);
// const evolution = document.getElementById("optionThree");
const optionAbout=document.getElementById("firstOption"+name);
const optionStats=document.getElementById("secondOption"+name);

optionStats.addEventListener("click", () => {
  aboutPokemon.classList.add("hide");
  stats.classList.remove("hide");
});

optionAbout.addEventListener("click", () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
});

const Close=document.getElementById("close"+name);

const closeModal = () => {
  stats.classList.add("hide");
  aboutPokemon.classList.remove("hide");
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
      console.log(cont);
    }
});
