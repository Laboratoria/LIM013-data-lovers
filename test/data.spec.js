import { filterByRol,search,averageInfo } from '../src/data.js';

export const inpuTest=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
  {name: "Olaf",info: {attack: 9,defense: 5,magic: 3,difficulty: 3},tags: ["Fighter", "Tank"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
  {name: "Tahm Kench",info: {attack: 3,defense: 9,magic: 6,difficulty: 5},tags:["Support", "Tank"]},
  {name: "Draven",info: {attack: 9,defense: 3,magic: 1,difficulty: 8},tags: ["Marksman"]},
];
export const outputFilterRol=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
];
export const outputSearch=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
]
export const orderAsc=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
  {name: "Draven",info: {attack: 9,defense: 3,magic: 1,difficulty: 8},tags: ["Marksman"]},
  {name: "Olaf",info: {attack: 9,defense: 5,magic: 3,difficulty: 3},tags: ["Fighter", "Tank"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
  {name: "Tahm Kench",info: {attack: 3,defense: 9,magic: 6,difficulty: 5},tags:["Support", "Tank"]},
];
export const orderDesc=[
  {name: "Tahm Kench",info: {attack: 3,defense: 9,magic: 6,difficulty: 5},tags:["Support", "Tank"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
  {name: "Olaf",info: {attack: 9,defense: 5,magic: 3,difficulty: 3},tags: ["Fighter", "Tank"]},
  {name: "Draven",info: {attack: 9,defense: 3,magic: 1,difficulty: 8},tags: ["Marksman"]},
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
];
describe('Filtrar según rol',()=>{
  it('Debe ser una función',()=>{
    expect(typeof filterByRol).toBe('function');
  });
  it('Debe retornar al campeón de rol',()=>{
    expect(filterByRol(inpuTest,"Assassin")).toEqual(outputFilterRol);
  })
})
describe('Búsqueda por nombre', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });
  it('returns `Aatrox`', () => {
    expect(search(inpuTest,"aatrox")).toEqual(outputSearch);
  });
});

describe('Obtener promedio de ataque del rol asesino', () => {
  it('is a function', () => {
    expect(typeof averageInfo).toBe('function');
  });

  it('returns `(7+8)/2=7.5`', () => {
    expect(averageInfo("attack",outputFilterRol)).toEqual('7.5');
  });
});
