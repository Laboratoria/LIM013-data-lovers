import datajs from '../src/data.js';
 import { desoA_Z, acomoA_Z } from './dataTest.js';

describe('datajs', () => {
  it('deberia ser una function filtrar', () => {
    expect(typeof datajs.nameA_Z).toBe('function');
  });

  it('returnar orden desendiente `a-z`', () => {
    expect(datajs.nameA_Z(desoA_Z)).toEqual(acomoA_Z);
  });
});

/*describe('datajs.filterSpecies', () => {
  it('is a function', () => {
    expect(typeof data.filterSpecies).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
