import { filteredPokemon, orderPokemonUpward, orderPokemonDownward } from '../src/data.js';
const testPokemon = {
  "pokemon":[ 
    { 
      "name": "charizard",
      "type": [
        "fire",
        "flying"]
    },
    {
      "name": "squirtle",
      "type": [
        "water"]
    },
    { 
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"]
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

const pokemonAbc = {
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
        "flying"]
    },
    {
      
      "name": "squirtle",
      "type": [
        "water"]
    }
]
 };

 const pokemonZwy = {
  "pokemon":[ 
    {
      
      "name": "squirtle",
      "type": [
        "water"]
    },
    { 
      "name": "charizard",
      "type": [
        "fire",
        "flying"]
    },
    { 
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"]
    }

]
 };




describe('filteredPokemon', () => {
  it('is a function', () => {
    expect(typeof filteredPokemon).toBe('function');
  });

  it('returns `filteredPokemon`', () => {
    expect(filteredPokemon(testPokemon.pokemon,'grass')).toEqual(grassPokemon); //(expect.arrayContaining(expected)({'name':'bulbasaur','type':['grass','poison']}));
  });
});


describe('orderPokemonUpward', () => {
  it('is a function', () => {
    expect(typeof orderPokemonUpward).toBe('function');
  });

  it('returns `orderPokemonUpward`', () => {
    expect(orderPokemonUpward(testPokemon.pokemon)).toEqual(pokemonAbc.pokemon);
  });
});

describe('orderPokemonDownward', () => {
  it('is a function', () => {
    expect(typeof orderPokemonDownward).toBe('function');
  });


  it('returns `orderPokemonDownward`', () => {
    expect(orderPokemonDownward(testPokemon.pokemon)).toEqual(pokemonZwy.pokemon);
  })
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