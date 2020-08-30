import {filterChampions, orderAZ, orderZA, orderAsc, orderDesc} from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  filtradoCampeones = document.getElementById("filtradoCampeones"),
  arrayCampeones = Object.values(datos);


const listaCampeones = (name, img, title, difficulty, rol, lore, hp, mp,armor,spellblock,hpregen) => {
  const campeones = document.createElement("div"),
    figuraCard = document.createElement("figure"),
    frontalcard = document.createElement("div"),
    splashCampeones = document.createElement("img"),


    traseraTop = document.createElement("div");

    campeones.innerHTML += `<a class="frontalText"  href="#openmodal>`
    frontalcard.innerHTML += `    
    <img class="modal-img" src="${img}" />
    <p class="frontalText">${name}</p>
    <p class="frontalText">${title}</p>
    <p class="frontalText">Dificultad: ${difficulty}</p>`

    traseraTop.innerHTML += 
    `
    <section id="openmodal" class="modal-window">
    <div class = "modal-content">
    <a href="#" title="Close" class="modal-close">X</a>
    <img class="modal-img" src="${img}" />
    <h1 class="">"${name}"</h1>
    <p class="">"${lore}"</p>
    <p>Tabla de estadística por rango de nivel:</p>
    <table>
      <tr>
        <th> Health Points (HP)</th>
        <th> HP per Level</th>
        <th> HP at Lvl. 5</th>
        <th> HP at Lvl. 10</th>
        <th> HP at Lvl. 15</th>
        <th> HP at Lvl. 18</th>
      </tr>
      <tr>
        <td>${hp}</td>
        <td>${mp}</td>
        <td>${armor}</td>
        <td>${spellblock}</td>
        <td>${hpregen}</td>
        <td></td>
      </tr>
    </table>
    </div>
    <p>Roles: "${rol}"</p>
    </section>`;
    

    

  
  campeones.setAttribute("class", "card-link-Champ");
  figuraCard.setAttribute("class", "traseraTop");
  frontalcard.setAttribute("class", "frontalCard");
  splashCampeones.setAttribute("class", "frontalChampion");
  traseraTop.setAttribute("class", "traseraCampeon");
  


  document.getElementById("container-campeones").appendChild(campeones);
  
  campeones.appendChild(splashCampeones);
  campeones.appendChild(figuraCard);
  campeones.appendChild(frontalcard);
  campeones.appendChild(traseraTop);

};

/*obtener array de campeones desde data*/
const getCampeones = (objCampeones) => {
  for (let i = 0; i < objCampeones.length; i++) {
    let name = objCampeones[i].name;
    let img = objCampeones[i].splash;
    let title = objCampeones[i].title;
    let difficulty = objCampeones[i].info.difficulty; 

    let rol = objCampeones[i].tags.toString();
    let lore = objCampeones[i].blurb;
    let hp = objCampeones[i].stats.hp;
    let mp = objCampeones[i].stats.mp;
    let armor = objCampeones[i].stats.armor;
    let spellblock = objCampeones[i].stats.spellblock;
    let hpregen = objCampeones[i].stats.hpregen;
    listaCampeones(name, img, title, difficulty, rol, lore, hp,mp,armor,spellblock,hpregen);
  }
};

getCampeones(arrayCampeones);

/*filtrado de campeones*/
filtradoCampeones.addEventListener('click', (event) => {
  const rol = event.target.id

  if (rol == null || rol == '' || rol == 'All') {
    getCampeones(arrayCampeones);
  } else {
    const result = filterChampions(arrayCampeones, rol)
    document.getElementById('container-campeones').innerHTML = '';
    getCampeones(result)
  }
})

/*order de los campeones*/
const selector = document.querySelector("#order");
selector.addEventListener("click", (event) => {
  const orderName = event.target.value;
 
  if (orderName == "asc") {
    const alfChamps = orderAZ(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(alfChamps)
  } else if (orderName == "desc") {
    const alfChamps = orderZA(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(alfChamps)
  }
});

/*Difficulty*/
const selectDifficulty = document.querySelector("#orderDifficulty");
selectDifficulty.addEventListener("click", (event) => {
  const orderDifficulty = event.target.value;
 
  if (orderDifficulty == "ascD") {
    const difChamps = orderAsc(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(difChamps)
  } else if (orderDifficulty == "descD") {
    const difChamps = orderDesc(arrayCampeones);
    document.getElementById("container-campeones").innerHTML = "";
    getCampeones(difChamps)
  }
});

/*Buscar campeones*/
const searchInput = document.querySelector('#searchInput'),
  result = document.querySelector('#container-campeones');

const buscador = () => {

  result.innerHTML = '';
  const texto = searchInput.value.toLowerCase();

  for (let campeones of arrayCampeones) {
    let nombre = campeones.name.toLowerCase()
    if (nombre.indexOf(texto) != -1) {

      result.innerHTML +=
        `<div class="card-link">
            <a class="blog-card" id="${campeones}">
          <figure>
            <div class="frontalCard">
              <img class="frontalTop" src="${campeones.splash}"/>
              <h1 class="frontalText">${campeones.name}</h1>
              <p class="frontalText">${campeones.title}</p>
              <p class="frontalText">Dificultad: ${campeones.info.difficulty}</p>         
            </div>
            <div class="traseraCampeon">
                <img class="post-title" src="${campeones.img}"/>
                
                <h3 class="post-title">${campeones.name}</h3>
                <h3 class="post-title"> "${campeones.title}"</h3><hr>
                <p class="post-title"> "${campeones.blurb}"</p><hr>
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
                  <td class="table"> Hp </td>  
                  <td class="table">${campeones.stats.hp}</td>                 
                  </tr>

                   
                  <tr class="table">
                  <td class="table"> MP </td> 
                  <td class="table">${campeones.stats.mp}</td>
                  </tr>
                  
                   
                  <tr class="table">
                  <td class="table"> Armor </td> 
                  <td class="table">${campeones.stats.armor}</td>
                  </tr>
                  
                   
                  <tr class="table">
                  <td class="table"> Spellblock </td> 
                  <td class="table">${campeones.stats.spellblock}</td>
                  </tr>
                  
                    
                  <tr class="table">
                  <td class="table"> Hpregen </td>                  
                  <td class="table">${campeones.stats.hpregen}</td>
                  </tr>
                
                </table class="table">
                <h2 class="post-Info-attack">Rol: ${campeones.tags}</h2>
              </div>
            </figure>
        </div>`
    }
  }

  if (result.innerHTML == '') {
    result.innerHTML +=
      `<div class="frontalCard">
      <div class="front-Hp">No existe</div>
    </div>`
  }
}

searchInput.addEventListener('keyup', buscador)