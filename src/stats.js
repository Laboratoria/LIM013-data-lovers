import order from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  arrayLegends = Object.values(datos);

let level = 0;

/* const prodNivel = arrayLegends.map(
  (item) => {
    const name = item.name
    const hp = item.stats.hp + (item.stats.hpperlevel * level)
    return name + ': ' + hp
  }) 
  console.log('prodNivel',prodNivel[0])*/




/**HTML */
const listStats = (name, splash, hp, hpActual, mp, mpActual, attackdamage, attackActual, iddiv) => {
  console.log('mpActual',mpActual);
  document.querySelector(iddiv).innerHTML = '';

  const legends_stats1 = document.createElement('div'),
    nameLegend = document.createElement('p'),
    statsLegend = document.createElement('p'),
    image = document.createElement('img');

  nameLegend.innerHTML += name;
  statsLegend.innerHTML += `<p>Vida por Nivel: ${hp}</p>
                            <p>Vida Actual: ${hpActual}</p>
                            <p>Mana por NIvel : ${mp}</p>
                            <p>Mana Actual: ${mpActual}</p>
                            <p>Ataque por Nivel: ${attackdamage}</p>
                            <p>Ataque Actual: ${attackActual}</p>`;
  nameLegend.setAttribute('class', 'name');
  legends_stats1.setAttribute('class', 'legends_stats1');
  image.setAttribute('src', splash);

  document.querySelector(iddiv).appendChild(legends_stats1);
  legends_stats1.appendChild(nameLegend);
  legends_stats1.appendChild(image);
  legends_stats1.appendChild(statsLegend);

}

/*TRAER DATA ESTADÍSTICAS (hpper level, mpper level, attack damage per level)*/
const getStats = (objLegend, selected, iddiv) => {
  console.log('level123', level);
  console.log('select123', selected);
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let splash = objLegend[i].splash;
    let hp = objLegend[i].stats.hp;
    let hpActual = order.hpperLevel(objLegend, level, i);
    let mp = objLegend[i].stats.mp;
    let mpActual = order.mpperLevel(objLegend, level, i);
    let attackdamage = objLegend[i].stats.attackdamage;
    let attackActual = order.attackperLevel(objLegend, level, i);

    if (objLegend[i].name == selected) {
      listStats(name, splash, hp, hpActual, mp, mpActual, attackdamage, attackActual, iddiv);
    }
  }
};

/*METODO MAP */
/* const prodNivel = arrayLegends.map(
  (item) => {
    const name = item.name
    const hp = item.stats.hpperlevel * level
    return name + ': ' + hp
  })  */
/*  const level = e.target.value;
 const position = 1;
 const prodNivel = order.statsPerLevel(arrayLegends,level,position)
 console.log('prueba', prodNivel) */
;
//console.log('prueba', prodNivel)
//return prodNivel;

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

legend01.addEventListener('change', (e) => {
  const legend = e.target.value
  //console.log('prueba123',e.target.value);

  getStats(arrayLegends, legend, "#legends_list_izquierda");
})

legend02.addEventListener('change', (e) => {
  const legend = e.target.value
  //console.log('prueba123',e.target.value);

  getStats(arrayLegends, legend, "#legends_list_derecha");

})

const inputLevel = document.getElementById('number');
inputLevel.addEventListener('change', (e) => {
  level = parseInt(e.target.value);
  console.log('level', level)
  if (level === '') {
    level = 1
  }
  getStats(arrayLegends, document.querySelector('#select01').value, "#legends_list_izquierda");
  getStats(arrayLegends, document.querySelector('#select02').value, "#legends_list_derecha")
});
