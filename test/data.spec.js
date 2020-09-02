import { filterByType, sortByName, filterByName, computeByStats } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns `is a poison type`', () => {
    expect(filterByType(data.pokemon,'poison')).toEqual('poison');
  });
});


describe('sortByName', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });

  it('returns `is a A-Z list`', () => {
    expect(sortByName(data.pokemon,'A-Z')).toEqual('poison');
  });
}); 


describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('returns `Abra`', () => {
    expect(filterByName(data.pokemon,'abra')).toEqual(data.pokemon[0]);
  });
}); 


describe('computeByStats', () => {
  it('is a function', () => {
    expect(typeof computeByStats).toBe('function');
  });

  it('returns `puntos de combate`', () => {
    expect(computeByStats(data.pokemon,'A-Z')).toEqual('poison');
  });
}); 