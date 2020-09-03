import { filterByType,sortByName,filterByName,computeByStats } from '../src/data.js';

const dataPokemon = [
  { num: "001", name: "bulbasaur", type: [ "grass","poison" ]},
  { num: "002", name: "ivysaur", type: [ "grass","poison" ]},
  { num: "003", name: "venusaur", type: [ "grass","poison" ]},
  { num: "004", name: "charmander", type: [ "fire" ]},
  { num: "005", name: "abra", type: [ "psiquico" ]}
];

const filterByGrass = [
  { num: "001", name: "bulbasaur", type: [ "grass","poison" ]},
  { num: "002", name: "ivysaur", type: [ "grass","poison" ]},
  { num: "003", name: "venusaur", type: [ "grass","poison" ]}
];

const sortByAZ = [
  { num: "005", name: "abra", type: [ "psiquico" ]},
  { num: "001", name:"bulbasaur", type:["grass","poison"]},
  { num: "004", name: "charmander", type:["fire"]},
  { num: "002", name: "ivysaur", type:["grass","poison"]},
  { num: "003", name: "venusaur", type:["grass","poison"]}
];

const filterByAbra = [
  { num: "005", name: "abra", type:["psiquico"]}
];


describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns `type grass`', () => {
    expect(filterByType(dataPokemon,"grass")).toEqual(filterByGrass)
    
  });
});


describe('sortByName', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns `orden A-Z`', () => {
    expect(sortByName(dataPokemon,"A-Z")).toEqual(sortByAZ);
  });
}); 


describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('returns `name Abra`', () => {
    expect(filterByName(dataPokemon,"abra")).toEqual(filterByAbra);
  });
}); 


const pokemonstats =  [ "151","143","155","1699","134"];

const computeByPc = 2282;


describe('computeByStats', () => {
  it('is a function', () => {
    expect(typeof computeByStats).toBe('function');
  });

  it('returns `2131`', () => {
    expect(computeByStats(pokemonstats)).toEqual(computeByPc);
  });
}); 