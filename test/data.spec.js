import { filterData, searchData, sortData,candyCalculate } from '../src/data.js';

const inputData =
[
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111", "max-cp": "1115"} },
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "143", "max-cp": "1699"}},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "189", "max-cp": "2720"}},
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ],stats: {"base-defense": "93","max-cp": "980"}},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ],stats: { "base-defense": "126","max-cp": "1653"}},
];

const outputFilterTypeG = [
  {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111", "max-cp": "1115"} },
  {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "143", "max-cp": "1699"}},
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "189", "max-cp": "2720"}},
];

const outputFilterTypeF = [
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ],stats: {"base-defense": "93","max-cp": "980"}},
  {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ],stats: { "base-defense": "126","max-cp": "1653"}},
];

const outputSearchName = [
  {id: '4', num: '004', name: 'Charmander', type: ['Fire' ],stats: {"base-defense": "93","max-cp": "980"}},
];

const outputSearchNumber = [
  {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "189", "max-cp": "2720"}},
];

  const outputSortNumber = [   
    {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ],stats: { "base-defense": "126","max-cp": "1653"}},
    {id: '4', num: '004', name: 'Charmander', type: ['Fire' ],stats: {"base-defense": "93","max-cp": "980"}},
    {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "189", "max-cp": "2720"}},
    {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "143", "max-cp": "1699"}},
    {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111", "max-cp": "1115"} },
  ];
  
  const outputSortName = [
    {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111","max-cp": "1115"} },
    {id: '4', num: '004', name: 'Charmander', type: ['Fire' ] ,stats: {"base-defense": "93","max-cp": "980"}},    
    {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ] ,stats: {"base-defense": "126","max-cp": "1653"} },
    {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "143","max-cp": "1699"} },
    {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "189","max-cp": "2720"}},
  ];

  const outputSortMaxName = [
    {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "189","max-cp": "2720"}},
    {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "143","max-cp": "1699"} },
    {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ] ,stats: {"base-defense": "126","max-cp": "1653"} },
    {id: '4', num: '004', name: 'Charmander', type: ['Fire' ] ,stats: {"base-defense": "93","max-cp": "980"}},    
    {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111","max-cp": "1115"} },
  ];

  const outputSortMaxCP = [
    {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "189","max-cp": "2720"}},
    {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "143","max-cp": "1699"} },
    {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ] ,stats: {"base-defense": "126","max-cp": "1653"} },
    {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111","max-cp": "1115"} },
    {id: '4', num: '004', name: 'Charmander', type: ['Fire' ] ,stats: {"base-defense": "93","max-cp": "980"}},    
    ];

    const outputSortMaxD = [
      {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "189","max-cp": "2720"}},
      {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ] ,stats: {"base-defense": "143","max-cp": "1699"} },
      {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ] ,stats: {"base-defense": "126","max-cp": "1653"} },
      {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111","max-cp": "1115"} },
      {id: '4', num: '004', name: 'Charmander', type: ['Fire' ] ,stats: {"base-defense": "93","max-cp": "980"}},    
      ];

    const inputSortNumber = [
      {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ],stats: { "base-defense": "126","max-cp": "1653"}},
      {id: '4', num: '004', name: 'Charmander', type: ['Fire' ],stats: {"base-defense": "93","max-cp": "980"}},
      {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "189", "max-cp": "2720"}},
      {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "143", "max-cp": "1699"}},
      {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111", "max-cp": "1115"} },
    ];
    
    const outputDataSortNumber =
    [
      {id: '1', num: '001', name: 'Bulbasaur', type: [ 'Grass', 'Poison' ], stats: {"base-defense": "111", "max-cp": "1115"} },
      {id: '2', num: '002', name: 'Ivysaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "143", "max-cp": "1699"}},
      {id: '3', num: '003', name: 'Venusaur', type: [ 'Grass', 'Poison' ],stats: {"base-defense": "189", "max-cp": "2720"}},
      {id: '4', num: '004', name: 'Charmander', type: ['Fire' ],stats: {"base-defense": "93","max-cp": "980"}},
      {id: '5', num: '005', name: 'Charmeleon', type: [ 'Fire' ],stats: { "base-defense": "126","max-cp": "1653"}},
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

  it('debería retornar un array al realizar el orden 1 - 5', () => {
    expect(sortData(inputSortNumber, 'number','valueFive')).toEqual(outputDataSortNumber);
  });

  it('debería retornar un array al realizar el orden 5 - 1', () => {
    expect(sortData(inputData, 'number','valueThree')).toEqual(outputSortNumber);
  });

  it('debería retornar un array al realizar el orden A-Z', () => {
    expect(sortData(inputData, 'name','valueTwo')).toEqual(outputSortName);
  });

  it('debería retornar un array al realizar el orden Z-A', () => {
    expect(sortData(inputData, 'name','valueFour')).toEqual(outputSortMaxName);
  });

  it('debería retornar un array al realizar el orden por Max-CP', () => {
    expect(sortData(inputData, 'number','optionStrongest')).toEqual(outputSortMaxCP);
  });

  it('debería retornar un array al realizar el orden por Max-DEF', () => {
    expect(sortData(inputData, 'number','optionDefense')).toEqual(outputSortMaxD);
  });

});

describe('candyCalculate ', () => {
  it('debería ser una función', () => {
    expect(typeof candyCalculate ).toBe('function');
  });

  it('debería restar 25 - 10 y retornar 15', () => {
    expect(candyCalculate (10,25)).toBe(15);
  });



});