import data from './data/lol/lol.js';

const datos = data.data,
    arrayLegends = Object.values(datos);

/*ESTADÍSTICAS MÉTODO MAP (hpper level, mpper level, attack damage per level)*/
const prodNivel = arrayLegends.map( 
  (item) => {
    const name = item.name
    const hp = item.stats.hpperlevel * 1
    return name + ': ' + hp
  } 
)

console.log('prueba', prodNivel);

/*ESTADISTICA SELECT */

const legend01 = document.querySelector('#select01')
//console.log('legen01', legend01)
for (let i = 0; i < arrayLegends.length; i++) {
  let option = document.createElement('option');
  option.value = arrayLegends[i].name;
  option.innerText = arrayLegends[i].name;
  legend01.appendChild((option));

}

const legend02 = document.querySelector('#select02')
for (let i = 0; i < arrayLegends.length; i++) {
  let option = document.createElement('option');
  option.value = arrayLegends[i].name;
  option.innerText = arrayLegends[i].name;
  legend02.appendChild((option))
}