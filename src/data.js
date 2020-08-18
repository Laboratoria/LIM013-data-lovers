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
    //Fin función para ordenar ascendentemente por número