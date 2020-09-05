import { filterData, searchData, sortData } from '../src/data.js';

const inputData =
[
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
];

const outputFilterTypeG = [
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
];

const outputFilterTypeF = [
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
];

const outputSearchName = [
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
];

const outputSearchNumber = [
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},];

  const outputSortNumber = [
    {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
    {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
    {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
    {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
    {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
  ];
  
  const outputSortName = [
    {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ]},
    {id: '4', num: '004', name: 'Charmander', type: ['Fire' ]},
    {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ]},
        {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ]},
    {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ]},
    
    
  ];

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');});

  it('debería retornar un array al filtrar por tipo Grass', () => {
    expect(filterData(inputData, 'Grass')).toEqual(outputFilterTypeG);
  });

  it('debería retornar un array al filtrar por tipo Fire', () => {
    expect(filterData(inputData, 'Fire')).toEqual(outputFilterTypeF);
  });
});

describe('searchData', () => {
  it('debería ser una función', () => {
    expect(typeof searchData).toBe('function');
  });

  it('debería retornar un array al realizar la busqueda por nombre', () => {
    expect(searchData(inputData, 'Charmander')).toEqual(outputSearchName);
  });

  it('debería retornar un array al realizar la busqueda por numero', () => {
    expect(searchData(inputData,'003')).toEqual(outputSearchNumber);
  });
});


describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });


  it('debería retornar un array al realizar el orden por numero', () => {
    expect(sortData(inputData, 'number','valueThree')).toEqual(outputSortNumber);
  });

  it('debería retornar un array al realizar el orden A-Z', () => {
    expect(sortData(inputData, 'name','valueTwo')).toEqual(outputSortName);
  });

});