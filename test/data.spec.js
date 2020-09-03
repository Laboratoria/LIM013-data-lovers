import { filterByType,sortByName,filterByName,computeByStats } from '../src/data.js';
// import data from '../src/data/pokemon/pokemon.js';

// const testPokemon = {
//   "pokemon":[{"num": "001" , "name": "charizard","type": ["fire","flying"]},
//      {"num": "003" , "name": "squirtle","type": ["water"]},
//      {"num": "002" , "name": "bulbasaur","type": ["grass","poison"]},
//      ]
//  };

//  const grassPokemon = [ 
//   {"num": "002" , "name": "bulbasaur","type": ["grass","poison"]
//   }];

const dataPokemon = [
     {num: "001" , name: "bulbasaur", type: [ "grass","poison" ]},
     {num: "002" , name: "ivysaur" , type: [ "grass","poison" ]},
     {num: "003" , name: "venusaur", type: [ "grass","poison" ]},
     {num: "004", name: "charmander", type: [ "fire" ]}
  ];
const filterGrass = [
    {num: "001" , name: "bulbasaur" , type: [ "grass","poison" ]},
    {num: "002" , name: "ivysaur", type: [ "grass","poison" ]},
    {num: "003" , name: "venusaur" , type: [ "grass","poison" ]},
 ];

const orderName = [
    {num:"001", name:"bulbasaur", type:["grass","poison"]},
    {num: "004", name: "charmander", type:["fire"]},
    {num: "002", name: "ivysaur", type:["grass","poison"]},
    {num: "003", name: "venusaur", type:["grass","poison"]}
];

const serchName = [
    {num: "004", name: "charmander", type:["fire"]}
];



describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns `type grass`', () => {
    expect(filterByType(dataPokemon,"grass")).toEqual(filterGrass)
    
  });
});


describe('sortByName', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns `A-Z`', () => {
    expect(sortByName(dataPokemon,"A-Z")).toEqual(orderName);
  });
}); 


describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('returns `name charmander`', () => {
    expect(filterByName(dataPokemon,"charmander")).toEqual(serchName);
  });
}); 


describe('computeByStats', () => {
  it('is a function', () => {
    expect(typeof computeByStats).toBe('function');

  });

  const pokemon = [
    {num: "002", name: "ivysaur", type:["grass","poison"],stats:{"base-attack": "151","base-defense": "143","base-stamina": "155","max-cp": "1699","max-hp": "134"},
    }
  ];
  const resultPc = [
    {num: "002", name: "ivysaur", type:["grass","poison"],stats:{"base-attack": "151","base-defense": "143","base-stamina": "155","max-cp": "1699","max-hp": "134"},
    }
  ];
  
  it('returns `2131`', () => {
    expect(computeByStats(pokemon,"2131")).toEqual(resultPc);
  });
}); 