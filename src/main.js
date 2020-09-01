import {
  filterChampions,
  orderAZ,
  orderZA,
  orderAsc,
  orderDesc,
} from "./data.js";
import data from "./data/lol/lol.js";

const datos = data.data,
  filtradoCampeones = document.getElementById("filtradoCampeones"),
  arrayCampeones = Object.values(datos);

const listaCampeones = (
  name,
  img,
  title,
  difficulty,
  rol,
  lore,
  hp,
  mp,
  armor,
  spellblock,
  hpregen,
  id
) => {
  const campeones = document.createElement("div"),
    figuraCard = document.createElement("div"),
    frontalcard = document.createElement("div"),
    splashCampeones = document.createElement("img");

  frontalcard.innerHTML += `    
    <a class="blog-card" id="${id}" href=" #openmodal${id}">
      <img class="modal-img" src="${img}"/>
      <a class="frontalText">${name}</a>
      <p class="frontalText">${title}</p>
      <p class="frontalText">Dificultad: ${difficulty}</p>
    </a>
   
    <section id="openmodal${id}" class="modal-window">
      <div class = "modal-content">
        <a href="#${id}" title="Close" class="modal-close">X</a>
        <img class="modal-img" src="${img}"/>
        <div class="modal-img">
          <h1 class="frontalText">${name}</h1>
          <h1 class="frontalText">${title}</h1>
          <p class="frontalText">Blurb: ${lore}</p>
        </div>
        <h2>Tabla de estadística por rango de nivel:</h2>
        <table class="table">
          <tr class="table">
            <th class="table"> Stats</th>
            <th class="table"> Per Level</th>
            <th class="table"> Level 1</th>
            <th class="table"> Level 6</th>
            <th class="table"> Level 12</th>
            <th class="table"> Level 18</th>
          </tr>

          <tr class="table">
            <th class="table"> Hp </th>
            <td class="table">${hp}</td>
          </tr>
            
          <tr class="table">
            <th class="table"> MP </th>
            <td class="table">${mp}</td>      
          </tr>

          <tr class="table">
            <th class="table"> Armor </th>
            <td class="table">${armor}</td>
          </tr>  
          
          <tr class="table">
            <th class="table"> Spellblock </th>
            <td class="table">${spellblock}</td>
          </tr>
            
          <tr class="table">
            <th class="table"> Hpregen </th>
            <td class="table">${hpregen}</td>
          </tr>
        </table>
        <h2 class="modal-info">Roles: "${rol}"</h2>    
      </div> 
       
      
    </section>`;

  campeones.setAttribute("class", "card-link-Champ");
  figuraCard.setAttribute("class", "frontalCard");
  frontalcard.setAttribute("class", "frontalCard");
  splashCampeones.setAttribute("class", "frontalChampion");

  document.getElementById("container-campeones").appendChild(campeones);

  campeones.appendChild(splashCampeones);
  campeones.appendChild(figuraCard);
  campeones.appendChild(frontalcard);
};

/*obtener array de campeones desde data*/
const getCampeones = (arrayCampeones) => {
  for (let i = 0; i < arrayCampeones.length; i++) {
    let name = arrayCampeones[i].name;
    let img = arrayCampeones[i].splash;
    let title = arrayCampeones[i].title;
    let difficulty = arrayCampeones[i].info.difficulty;
    let id = arrayCampeones[i].id;

    let rol = arrayCampeones[i].tags.toString();
    let lore = arrayCampeones[i].blurb;
    let hp = arrayCampeones[i].stats.hp;
    let mp = arrayCampeones[i].stats.mp;
    let armor = arrayCampeones[i].stats.armor;
    let spellblock = arrayCampeones[i].stats.spellblock;
    let hpregen = arrayCampeones[i].stats.hpregen;
    listaCampeones(
      name,
      img,
      title,
      difficulty,
      rol,
      lore,
      hp,
      mp,
      armor,
      spellblock,
      hpregen,
      id
    );
  }
};

