import {filterChampions, orderAZ, orderZA, orderHigher, orderLower, stats} from '../src/data.js';


describe('Filtro del Array de Campeones', () => {
  it('is a function', () => {
    expect(typeof filterChampions).toBe('function');
  });

  it('returns `Ahri`', () => {
    const filter =[{name:'Ahri',tags:'Assasin'},{name:'Aatrox',tags:'Mage'}];
    const resultFilter=[{name:"Ahri",tags:"Assasin"}];
    expect(filterChampions(filter, "Assasin")).toEqual(resultFilter);
  });
});

describe('Orden de A-Z', () => {
  it('is a function orderAZ', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('returns `Annie,Garen,Morgana,Zyra`', () => {
    const data = [{name:'Zyra'},{name:'Garen'},{name:'Morgana'},{name:'Annie'}];
    const dataAz = [{name:'Annie'},{name:'Garen'},{name:'Morgana'},{name:'Zyra'}];
    expect(orderAZ(data)).toEqual(dataAz);
  });

  it('returns `Annie,garen,Morgana,zyra`', () => {
    const data = [{name:'zyra'},{name:'Garen'},{name:'morgana'},{name:'Annie'}];
    const dataAz = [{name:'Annie'},{name:'Garen'},{name:'morgana'},{name:'zyra'}];
    expect(orderAZ(data)).toEqual(dataAz);
  });

  it('returns `Angelica,Beatriz,Carmen`', () => {
    const data = [{name:'Beatriz'},{name:'Carmen'},{name:'Angelica'}];
    const dataAz = [{name:'Angelica'},{name:'Beatriz'},{name:'Carmen'}];
    expect(orderAZ(data)).toEqual(dataAz);
  });

});

describe('ordenar de la Z-A',() =>{
  it('is a function orderZA',()=>{
    expect(typeof orderZA).toBe('function');
  });

  it('return`Carmen, Beatriz, Angelica`',()=>{
    const data=[{name: 'Beatriz'},{name:'Carmen'},{name:'Angelica'}];
    const dataZa=[{name:'Carmen'},{name:'Beatriz'},{name:'Angelica'}];
    expect(orderZA(data)).toEqual(dataZa);
  });

  it('returns `zyra,garen,Morgana,Annie`', () => {
    const data = [{name:'Annie'},{name:'Garen'},{name:'morgana'},{name:'zyra'}];
    const dataZa = [{name:'zyra'},{name:'morgana'},{name:'Garen'},{name:'Annie'}];
    expect(orderZA(data)).toEqual(dataZa);
  });
  
});

describe('ordenar dificultad ascendente a descendente',() =>{
  it('is a function orderHigher',()=>{
    expect(typeof orderHigher).toBe('function');
  });

  it('return difficulty `1, 2, 7`',()=>{
    const data=[{name:'Ezreal',info: {difficulty: '7'}},{name:'Darius',info: {difficulty: '2'}},{name:'Missfortuna',info: {difficulty: '1'}}];
    const datahigher=[{name:'Missfortuna',info: {difficulty: '1'}},{name:'Darius',info: {difficulty: '2'}},{name:'Ezreal',info: {difficulty: '7'}}];
    expect(orderHigher(data)).toEqual(datahigher);
  });  
});

describe('ordenar dificultad descendente a ascendente ',() =>{
  it('is a function orderLower',()=>{
    expect(typeof orderLower).toBe('function');
  });

  it('return difficulty `7, 2, 1`',()=>{
    const data=[{name:'Darius',info: {difficulty: '2'}},{name:'Ezreal',info: {difficulty: '7'}},{name:'Missfortuna',info: {difficulty: '1'}}];
    const datalower=[{name:'Ezreal',info: {difficulty: '7'}},{name:'Darius',info: {difficulty: '2'}},{name:'Missfortuna',info: {difficulty: '1'}}];
    expect(orderLower(data)).toEqual(datalower);
  });  
});

describe('analisis estadistico por nivel ',() =>{
  it('is a function estadistica',()=>{
    expect(typeof stats).toBe('function');
  });

  it('return num por statsLevel ',()=>{
    const data=[{name:'Aatrox', hp: 537.8,  mp: 105.6,  armor: 24.384,   spellblock: 32.1,  hpregen: 6.59, }];
    const data1=[{name:'Aatrox', hp: 1047.8, mp: 375.6,  armor: 47.2,  spellblock: 39.6	,   hpregen: 9.6, }];
    expect(stats(data)).toEqual(data1);
  });  
});







