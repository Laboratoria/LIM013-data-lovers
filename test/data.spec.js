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

  it('returns `Aatrox: 250.000`', () => {
    const hpperlevel =[{ name: 'Aatrox', stats:{hp: 50, hpperlevel: 200}}, { name: 'Ahri', stats:{hp: 90, hpperlevel: 120}}, { name: 'Zac', stats:{hp: 120, hpperlevel: 600}}];
    const level = 1;
    const posicion = 0;
    const result = '250.000'
    expect(order.hpperLevel(hpperlevel, level, posicion)).toEqual(result);
  })

  it('Ahri:674.400', () => {
    const arrayObj = [{ name: 'Aatrox' ,stats: { hp: 537.8, hpperlevel: 85}}, { name: 'Ahri' ,stats: { hp: 514.4, hpperlevel: 80}}, { name: 'Akali' ,stats: { hp: 587.8, hpperlevel: 85}}];
    const position = 1;
    const level = 2;
    const dataResult = '674.400';
    expect(order.hpperLevel(arrayObj,level,position)).toEqual(dataResult);
  });

});

describe('calcular el mana por nivel (mp)', () => {
  it('it a function mpperLevel', () => {
    expect(typeof order.mpperLevel).toBe('function');
  });

  it('returns `Aatrox,Zira,Zac`', () => {
    const mpperlevel =[{ name: 'Aatrox', stats:{mp: 30, mpperlevel: 150}}, { name: 'Zira', stats:{mp: 50, mpperlevel: 180}}, { name: 'Zac', stats:{mp: 120, mpperlevel: 550}}];
    const level = 1;
    const posicion = 0;
    const result = '180.000'
    expect(order.mpperLevel(mpperlevel, level, posicion)).toEqual(result);
  })
});

describe('calcular el ataque por nivel (attack)', () => {
  it('it a function attackdamage', () => {
    expect(typeof order.attackperLevel).toBe('function');
  });

    it('returns `Aatrox,Zira,Zac`', () => {
      const attackperLevel =[{ name: 'Aatrox', stats:{attackdamage: 30, attackdamageperlevel: 150}}, { name: 'Zira', stats:{attackdamage: 50, attackdamageperlevel: 180}}, { name: 'Zac', stats:{attackdamage: 120, attackdamageperlevel: 550}}];
      const level = 1;
      const posicion = 0;
      const result = '180.000'
      expect(order.attackperLevel(attackperLevel, level, posicion)).toEqual(result);
    })

  });

  describe('filtar por daño_ataque (filterRange)', () => {
    it('it a function filterRange', () => {
      expect(typeof order.filterRange).toBe('function');
    });

    it('returns `rango1`', () => {
      const filterDaño_Ataque = [{name: 'Ahri', stats:{attackrange: 125}}, {name: 'Xina', stats:{attackrange: 300}}, {name: 'Dani', stats:{attackrange: 625}}]
      const range = 'rango1';
      const result = [{name: 'Ahri', stats:{attackrange: 125}}];
      expect(order.filterRange(filterDaño_Ataque, range)).toEqual(result);
    })

  });
