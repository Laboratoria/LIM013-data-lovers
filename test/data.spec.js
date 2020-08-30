import datajs from '../src/data.js';
import { desoA_Z, acomoA_Z, ordensZ_A, reversZ_A, desordenC, correctC, buscan, buscado, generos, genero, desordenA, correctA, tierraA, tierraB, planeta, estados, estadosA } from './dataTest.js';

describe('datajs', () => {
  it('deberia ser una function filtrar', () => {
    expect(typeof datajs.nameA_Z).toBe('function');
  });
  //acendente y desendente
  it('debe de retornar  orden desendente `a-z`', () => {
    expect(datajs.nameA_Z(desoA_Z)).toEqual(acomoA_Z);
  });

  it('debe de retornar  orden desendente `a-z`', () => {
    expect(datajs.nameA_Z(acomoA_Z)).toEqual(acomoA_Z);
  });

  it('deberia ser una function filtrar', () => {
    expect(typeof datajs.nameZ_A).toBe('function');
  });

  it('debe de reotrnar orden acendente `Z-A`', () => {
    expect(datajs.nameZ_A(ordensZ_A)).toEqual(reversZ_A);
  });

  it('debe de reotrnar orden acendente `Z-A`', () => {
    expect(datajs.nameZ_A(ordensZ_A)).toEqual(ordensZ_A);
  });
  // filtros
  it('deberia ser una function filtrar Radios Human', () => {
    expect(typeof datajs.filterSpecies).toBe('function');
  });

  it('debe retornar filtro `humanos`', () => {
    expect(datajs.filterSpecies(desordenC, "esp", "Human")).toEqual(correctC);
  });

  it('debe retornar filtro `desconocido`', () => {
    expect(datajs.filterSpecies(desordenA, "esp", "otros")).toEqual(correctA);
  });

  it('debe retornar filtro `female`', () => {
    expect(datajs.filterSpecies(generos, "gener", "Female")).toEqual(genero);
  });

  it('debe retornar filtro `tierra`', () => {
    expect(datajs.filterSpecies(tierraA, "orig", "Earth")).toEqual(tierraB);
  });

  it('debe retornar filtro `Anatomy Park`', () => {
    expect(datajs.filterSpecies(tierraA, "orig", "Anatomy Park")).toEqual(planeta);
  });

  it('debe retornar filtro `Dead`', () => {
    expect(datajs.filterSpecies(estados, "estd", "Dead")).toEqual(estadosA);
  });

  // buscador
  it('deberia poder buscar', () => {
    expect(typeof datajs.filterName).toBe('function');
  });

  it('debe de retornar lo buscado', () => {
    expect(datajs.filterName(buscan, "summer")).toEqual(buscado);
  });
});

