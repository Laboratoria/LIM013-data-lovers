import order from '../src/data.js';


describe('Filtro del Array de Legend', () => {
  it('is a function', () => {
    expect(typeof order.filterLegend).toBe('function');
  });

  it('returns `Aatrox`', () => {
    const filter = [{ name: 'Aatrox', tags: 'Mage' }, { name: 'Ahri', tags: 'Assassin' }];
    const resultFilter = [{ name: "Aatrox", tags: "Mage" }];
    expect(order.filterLegend(filter, "Mage")).toEqual(resultFilter);
  });
  it('returns `Ahri,Akali`', () => {
    const filter = [{ name: 'Aatrox', tags: ['Fighter', 'Tank'] }, { name: 'Ahri', tags: ['Mage', 'Assassin'] }, { name: 'Akali', tags: ['Assassin'] }];
    const resultFilter = [{ name: 'Ahri', tags: ['Mage', 'Assassin'] }, { name: 'Akali', tags: ['Assassin'] }];
    expect(order.filterLegend(filter, 'Assassin')).toEqual(resultFilter);
  });
  it('returns `Vacio`', () => {
    const filter = [{ name: 'Zyra', tags: ['Mage', 'Support'] }, { name: 'Zilean', tags: ['Support', 'Mage'] }, { name: 'Ziggs', tags: ['Mage'] }];
    const resultFilter = [];
    expect(order.filterLegend(filter, 'Assassin')).toEqual(resultFilter);
  });

});


describe('Orden de A-Z', () => {
  it('is a function nameChampionAz', () => {
    expect(typeof order.nameChampionAz).toBe('function');
  });

  it('returns `Ana,Belen,Camila`', () => {
    const data = [{ name: 'Belen' }, { name: 'Camila' }, { name: 'Ana' }];
    const dataAz = [{ name: 'Ana' }, { name: 'Belen' }, { name: 'Camila' }];
    expect(order.nameChampionAz(data)).toEqual(dataAz);
  });

  it('returns `AAtrox,Leona,Malphite,Zyra`', () => {
    const data = [{ name: 'Zyra' }, { name: 'Leona' }, { name: 'Malphite' }, { name: 'AAtrox' }];
    const dataAz = [{ name: 'AAtrox' }, { name: 'Leona' }, { name: 'Malphite' }, { name: 'Zyra' }];
    expect(order.nameChampionAz(data)).toEqual(dataAz);
  });

  it('returns `Zac,ZED,Zilean,zyra`', () => {
    const data = [{ name: 'zyra' }, { name: 'Zac' }, { name: 'Zilean' }, { name: 'ZED' }];
    const dataAz = [{ name: 'Zac' }, { name: 'ZED' }, { name: 'Zilean' }, { name: 'zyra' }];
    expect(order.nameChampionAz(data)).toEqual(dataAz);
  });
});


describe('ordenar de la Z-A', () => {
  it('it a function nameChampionZa', () => {
    expect(typeof order.nameChampionZa).toBe('function');
  });

  it('returns `Camila,Belen,Ana`', () => {
    const data = [{ name: 'Belen' }, { name: 'Camila' }, { name: 'Ana' }];
    const dataZa = [{ name: 'Camila' }, { name: 'Belen' }, { name: 'Ana' }];
    expect(order.nameChampionZa(data)).toEqual(dataZa);
  });

  it('returns `Zyra,Malphite,Leona,AAtrox`', () => {
    const data = [{ name: 'Zyra' }, { name: 'Leona' }, { name: 'Malphite' }, { name: 'AAtrox' }];
    const dataZa = [{ name: 'Zyra' }, { name: 'Malphite' }, { name: 'Leona' }, { name: 'AAtrox' }];
    expect(order.nameChampionZa(data)).toEqual(dataZa);
  });

  it('returns `zyra,Zilean,ZED,Zac`', () => {
    const data = [{ name: 'zyra' }, { name: 'Zac' }, { name: 'Zilean' }, { name: 'ZED' }];
    const dataZa = [{ name: 'zyra' }, { name: 'Zilean' }, { name: 'ZED' }, { name: 'Zac' }];
    expect(order.nameChampionZa(data)).toEqual(dataZa);
  });

});

describe('calcular la vida por nivel (hp)', () => {
  it('it a function hpperLevel', () => {
    expect(typeof order.hpperLevel).toBe('function');
  });
});