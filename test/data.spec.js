import datajs from '../src/data.js';


describe('datajs', () => {
  it('deberia ser una function filtrar', () => {
    expect(typeof datajs.nameA_Z).toBe('function');
  });

  it('returnar orden desendiente `a-z`', () => {
    expect(datajs.nameA_Z()).toBe('example');
  });
});


describe('datajs.filterSpecies', () => {
  it('is a function', () => {
    expect(typeof data.filterSpecies).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
