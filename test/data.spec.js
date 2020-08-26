import datajs from '../src/data.js';
import { desoA_Z, acomoA_Z, dataFG } from './dataTest.js';

describe('datajs', () => {
  it('deberia ser una function filtrar', () => {
    expect(typeof datajs.nameA_Z).toBe('function');
  });

  it('returnar orden desendiente `a-z`', () => {
    expect(datajs.nameA_Z(desoA_Z)).toEqual(acomoA_Z);
  });
});
const nombreT = "esp";
const valotT = "Human";

describe('datajs.filterSpecies', () => {

  it('deberia ser una function filtrar', () => {
    expect(typeof datajs.filterSpecies).toBe('function');
  });

  it('Debería retornar la función de filtrar humanos', () => {
    expect(datajs.filterSpecies(desoA_Z, nombreT, valotT)).toEqual(dataFG);
  });
});
