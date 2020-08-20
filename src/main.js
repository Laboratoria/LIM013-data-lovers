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


/* const roles = ['Marksman', 'Support', 'Mage', 'Fighter']
const rol = roles.filter(
  rol => rol == 'Mage'
)
console.log('rol', rol)
const obj = {
  nombre: "name",
  edad: 42
};
const obj_2 = {
  nombre: "name2",
  edad: 54
}
const arrayDePersonas = [
  obj,
  obj_2,
  {
    nombre: 'diana',
    edad: 10
  },
  {
    nombre: 'Dani',
    edad: 18
  }
];
console.log(arrayDePersonas.filter(
  (objPersona) => {
    return objPersona.edad >= 18
  }
)) */


// const result = legendas.filter(
//   legenda => legenda ==  'Akali'
// )
// console.log('result',result);





