import {
  filterChampions,
  orderAZ,
  orderZA,
  orderAsc,
  orderDesc,
  stats,

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
  hpperlevel,
  mp,
  mpperlevel,
  armor,
  armorperlevel,
  spellblock,
  spellblockperlevel,
  hpregen,
  hpregenperlevel,
  id,
) => {
  const campeones = document.createElement("div"), /* card-link-champ*/
    frontalcard = document.createElement("div"); /*"frontalCard*/
    

  frontalcard.innerHTML += `    
    <a class="blog-card" id="${id}" href=" #openmodal${id}">
    
    <img class="modal-img" src="${img}"/></a>
    
      
      <h1 class="frontalTextChamp">${name}</h1>
      <h2 class="frontalTextChamp">${title}</h2>
      <p class="frontalTextChamp">Dificultad: ${difficulty}</p>
    
   
    <section id="openmodal${id}" class="modal-window">
      <div class = "modal-content">
        <a href="#${id}" title="Close" class="modal-close">X</a>
        <div class="contentImg">
        <img class="modal-img-back" src="${img}"/>
        </div>
        <div class="modal-back">
          <h1>${name}</h1>
          <h2>${title}</h2>
          <p><strong class="strong">Blurb</strong>:${lore}</p>
        </div>

        <h2 class="frontalTextTable">Tabla de estadística por rango de nivel:</h2>
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
            <td class="table">${hpperlevel}</td>
            <td class="table">${stats(6,  arrayCampeones, 1)}</td>
            <td class="table">${stats(12,  arrayCampeones, 1)}</td>
            <td class="table">${stats(18, arrayCampeones, 1)}</td>
          </tr>
            
          <tr class="table">
            <th class="table"> MP </th>
            <td class="table">${mp}</td>
            <td class="table">${mpperlevel}</td>
            <td class="table">${stats(6,  arrayCampeones, 2)}</td>
            <td class="table">${stats(12,  arrayCampeones, 2)}</td>
            <td class="table">${stats(18, arrayCampeones, 2)}</td>        
          </tr>

          <tr class="table">
            <th class="table"> Armor </th>
            <td class="table">${armor}</td>
            <td class="table">${armorperlevel}</td>
            <td class="table">${stats(6,  arrayCampeones, 3)}</td>
            <td class="table">${stats(12,  arrayCampeones, 3)}</td>
            <td class="table">${stats(18, arrayCampeones, 3)}</td>
          </tr>  
          
          <tr class="table">
            <th class="table"> Spellblock </th>
            <td class="table">${spellblock}</td>
            <td class="table">${spellblockperlevel}</td>
            <td class="table">${stats(6,  arrayCampeones, 4)}</td>
            <td class="table">${stats(12,  arrayCampeones, 4)}</td>
            <td class="table">${stats(18, arrayCampeones, 4)}</td>
          </tr>
            
          <tr class="table">
            <th class="table"> Hpregen </th>
            <td class="table">${hpregen}</td>
            <td class="table">${hpregenperlevel}</td>
            <td class="table">${stats(6,  arrayCampeones, 5)}</td>
            <td class="table">${stats(12,  arrayCampeones, 5)}</td>
            <td class="table">${stats(18, arrayCampeones, 5)}</td>
          </tr>
        </table>
        <h2 class="rolText">Roles: "${rol}"</h2>    
      </div>       
    </section>`;

  campeones.setAttribute("class", "card-link-Champ");
  frontalcard.setAttribute("class", "frontalCardChampion");
  
 
  document.getElementById("container-campeones").appendChild(campeones);

  
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

    let rol = arrayCampeones[i].tags.join(", ");
    let lore = arrayCampeones[i].blurb;
    let hp = arrayCampeones[i].stats.hp;
    let hpperlevel = arrayCampeones[i].stats.hpperlevel;
    let mp = arrayCampeones[i].stats.mp;
    let mpperlevel = arrayCampeones[i].stats.mpperlevel;
    let armor = arrayCampeones[i].stats.armor;
    let armorperlevel = arrayCampeones[i].stats.armorperlevel;
    let spellblock = arrayCampeones[i].stats.spellblock;
    let spellblockperlevel = arrayCampeones[i].stats.spellblockperlevel;
    let hpregen = arrayCampeones[i].stats.hpregen;
    let hpregenperlevel = arrayCampeones[i].stats.hpregenperlevel;

    listaCampeones(
      name,
      img,
      title,
      difficulty,
      rol,
      lore,
      hp,
      hpperlevel,
      mp,
      mpperlevel,
      armor,
      armorperlevel,
      spellblock,
      spellblockperlevel,
      hpregen,
      hpregenperlevel,
      id,
    );
  }
};

getCampeones(arrayCampeones);

