import data from './data/lol/lol.js';

const datos = data.data,
  arrayLegends = Object.values(datos);

  /*TRAER DATA ESTADÍSTICAS*/
const listStats=(objLegend)=>{
  for (let i=0; i<objLegend.length; i++){
    let hpperlevel= objLegend[i].hpperlevel;
    let mpperlevel=objLegend[i].mpperlevel;
    let attackdamageperlevel= objLegend[i].attackdamageperlevel;
    statsLegends(hpperlevel, mpperlevel, attackdamageperlevel);
  }
};


/*ESTADÍSTICAS MÉTODO MAP (hpper level, mpper level, attack damage per level)*/
/*LISTAR EN HTML */
const statsLegends=(hpperlevel, mpperlevel, attackdamageperlevel)=>{
  const stats=document.createElement('div'),
    hpperlevelChampion=document.createElement('div'),
    mpperlevelChampion=document.createElement('div'),
    attackdamageperlevelChampion=document.createElement('div');

  

}

/*METODO MAP */
const level=document.getElementById('number');
const championInput=document.getElementById('legend01')
level.addEventListener('click', (e)=>{
  const level=e.target.value;

  console.log(level);
  const prodNivel = arrayLegends.map( 
    (item) => {
      const name = item.name
      const hp = item.stats.hpperlevel * level
      return name + ': ' + hp
    })
    console.log('prueba', prodNivel);
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

