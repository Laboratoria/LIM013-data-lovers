import {filterForNumber, extractImgPok,sortByAsc, sortByDesc } from '../src/data.js';
import {sortByLessPwr, sortByMorePwr,filterByType, searchByNameandNum } from '../src/data.js';




/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
const dataPok = [{"num": "001","name": "bulbasaur","img": "001.png","type":["grass", "poison"]},
                {"num": "002","name": "ivysaur","img": "002.png","type":["grass", "poison"]},
                {"num": "003","name": "venusaur","img": "003.png","type":["rock"]},
                {"num": "004","name": "charmander","img": "004.png","type":["fire"]}];

const arrayPok003 =[{"num": "003","name": "venusaur","img": "003.png","type":["rock"]}];

const arrayPok001002=[{"num": "001","name": "bulbasaur","img": "001.png","type":["grass", "poison"]},
                      {"num": "002","name": "ivysaur","img": "002.png","type":["grass", "poison"]}];


const resultsortByAsc=[{"num": "001","name": "bulbasaur","img": "001.png","type":["grass", "poison"]},
                      {"num": "004","name": "charmander","img": "004.png","type":["fire"]},
                      {"num": "002","name": "ivysaur","img": "002.png","type":["grass", "poison"]},
                      {"num": "003","name": "venusaur","img": "003.png","type":["rock"]}];
                      
const resultsortByDesc=[{"num": "003","name": "venusaur","img": "003.png","type":["rock"]},
                      {"num": "002","name": "ivysaur","img": "002.png","type":["grass", "poison"]},
                      {"num": "004","name": "charmander","img": "004.png","type":["fire"]},
                      {"num": "001","name": "bulbasaur","img": "001.png","type":["grass", "poison"]}];
                 
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
    expect(sortByAsc(dataPok)).toEqual(resultsortByAsc);
  });
  
});

describe('Devolver array ordenado de forma descendente', () => {
  it('is a function', () => {
    expect(typeof sortByDesc).toBe('function');
  });
  it('return dataPok ordenado de Z-A', () => {
    expect(sortByDesc(dataPok)).toEqual(resultsortByDesc);
  });
  
});

describe('Devolver array ordenado de +poder a -poder', () => {
  it('is a function', () => {
    expect(typeof sortByLessPwr).toBe('function');
  });
  
});

describe('Devolver array ordenado de -poder a +poder', () => {
  it('is a function', () => {
    expect(typeof sortByMorePwr).toBe('function');
  });
  
});

describe('Devolver array cuyo tipo sea el mismo que introducimos', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('return array con un objeto cuyo tipo ="rock"', () => {
    expect(filterByType(["rock"],dataPok)).toEqual(arrayPok003);
  });
  it('return array con un objeto cuyo tipo ="rock"', () => {
    expect(filterByType(["grass", "poison"],dataPok)).toEqual(arrayPok001002);
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
  
});