import {filterForNumber, extractImgPok,sortByAsc, sortByDesc } from '../src/data.js';
import {sortByLessPwr, sortByMorePwr,filterByType, searchByNameandNum } from '../src/data.js';

const dataPok = [{"num": "001","name": "bulbasaur","img": "001.png","type":["grass", "poison"],"stats":{"max-hp":"10"}},
                {"num": "002","name": "ivysaur","img": "002.png","type":["grass", "poison"],"stats":{"max-hp":"30"}},
                {"num": "003","name": "venusaur","img": "003.png","type":["rock"],"stats":{"max-hp":"40"}},
                {"num": "004","name": "charmander","img": "004.png","type":["fire"],"stats":{"max-hp":"20"}}];


const arrayPok003 =[{"num": "003","name": "venusaur","img": "003.png","type":["rock"],"stats":{"max-hp":"40"}}];


const resultsortByAscLP=[{"num": "001","name": "bulbasaur","img": "001.png","type":["grass", "poison"],"stats":{"max-hp":"10"}},
                        {"num": "004","name": "charmander","img": "004.png","type":["fire"],"stats":{"max-hp":"20"}},
                        {"num": "002","name": "ivysaur","img": "002.png","type":["grass","poison"],"stats":{"max-hp":"30"}},
                        {"num": "003","name": "venusaur","img": "003.png","type":["rock"],"stats":{"max-hp":"40"}}];
                      
const resultsortByDescMP=[{"num": "003","name": "venusaur","img": "003.png","type":["rock"],"stats":{"max-hp":"40"}},
                        {"num": "002","name": "ivysaur","img": "002.png","type":["grass","poison"],"stats":{"max-hp":"30"}},
                        {"num": "004","name": "charmander","img": "004.png","type":["fire"],"stats":{"max-hp":"20"}},
                        {"num": "001","name": "bulbasaur","img": "001.png","type":["grass", "poison"],"stats":{"max-hp":"10"}}];
                              
describe('filtrar por número de pokedex', () => {
  it('is a function', () => {
    expect(typeof filterForNumber).toBe('function');
  });

  it('return pokemon (003)', () => {
    expect(filterForNumber(dataPok,"003")).toEqual(arrayPok003);
  }); 
});

describe('devolver valor de img por número filtrado', () => {
  it('is a function', () => {
    expect(typeof extractImgPok).toBe('function');
  });
  it('return "images/available.png"', () => {
    expect(extractImgPok(dataPok,"444")).toEqual("images/available.png");
  });
  it('return "002.png"', () => {
    expect(extractImgPok(dataPok,"002")).toEqual("002.png");
  });
  
});

describe('Devolver array ordenado de forma ascendente', () => {
  it('is a function', () => {
    expect(typeof sortByAsc).toBe('function');
  });
  it('return dataPok ordenado de A-Z', () => {
    expect(sortByAsc(dataPok)).toEqual(resultsortByAscLP);
  });
  it('return array de longitud 4', () => {
    expect(sortByAsc(dataPok)).toHaveLength(4);
  });
  
});

describe('Devolver array ordenado de forma descendente', () => {
  it('is a function', () => {
    expect(typeof sortByDesc).toBe('function');
  });
  it('return dataPok ordenado de Z-A', () => {
    expect(sortByDesc(dataPok)).toEqual(resultsortByDescMP);
  });
  it('return array de longitud 4', () => {
    expect(sortByDesc(dataPok)).toHaveLength(4);
  });
  
});

describe('Devolver array ordenado de +poder a -poder', () => {
  it('is a function', () => {
    expect(typeof sortByLessPwr).toBe('function');
  });
  it('return dataPok ordenado de menor a mayor poder', () => {
    expect(sortByLessPwr(dataPok)).toEqual(resultsortByDescMP);
  });
  it('return array de longitud 4', () => {
    expect(sortByLessPwr(dataPok)).toHaveLength(4);
  });

});

describe('Devolver array ordenado de -poder a +poder', () => {
  it('is a function', () => {
    expect(typeof sortByMorePwr).toBe('function');
  });
  it('return dataPok ordenado de mayor a menor poder', () => {
    expect(sortByMorePwr(dataPok)).toEqual(resultsortByDescMP);
  });
  it('return array de longitud 4', () => {
    expect(sortByMorePwr(dataPok)).toHaveLength(4);
  });
  
  
});

describe('Devolver array cuyo tipo sea el mismo que introducimos', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('return array con un objeto cuyo tipo ="rock"', () => {
    expect(filterByType(["rock"],dataPok)).toEqual(arrayPok003);
  });
  it('return array con dos elementos', () => {
    expect(filterByType(["grass","poison"] , dataPok)).toHaveLength(2);
  });
  
});

describe('Devolver un array que cumpla con a condición de search', () => {
  it('is a function', () => {
    expect(typeof searchByNameandNum).toBe('function');
  });

  it('return array con un objeto cuyo num=003', () => {
    expect(searchByNameandNum("003",dataPok)).toEqual(arrayPok003);
  });
  it('return array con un objeto cuyo name=venusaur', () => {
    expect(searchByNameandNum("venusaur",dataPok)).toEqual(arrayPok003);
  });
  it('return array vacio', () => {
    expect(searchByNameandNum("prueba",dataPok)).toEqual([]);
  });
  
});