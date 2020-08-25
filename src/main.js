//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//funcion de segunda pagina//

const toplist = document.getElementById('topchamp'); 
      toplist.addEventListener('click', () => {
        document.getElementById('home').style.display='none';
        document.getElementById('topfive').style.display='block';
      });

const home = document.getElementById('iniciochamp'); 
      home.addEventListener('click', () => {
        document.getElementById('home').style.display='flex';
        document.getElementById('topfive').style.display='none';
        }); 

//evento para crear el top cinco//
function containerFunctions(array) {
  // const array = Object.values(LOL.data);
  // Segundo diseño de templates
  const arrayTopFive = lol.getTopFive(array);
  // templatepara el top cinco
  const templateListChampionTop = (list) => {
    let championsList = [];
    list.forEach((array) => {
      const templateList =
        `<div class='card-1'>
      <img class='champion' src='lol.js/${array.name}.png'></img>
      <h2 class='namechampion'>"${array.name}"</h2>
      <h3 class='hptext'><img class='img-hp' src='imagenes/puntovida.PNG'>PUNTOS DE VIDA : ${array.hp}</h3>
      </div>`;
      championsList += templateList;
    });
    document.getElementById('list-top-champions').innerHTML = championsList;
  };
  templateListChampionTop(arrayTopFive);
}

