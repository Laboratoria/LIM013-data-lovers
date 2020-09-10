import order from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  arrayLegends = Object.values(datos);

let level = 0;

/*MENU BURGUER */
let button = document.getElementById('icon');
let links = document.getElementById('links');
let count = 0;

button.addEventListener('click', () => {
  if (count == 0) {
    links.className = ('links closedMenu');
    count = 1;
  } else {
    links.classList.remove('openMenu');
    links.className = ('links openMenu');
    count = 0;
  }
})

/**HTML */
const listStats = (name, splash, hp, hpActual, mp, mpActual, attackdamage, attackActual, iddiv) => {
  //console.log('mpActual', mpActual);
  document.querySelector(iddiv).innerHTML = '';

  const legends_stats1 = document.createElement('div'),
    nameLegend = document.createElement('p'),
    statsLegend = document.createElement('p'),
    image = document.createElement('img');

  nameLegend.innerHTML += name;
  statsLegend.innerHTML += `<p>Vida por Nivel: ${hp}</p>
                            <h3>Vida Actual: ${hpActual}</h3>
                            <p>Mana por NIvel : ${mp}</p>
                            <h3>Mana Actual: ${mpActual}</h3>
                            <p>Ataque por Nivel: ${attackdamage}</p>
                            <h3>Ataque Actual: ${attackActual}</h3>`;
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
  //console.log('level123', level);
  //console.log('select123', selected);
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let splash = objLegend[i].splash;
    let hp = objLegend[i].stats.hp;
    let hpActual = order.hpperLevel(objLegend, level, i);
    let mp = objLegend[i].stats.mp;
    let mpActual = order.mpperLevel(objLegend, level, i);
    let attackdamage = objLegend[i].stats.attackdamage;
    let attackActual = order.attackperLevel(objLegend, level, i);

    if (objLegend[i].name == selected && level <=18) {
      listStats(name, splash, hp, hpActual, mp, mpActual, attackdamage, attackActual, iddiv);
    }
  }
};

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
  getStats(arrayLegends, legend, "#legends_list_izquierda");
})

legend02.addEventListener('change', (e) => {
  const legend = e.target.value
  getStats(arrayLegends, legend, "#legends_list_derecha");

})

const inputLevel = document.getElementById('number');
inputLevel.addEventListener('change', (e) => {
  level = parseInt(e.target.value);
  //console.log('level', level)
  if (level === '') {
    level = 1
  } else if (level >18){
    alert('Just only numbers between 1 and 18')
  }
  getStats(arrayLegends, document.querySelector('#select01').value, "#legends_list_izquierda");
  getStats(arrayLegends, document.querySelector('#select02').value, "#legends_list_derecha")
});

/*CANVAS */
let stats = ['hpperlevel','hpActual','mpperlevel','mpActual','attackdamage','attackActual']
let color= Chart.helpers.color;
window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};
let barChartData ={
  labels: ['hpActual', 'mpActual', 'attackActual'],
  datasets:[{
    label: 'Campeón 1',
    backgroundColor: color(window.chartColors.orange,).alpha(0.5).rgbString(),
    borderColor:window.chartColors.orange,
    borderWidth:1,
    data:[
      order.hpperLevel(arrayLegends, level, 0),
      order.mpperLevel(arrayLegends, level, 0),
      order.attackperLevel(arrayLegends, level, 0)
    ]
  },{
    label: 'Campeón 2',
    backgroundColor: color(window.chartColors.blue,).alpha(0.5).rgbString(),
    borderColor:window.chartColors.blue,
    borderWidth:1,
    data:[
      order.hpperLevel(arrayLegends, level, 1),
      order.mpperLevel(arrayLegends, level, 1),
      order.attackperLevel(arrayLegends, level, 1)
    ]
  }]
};

window.onload = function() {
  var ctx = document.getElementById('canvas').getContext('2d');
  window.myBar = new Chart(ctx, {
    //type: 'pie',-- en caso quieras cambiar e tipo de gráfico, solo se cambia el type
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  });

};
