import data from './data/lol/lol.js';

const datos = data.data,
  arrayLegends = Object.values(datos);

/**HTML */
const listStats = (name, splash, hpperlevel, mpperlevel, attackdamageperlevel) => {
  const legends_list = document.createElement('div'),
    legends_stats1 = document.createElement('div'),
    legends_stats2 = document.createElement('div'),
    nameLegend = document.createElement('p'),
    statsLegend = document.createElement('p'),
    image = document.createElement('img');
  //legends_stats1.innerHTML = '';
  //legends_stats2.innerHTML = '';
  nameLegend.innerHTML += name;
  statsLegend.innerHTML += `<p>HpperLevel: ${hpperlevel}</p>
                            <p>MpperLevel: ${mpperlevel}</p>
                            <p>AttackDamageperLevel: ${attackdamageperlevel}</p>`;
  legends_list.setAttribute('class', 'legends_list');
  legends_stats1.setAttribute('class', 'legends_stats1');
  legends_stats2.setAttribute('class', 'legends_stats2');

  image.setAttribute('src', splash);

  document.querySelector('.legends_container').appendChild(legends_list);
  legends_list.appendChild(legends_stats1);
  legends_stats1.appendChild(nameLegend);
  legends_stats1.appendChild(image);
  legends_stats1.appendChild(statsLegend);

  legends_list.appendChild(legends_stats2);
  legends_stats2.appendChild(nameLegend);
  legends_stats2.appendChild(image);
  legends_stats2.appendChild(statsLegend);

}

/*TRAER DATA ESTADÍSTICAS (hpper level, mpper level, attack damage per level)*/
const getStats = (objLegend,selected) => {
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let splash = objLegend[i].splash;
    let hpperlevel = objLegend[i].stats.hpperlevel;
    let mpperlevel = objLegend[i].stats.mpperlevel;
    let attackdamageperlevel = objLegend[i].stats.attackdamageperlevel;
    //console.log('OBJECT',objLegend[i].name);
    if(objLegend[i].name == selected){
      console.log('select',selected)
      listStats(name, splash, hpperlevel, mpperlevel, attackdamageperlevel);
    }
    
  }
};

//getStats(arrayLegends);

/*METODO MAP */
const level = document.getElementById('number');

level.addEventListener('click', (e) => {
  const level = e.target.value;

  console.log(level);
  const prodNivel = arrayLegends.map(
    (item) => {
      const name = item.name
      const hp = item.stats.hpperlevel * level
      return name + ': ' + hp
    })
  //console.log('prueba', prodNivel);
  return prodNivel;
});


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

legend01.addEventListener('change',(e) => {
  const legend = e.target.value
  //console.log('prueba123',e.target.value);
  getStats(arrayLegends,legend);
})
legend02.addEventListener('change',(e) => {
  const legend = e.target.value
  //console.log('prueba123',e.target.value);
  getStats(arrayLegends,legend);
})