getCampeones(arrayCampeones);

/*filtrado de campeones*/
filtradoCampeones.addEventListener("click", (event) => {
  const rol = event.target.id;

  if (rol == null || rol == "" || rol == "All") {
    getCampeones(arrayCampeones);
  } else {
    const result = filterChampions(arrayCampeones, rol);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(result);
  }
});

/*order de los campeones*/
const selector = document.querySelector("#order");
selector.addEventListener("click", (event) => {
  const orderName = event.target.value;

  if (orderName == "asc") {
    const alfChamps = orderAZ(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(alfChamps);
  } else if (orderName == "desc") {
    const alfChamps = orderZA(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(alfChamps);
  }
});

/*Difficulty*/
const selectDifficulty = document.querySelector("#orderDifficulty");
selectDifficulty.addEventListener("click", (event) => {
  const orderDifficulty = event.target.value;

  if (orderDifficulty == "ascD") {
    const difChamps = orderAsc(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(difChamps);
  } else if (orderDifficulty == "descD") {
    const difChamps = orderDesc(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(difChamps);
  }
});

/*Buscar campeones*/
const searchInput = document.querySelector("#searchInput"),
  result = document.querySelector("#container-campeones");

const buscador = () => {
  result.innerHTML = "";
  const texto = searchInput.value.toLowerCase();

  for (let campeones of arrayCampeones) {
    let nombre = campeones.name.toLowerCase();
    if (nombre.indexOf(texto) != -1) {
      result.innerHTML += `
      <div class="card-link">
      <a class="blog-card" id="${campeones.id}" href=" #openmodal${campeones.id}">   
        <div class="frontalCard">
          <img class="modal-img" src="${campeones.splash}" />
          <a class="frontalText">${campeones.name}</a>
          <p class="frontalText">${campeones.title}</p>
          <p class="frontalText">Dificultad: ${campeones.info.difficulty}</p>
        </div>   
      </a>
    </div>
    
    <section id="openmodal${campeones.id}" class="modal-window">
      <div class="modal-content">
        <a href= "#${campeones.id}" title="Close" class="modal-close">X</a>
        <img class="modal-img" src="${campeones.splash}" />
        <div class="modal-img">
          <h1 class="frontalText">${campeones.name}</h1>
          <h1 class="frontalText">${campeones.title}</h1>
          <p class="frontalText">Blurb: ${campeones.blurb}</p>
        </div>
    
        <h2>Tabla de estadística por rango de nivel:</h2>
        <table class="table">
          <tr class="table">
            <th class="table"> Stats</th>
            <th class="table"> Per Level</th>
            <th class="table"> Level 1</th>
            <th class="table"> Level 6</th>
            <th class="table"> Level 12</th>
            <th class="table"> Level 18</th>
          </tr>
    
          <tr class="table">
            <th class="table"> Hp </th>
            <td class="table">${campeones.stats.hp}</td>
          </tr>
    
          <tr class="table">
            <th class="table"> MP </th>
            <td class="table">${campeones.stats.mp}</td>
          </tr>
    
          <tr class="table">
            <th class="table"> Armor </th>
            <td class="table">${campeones.stats.armor}</td>
          </tr>
    
          <tr class="table">
            <th class="table"> Spellblock </th>
            <td class="table">${campeones.stats.spellblock}</td>
          </tr>
    
          <tr class="table">
            <th class="table"> Hpregen </th>
            <td class="table">${campeones.stats.hpregen}</td>
          </tr>
    
        </table>
        <h2 class="modal-info">Rol: ${campeones.tags.toString()}</h2>
      </div>
      
    </section>`
    }
  }

  if (result.innerHTML == "") {
    result.innerHTML += `<div class="frontalCard">
      <div class="front-Hp">No existe</div>
    </div>`;
  }
};

searchInput.addEventListener("keyup", buscador);
