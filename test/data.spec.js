import order from '../src/data.js';


describe('Filtro del Array de Legend', () => {
  it('is a function', () => {
    expect(typeof order.filterLegend).toBe('function');
  });

  it('returns `Aatrox`', () => {
    const filter =[{name:'Aatrox',tags:'Mage'},{name:'Ahri',tags:'Assassin'}];
    const resultFilter=[{name:"Aatrox",tags:"Mage"}];
    expect(order.filterLegend(filter, "Mage")).toEqual(resultFilter);
  });
});


describe('Orden de A-Z', () => {
  it('is a function nameChampionAz', () => {
    expect(typeof order.nameChampionAz).toBe('function');
  });

  it('returns `Ana,Belen,Camila`', () => {
    const data = [{name:'Belen'},{name:'Camila'},{name:'Ana'}];
    const dataAz = [{name:'Ana'},{name:'Belen'},{name:'Camila'}];
    expect(order.nameChampionAz(data)).toEqual(dataAz);
  });

  it('returns `Aatrox,Leona,Malphite,Zyra`', () => {
    const data = [{name:'Zyra'},{name:'Leona'},{name:'Malphite'},{name:'Aatrox'}];
    const dataAz = [{name:'Aatrox'},{name:'Leona'},{name:'Malphite'},{name:'Zyra'}];
    expect(order.nameChampionAz(data)).toEqual(dataAz);
  });

  it('returns `Aatrox,leona,Malphite,zyra`', () => {
    const data = [{name:'zyra'},{name:'Leona'},{name:'malphite'},{name:'Aatrox'}];
    const dataAz = [{name:'Aatrox'},{name:'Leona'},{name:'malphite'},{name:'zyra'}];
    expect(order.nameChampionAz(data)).toEqual(dataAz);
  });

});


describe('ordenar de la Z-A',() =>{
  it('it a function nameChampionZa',()=>{
    expect(typeof order.nameChampionZa).toBe('function');
  });

  it('return`Camila, Belen, Ana`',()=>{
    const data=[{name: 'Belen'},{name:'Camila'},{name:'Ana'}];
    const dataZa=[{name:'Camila'},{name:'Belen'},{name:'Ana'}];
    expect(order.nameChampionZa(data)).toEqual(dataZa);
  });
  
});

describe('Función source', () => {
  it('is a function', () => {
    expect(typeof order.hpperLevel).toBe('function');
  });

  it('returns `Aatrox`', () => {
    const source =[{name:'Aatrox',hpperLevel:20},{name:'Ahri',hpperLevel:11}];
    const resultSource=[{name:"Aatrox",tags:"Mage"}];
    expect(order.hpperLevel(filter, "Mage")).toEqual(resultSource);
  });
});