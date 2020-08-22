import filter from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  search = document.querySelector('.search'),
  arrayLegends = Object.values(datos);

/*---LISTAR EN EL HTML---*/
const listLegends = (name, img) => {

  const legend = document.createElement('div'),
    imgLegend = document.createElement('img'),
    nameLegend = document.createElement('div');

  nameLegend.innerHTML += name;
  legend.setAttribute('class', 'legends');
  imgLegend.setAttribute('class', 'img-container');
  imgLegend.setAttribute('src', img);
  nameLegend.setAttribute('class', 'name');

  document.getElementById('legends_container').appendChild(legend);
  legend.appendChild(imgLegend);
  legend.appendChild(nameLegend);

}

/*---TRAER DATA---*/

const getLegends = (objLegend) => {
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let img = objLegend[i].splash;
    listLegends(name, img);
  }
}

getLegends(arrayLegends);

/*---FILTRO DE LA DATA---*/

search.addEventListener('click', (e) => {
  const rol = e.target.id
  const result = arrayLegends.filter(
    (objLegend) => {
      return objLegend.tags.includes(rol);
    }
  )
  //console.log('result', result)
  document.getElementById('legends_container').innerHTML='';
  getLegends(result);
})


/*---ORDENAR DE LA DATA---*/
const selector = document.querySelector('#order')
//console.log('selector', selector)
selector.addEventListener('click', (e) => {
  const order = e.target.value
  if (order == 'asc') {
    return arrayLegends.sort(
      (a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 :
      (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 :
      0
    )

  } else {
    return arrayLegends.sort(
      (a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 :
      (a.name.toLowerCase() < b.toLowerCase()) ? -1 :
      0
    )
  }
})
const roles = ['marksman', 'support', 'Fighter', 'Diana']
//console.log('organizar', roles.sort())

const asc = roles.sort(
  (a, b) => (a.toLowerCase() < b.toLowerCase()) ? 1 :
  (a.toLowerCase() > b.toLowerCase()) ? -1 :
  0
)
//console.log('organizar123', asc)
