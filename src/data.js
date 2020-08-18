// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

//Función para ordenar descendentemente por número
export let orderDesc = () => {
  data.pokemon.sort((b, a) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar descendentemente por número

//Función para ordenar ascendentemente por número
export let orderAsc = () => {
  data.pokemon.sort((a, b) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar ascendentemente por number

//Función para ordenar ascendentemente por Name
export let orderAscName= () => {
  data.pokemon.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar ascendentemente por name

//Función para ordenar descendente por Name
export let  orderDescName= () => {
  data.pokemon.sort((b, a) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name> b.name) {
      return 1;
    }
    return 0;
  });
}
//Fin función para ordenar descendente por name