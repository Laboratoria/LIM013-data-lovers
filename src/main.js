
import data from "./data/lol/lol.js";
import { filterData, sortData } from './data.js';

/*--cargar la data--*/
const objData = data.data;
const arrayData = Object.values(objData);


/*--llamar y mostrar la data--*/
const buttonChamps = document.getElementById("filchamp");
const containerList = document.getElementById("champion-three");

/ *TODO--listado--*/
let getChamps = (array) => {
  let arrayChamps = [];
  for (let i = 0; i < array.length; i++) {
    arrayChamps.push({
      name: array[i].name,
      title: array[i].title,
      splash: array[i].splash,
      info: array[i].info,
      blur: array[i].info,
      stats: array[i].stats,
      tags: array[i].tags,
    });
  }
  let rolChamps = [];
  let filterChamps = arrayChamps.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  return filterChamps.slice(0, 140);
};

let arrayChamps = getChamps(arrayData);
let showAarrayChamps = (array) => {
  for (let i = 0; i < array.length; i++) {
    containerList.innerHTML += ` 
        <div class="card-Champ">
          <figure>
          <img class="frontalTop" src="${array[i].splash}"/>
          <div class="traseraTop">
            <li class="post-names">${array[i].name}</li>
            <li class="post-title">${array[i].title}</li>
            <li class="post-dificultad">Dificultad: ${array[i].info.difficulty}</li>
          </div>
          </figure>
        </div>`;
  }
};
buttonChamps.addEventListener("click", showAarrayChamps(arrayChamps));
console.log(arrayChamps)
/*--listado--*/
const ul = document.querySelector('.menu');
const ul2 = document.querySelector('.menu2');
const li = document.querySelectorAll('.menu li');
const li2 = document.querySelectorAll('.menu2 li');
const cleanClasses = () => {
  ul.querySelector('.active').classList.remove('active');
  ul2.querySelector('.active').classList.remove('active');
  li[0].classList.add('active');
  li2[0].classList.add('active');
};

input.addEventListener('keyup', (evt) => {
  const term = evt.target.value.toLowerCase();
  const filteredChampions = filterByName(championList, term);

  const errorMessage = document.querySelector('#error');
  if (filteredChampions.length === 0) {
      errorMessage.classList.remove('hidden');
  } else {
      errorMessage.classList.add('hidden');
  }
  list.innerHTML = '';

  // limpiando de clases de dificultad
  cleanClasses();
  cleanDifficulty(difficulty1);
  functionCardsStructure(filteredChampions);
},
false);