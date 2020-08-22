import { filteredPokemon } from '../src/data.js';
const testPokemon = {
  "pokemon":[ 
    { 
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"]
  },
    { 
      "name": "charizard",
      "type": [
        "fire",
        "flying"
    ]
  },
    {
      
      "name": "squirtle",
      "type": [
        "water"
      ]
    }
]
 };

 const grassPokemon = [ 
  { 
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"]
    }];

describe('filteredPokemon', () => {
  it('is a function', () => {
    expect(typeof filteredPokemon).toBe('function');
  });

  it('returns `filteredPokemon`', () => {
    expect(filteredPokemon(testPokemon.pokemon,'grass')).toEqual(grassPokemon); //(expect.arrayContaining(expected)({'name':'bulbasaur','type':['grass','poison']}));
  });
});

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/