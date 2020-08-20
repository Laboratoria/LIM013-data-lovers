import { example } from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  search = document.querySelector('.search');
//console.log('datos',datos)

//console.log('diana',legends_cards.appendChild(legends))
//console.log(Object.keys(data.data))
//console.log(Object.values(data.data))

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
const getLegends = () => {

  for (const prop in datos) {
    //console.log('prop',prop);
    let name = datos[`${prop}`].name;
    let img = datos[`${prop}`].splash;
    listLegends(name, img);
  }

}

/*---FILTRO DE LA DATA---*/

const arrayLegends = Object.values(datos)
const result = arrayLegends.filter(
  (objLegend) => {
    //console.log('objLegend',objLegend.tags)
    return objLegend.tags == 'Marksman';

    //console.log('objLegend.tags',objLegend.tags[0]); 
  }
)

/* function hola (){
} */

/* const hola = () => {
} */
console.log('result',result);

getLegends();

search.addEventListener('click', (e) => {
  //console.log('event',e.target.id)
  const rol = e.target.id
  //console.log('rol',rol)
  const arrayLegends = Object.values(datos)
  const result = arrayLegends.filter(
    (objLegend) => {
      return objLegend.tags.includes(rol);
    }
  )
  console.log('result',result)
  return result
})

/*ORDENAR */
const roles = ['marksman', 'support', 'Fighter', 'Diana']
console.log('organizar',roles.sort())
const asc = roles.sort(
  (a, b) => (a.toLowerCase() > b.toLowerCase()) ? 1 :
  (a.toLowerCase() < b.toLowerCase()) ? -1 :
  0
)