/*filtrado de campeones*/
filtradoCampeones.addEventListener("click", (event) => {
  const rol = event.target.id;

  if (rol == null || rol == "" || rol == "All") {
    document.getElementById("container-campeones").innerHTML = "";
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
      <div class="card-link-Champ_Reverse">
      <div class="frontalCardChampion_Reverse">
        <a class="blog-card_Reverse" id="${campeones.id}" href=" #openmodal${campeones.id}"> 
        <div class="contentImg_Reverse">
          <img class="modal-img_Reverse" src="${campeones.splash}" />
        </div>      
          <h1 class="frontalTextChamp_Reverse">${campeones.name}</h1>
          <h2 class="frontalTextChamp_Reverse">${campeones.title}</h2>
          <p class="frontalTextChamp_Reverse">Dificultad: ${campeones.info.difficulty}</p>
        </div>   
        </a> 
      </div>
    </div>
  
  <section id="openmodal${campeones.id}" class="modal-window_Reverse">
    <div class="modal-content_Reverse">
      <a href= "#${campeones.id}" title="Close" class="modal-close_Reverse">X</a>
      <div class="contentImg_Reserve">
      <img class="modal-img-back_Reverse" src="${campeones.splash}"/>
      </div>
      <div class="modal-back_Reverse">
        <h1>${campeones.name}</h1>
        <h2>${campeones.title}</h2>
        <p><strong class="strong_Reverse">Blurb: </strong> ${campeones.blurb}</p>
      </div>
  
      <h2 class="frontalTextTable_Reverse">Tabla de estadística por rango de nivel:</h2>
      <table class="table_Reverse">
        <tr class="table_Reverse">
          <th class="table_Reverse"> Stats</th>
          <th class="table_Reverse"> Per Level</th>
          <th class="table_Reverse"> Level 1</th>
          <th class="table_Reverse"> Level 6</th>
          <th class="table_Reverse"> Level 12</th>
          <th class="table_Reverse"> Level 18</th>
        </tr>
  
        <tr class="table_Reverse">
          <th class="table_Reverse"> Hp </th>
          <td class="table_Reverse">${campeones.stats.hp}</td>
          <td class="table_Reverse">${campeones.stats.hpperlevel}</td>
          <td class="table_Reverse">${stats(6,  arrayCampeones, 1)}</td>
          <td class="table_Reverse">${stats(12, arrayCampeones, 1)}</td>
          <td class="table_Reverse">${stats(18, arrayCampeones, 1)}</td>
        </tr>
  
        <tr class="table_Reverse">
          <th class="table_Reverse"> MP </th>
          <td class="table_Reverse">${campeones.stats.mp}</td>
          <td class="table_Reverse">${campeones.stats.mpperlevel}</td>
          <td class="table_Reverse">${stats(6,  arrayCampeones, 2)}</td>
          <td class="table_Reverse">${stats(12,  arrayCampeones, 2)}</td>
          <td class="table_Reverse">${stats(18, arrayCampeones, 2)}</td>
        </tr>
  
        <tr class="table_Reverse">
          <th class="table_Reverse"> Armor </th>
          <td class="table_Reverse">${campeones.stats.armor}</td>
          <td class="table_Reverse">${campeones.stats.armorperlevel}</td>
          <td class="table_Reverse">${stats(6,  arrayCampeones, 3)}</td>
          <td class="table_Reverse">${stats(12,  arrayCampeones, 3)}</td>
          <td class="table_Reverse">${stats(18, arrayCampeones, 3)}</td>
        </tr>
  
        <tr class="table_Reverse">
          <th class="table_Reverse"> Spellblock </th>
          <td class="table_Reverse">${campeones.stats.spellblock}</td>
          <td class="table_Reverse">${campeones.stats.spellblockperlevel}</td>
          <td class="table_Reverse">${stats(6,  arrayCampeones, 4)}</td>
          <td class="table_Reverse">${stats(12,  arrayCampeones, 4)}</td>
          <td class="table_Reverse">${stats(18, arrayCampeones, 4)}</td>
        </tr>
  
        <tr class="table_Reverse">
          <th class="table_Reverse"> Hpregen </th>
          <td class="table_Reverse">${campeones.stats.hpregen}</td>
          <td class="table_Reverse">${campeones.stats.hpregenperlevel}</td>
          <td class="table_Reverse">${stats(6,  arrayCampeones, 5)}</td>
          <td class="table_Reverse">${stats(12,  arrayCampeones, 5)}</td>
          <td class="table_Reverse">${stats(18, arrayCampeones, 5)}</td>
        </tr>    
      </table>
      <h2 class="rolText_Reverse">Rol: ${campeones.tags.join(", ")}</h2>
    </div>
  </section>`
    
    }
  }

  if (result.innerHTML == "") {
    result.innerHTML += `<div class="frontalCardChampion">
      <div class="front-Hp">No existe</div>
    </div>`;
  }
};

searchInput.addEventListener("keyup", buscador);
