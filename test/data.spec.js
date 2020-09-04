import { filterByType,sortByName,filterByName,computeByStats } from '../src/data.js';

const dataPokemon = [
  { num: "001", name: "bulbasaur", type: [ "grass","poison" ]},
  { num: "002", name: "ivysaur", type: [ "grass","poison" ]},
  { num: "003", name: "venusaur", type: [ "grass","poison" ]},
  { num: "004", name: "charmander", type: [ "fire" ]},
  { num: "005", name: "abra", type: [ "psychic" ]}
];


const filterByGrass = [
  { num: "001", name: "bulbasaur", type: [ "grass","poison" ]},
  { num: "002", name: "ivysaur", type: [ "grass","poison" ]},
  { num: "003", name: "venusaur", type: [ "grass","poison" ]}
];

const filterByFire = [
  { num: "004", name: "charmander", type: [ "fire" ]}
];

const filterByPsychic= [
  { num: "005", name: "abra", type: [ "psychic" ]}
];

const filterByPoison = [
  { num: "001", name: "bulbasaur", type: [ "grass","poison" ]},
  { num: "002", name: "ivysaur", type: [ "grass","poison" ]},
  { num: "003", name: "venusaur", type: [ "grass","poison" ]}
];


const sortByAZ = [
  { num: "005", name: "abra", type: [ "psychic" ]},
  { num: "001", name: "bulbasaur", type:["grass","poison"]},
  { num: "004", name: "charmander", type:["fire"]},
  { num: "002", name: "ivysaur", type:["grass","poison"]},
  { num: "003", name: "venusaur", type:["grass","poison"]}
];

const sortByZA = [
  { num: "003", name: "venusaur", type:["grass","poison"]},
  { num: "002", name: "ivysaur", type:["grass","poison"]},
  { num: "004", name: "charmander", type:["fire"]},
  { num: "001", name: "bulbasaur", type:["grass","poison"]},
  { num: "005", name: "abra", type: [ "psychic" ]}
];

const sortByNumZ= [
  { num: "005", name: "abra", type: [ "psychic" ]},
  { num: "004", name: "charmander", type:["fire"]},
  { num: "003", name: "venusaur", type:["grass","poison"]},
  { num: "002", name: "ivysaur", type:["grass","poison"]},
  { num: "001", name: "bulbasaur", type:["grass","poison"]},
];

const sortByNumA= [
  { num: "001", name: "bulbasaur", type:["grass","poison"]},
  { num: "002", name: "ivysaur", type:["grass","poison"]},
  { num: "003", name: "venusaur", type:["grass","poison"]},
  { num: "004", name: "charmander", type:["fire"]},
  { num: "005", name: "abra", type: [ "psychic" ]}  
];


const filterByAbra = [
  { num: "005", name: "abra", type:["psychic"]}
];

const filterByVenusaur = [
  { num: "003", name: "venusaur", type:["grass","poison"]}
];

const filterByBulbasaur = [
  { num: "001", name: "bulbasaur", type:["grass","poison"]},
];

const filterByIvysaur = [
  { num: "002", name: "ivysaur", type:["grass","poison"]},
];

const pokemonstats =  ["151","143","155","1699","134"];

const computeByPc = 2282;


describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns `type grass`', () => {
    expect(filterByType(dataPokemon,"grass")).toEqual(filterByGrass);
  });

  it('returns `type fire`', () => {
    expect(filterByType(dataPokemon,"fire")).toEqual(filterByFire);
  });

  it('returns `type psychic`', () => {
    expect(filterByType(dataPokemon,"psychic")).toEqual(filterByPsychic);
  });

  it('returns `type poison`', () => {
    expect(filterByType(dataPokemon,"poison")).toEqual(filterByPoison);
  });
});


describe('sortByName', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns `orden A-Z`', () => {
    expect(sortByName(dataPokemon,"A-Z")).toEqual(sortByAZ);
  });

  it('returns `orden Z-A`', () => {
    expect(sortByName(dataPokemon,"Z-A")).toEqual(sortByZA);
  });

  it('returns `numero superior`', () => {
    expect(sortByName(dataPokemon,"Número superior")).toEqual(sortByNumZ);
  });

  it('returns `numero inferior`', () => {
    expect(sortByName(dataPokemon,"Número inferior")).toEqual(sortByNumA);
  });
}); 


describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('returns `name Abra`', () => {
    expect(filterByName(dataPokemon,"abra")).toEqual(filterByAbra);
  });

  it('returns `name Venusaur`', () => {
    expect(filterByName(dataPokemon,"venusaur")).toEqual(filterByVenusaur);
  });

  it('returns `name Bulbasaur`', () => {
    expect(filterByName(dataPokemon,"bulbasaur")).toEqual(filterByBulbasaur);
  });

  it('returns `name Ivysaur`', () => {
    expect(filterByName(dataPokemon,"ivysaur")).toEqual(filterByIvysaur);
  });
}); 


describe('computeByStats', () => {
  it('is a function', () => {
    expect(typeof computeByStats).toBe('function');
  });

  it('returns `2131`', () => {
    expect(computeByStats(pokemonstats)).toEqual(computeByPc);
  });
}); 