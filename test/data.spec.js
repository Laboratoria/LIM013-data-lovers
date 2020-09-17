import { orderData, filterDataEgg, filterDataGeneracion, filterDataType } from '../src/data.js';
import { inputA_Z, outputA_Z, outputZ_A } from './testsort.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns `a-z`', () => {
    expect(orderData(inputA_Z, "a-z")).toEqual(outputA_Z);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns `z-a`', () => {
    expect(orderData(inputA_Z, "z-a")).toEqual(outputZ_A);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof filterDataEgg).toBe('function');
  });

  const inputfilteregg = [{
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
    size: {
      height: '0.71 m',
      weight: '6.9 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.1',
      'base-capture-rate': '0.2',
    },
    'spawn-chance': '0.69',
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: '2 km',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [
        {
          num: '002',
          name: 'ivysaur',
          'candy-cost': '25',
          'next-evolution': [
            {
              num: '003',
              name: 'venusaur',
              'candy-cost': '100',
            },
          ],
        },
      ],
    },
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
    size: {
      height: '0.99 m',
      weight: '13.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.07',
      'base-capture-rate': '0.1',
    },
    'spawn-chance': '0.042',
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [
        {
          num: '003',
          name: 'venusaur',
          'candy-cost': '100',
        },
      ],
      'prev-evolution': [
        {
          num: '001',
          name: 'bulbasaur',
          'candy-cost': '25',
        },
      ],
    },
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
    size: {
      height: '2.01 m',
      weight: '100.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.05',
      'base-capture-rate': '0.05',
    },
    'spawn-chance': '0.017',
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'prev-evolution': [
        {
          num: '002',
          name: 'ivysaur',
          'candy-cost': '100',
          'prev-evolution': [
            {
              num: '001',
              name: 'bulbasaur',
              'candy-cost': '25',
            },
          ],
        },
      ],
    },
  },
  ]

  it('returns `eggpokemon`', () => {
    const result = filterDataEgg(inputfilteregg, "2 km");
    const outputfilteregg = [{
      num: '001',
      name: 'bulbasaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      about:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
      size: {
        height: '0.71 m',
        weight: '6.9 kg',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.1',
        'base-capture-rate': '0.2',
      },
      'spawn-chance': '0.69',
      stats: {
        'base-attack': '118',
        'base-defense': '111',
        'base-stamina': '128',
        'max-cp': '1115',
        'max-hp': '113',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
        {
          name: 'tackle',
          type: 'normal',
          'base-damage': '5',
          energy: '5',
          'move-duration-seg': '0.5',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'seed bomb',
          type: 'grass',
          'base-damage': '55',
          energy: '-33',
          'move-duration-seg': '2.1',
        },
        {
          name: 'power whip',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '2.6',
        },
      ],
      egg: '2 km',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'next-evolution': [
          {
            num: '002',
            name: 'ivysaur',
            'candy-cost': '25',
            'next-evolution': [
              {
                num: '003',
                name: 'venusaur',
                'candy-cost': '100',
              },
            ],
          },
        ],
      },
    }]
    expect(result).toEqual(outputfilteregg);
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof filterDataGeneracion).toBe('function');
  });

  const inputfiltergene = [{
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
    size: {
      height: '0.71 m',
      weight: '6.9 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.1',
      'base-capture-rate': '0.2',
    },
    'spawn-chance': '0.69',
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: '2 km',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [
        {
          num: '002',
          name: 'ivysaur',
          'candy-cost': '25',
          'next-evolution': [
            {
              num: '003',
              name: 'venusaur',
              'candy-cost': '100',
            },
          ],
        },
      ],
    },
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
    size: {
      height: '0.99 m',
      weight: '13.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.07',
      'base-capture-rate': '0.1',
    },
    'spawn-chance': '0.042',
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [
        {
          num: '003',
          name: 'venusaur',
          'candy-cost': '100',
        },
      ],
      'prev-evolution': [
        {
          num: '001',
          name: 'bulbasaur',
          'candy-cost': '25',
        },
      ],
    },
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
    size: {
      height: '2.01 m',
      weight: '100.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.05',
      'base-capture-rate': '0.05',
    },
    'spawn-chance': '0.017',
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'prev-evolution': [
        {
          num: '002',
          name: 'ivysaur',
          'candy-cost': '100',
          'prev-evolution': [
            {
              num: '001',
              name: 'bulbasaur',
              'candy-cost': '25',
            },
          ],
        },
      ],
    },
  },
  ]

  it('returns `genepokemon`', () => {
    const result2 = filterDataGeneracion(inputfiltergene, "kanto");
    const outputfiltergene = [{
      num: '001',
      name: 'bulbasaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      about:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
      size: {
        height: '0.71 m',
        weight: '6.9 kg',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.1',
        'base-capture-rate': '0.2',
      },
      'spawn-chance': '0.69',
      stats: {
        'base-attack': '118',
        'base-defense': '111',
        'base-stamina': '128',
        'max-cp': '1115',
        'max-hp': '113',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
        {
          name: 'tackle',
          type: 'normal',
          'base-damage': '5',
          energy: '5',
          'move-duration-seg': '0.5',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'seed bomb',
          type: 'grass',
          'base-damage': '55',
          energy: '-33',
          'move-duration-seg': '2.1',
        },
        {
          name: 'power whip',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '2.6',
        },
      ],
      egg: '2 km',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'next-evolution': [
          {
            num: '002',
            name: 'ivysaur',
            'candy-cost': '25',
            'next-evolution': [
              {
                num: '003',
                name: 'venusaur',
                'candy-cost': '100',
              },
            ],
          },
        ],
      },
    },
    {
      num: '002',
      name: 'ivysaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      about:
        "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
      size: {
        height: '0.99 m',
        weight: '13.0 kg',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.07',
        'base-capture-rate': '0.1',
      },
      'spawn-chance': '0.042',
      stats: {
        'base-attack': '151',
        'base-defense': '143',
        'base-stamina': '155',
        'max-cp': '1699',
        'max-hp': '134',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'razor leaf',
          type: 'grass',
          'base-damage': '13',
          energy: '7',
          'move-duration-seg': '1',
        },
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'solar beam',
          type: 'grass',
          'base-damage': '180',
          energy: '-100',
          'move-duration-seg': '4.9',
        },
        {
          name: 'power whip',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '2.6',
        },
      ],
      egg: 'not in eggs',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'next-evolution': [
          {
            num: '003',
            name: 'venusaur',
            'candy-cost': '100',
          },
        ],
        'prev-evolution': [
          {
            num: '001',
            name: 'bulbasaur',
            'candy-cost': '25',
          },
        ],
      },
    },
    {
      num: '003',
      name: 'venusaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      about:
        "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
      size: {
        height: '2.01 m',
        weight: '100.0 kg',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.05',
        'base-capture-rate': '0.05',
      },
      'spawn-chance': '0.017',
      stats: {
        'base-attack': '198',
        'base-defense': '189',
        'base-stamina': '190',
        'max-cp': '2720',
        'max-hp': '162',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'razor leaf',
          type: 'grass',
          'base-damage': '13',
          energy: '7',
          'move-duration-seg': '1',
        },
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'petal blizzard',
          type: 'grass',
          'base-damage': '110',
          energy: '-100',
          'move-duration-seg': '2.6',
        },
        {
          name: 'solar beam',
          type: 'grass',
          'base-damage': '180',
          energy: '-100',
          'move-duration-seg': '4.9',
        },
      ],
      egg: 'not in eggs',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'prev-evolution': [
          {
            num: '002',
            name: 'ivysaur',
            'candy-cost': '100',
            'prev-evolution': [
              {
                num: '001',
                name: 'bulbasaur',
                'candy-cost': '25',
              },
            ],
          },
        ],
      },
    },
    ]
    expect(result2).toEqual(outputfiltergene);
  });
});

describe('typePokemon', () => {
  it('is a function', () => {
    expect(typeof filterDataType).toBe('function');
  });

  const inputfiltertype = [{
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
    size: {
      height: '0.71 m',
      weight: '6.9 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.1',
      'base-capture-rate': '0.2',
    },
    'spawn-chance': '0.69',
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: '2 km',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [
        {
          num: '002',
          name: 'ivysaur',
          'candy-cost': '25',
          'next-evolution': [
            {
              num: '003',
              name: 'venusaur',
              'candy-cost': '100',
            },
          ],
        },
      ],
    },
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
    size: {
      height: '0.99 m',
      weight: '13.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.07',
      'base-capture-rate': '0.1',
    },
    'spawn-chance': '0.042',
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [
        {
          num: '003',
          name: 'venusaur',
          'candy-cost': '100',
        },
      ],
      'prev-evolution': [
        {
          num: '001',
          name: 'bulbasaur',
          'candy-cost': '25',
        },
      ],
    },
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
    size: {
      height: '2.01 m',
      weight: '100.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: ['grass', 'poison'],
    encounter: {
      'base-flee-rate': '0.05',
      'base-capture-rate': '0.05',
    },
    'spawn-chance': '0.017',
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
    weaknesses: ['fire', 'ice', 'flying', 'psychic'],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'prev-evolution': [
        {
          num: '002',
          name: 'ivysaur',
          'candy-cost': '100',
          'prev-evolution': [
            {
              num: '001',
              name: 'bulbasaur',
              'candy-cost': '25',
            },
          ],
        },
      ],
    },
  },
  ]

  it('returns `typePokemon`', () => {
    const result3 = filterDataType(inputfiltertype, "grass");
    const outputfiltertype = [{
      num: '001',
      name: 'bulbasaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      about:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
      size: {
        height: '0.71 m',
        weight: '6.9 kg',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.1',
        'base-capture-rate': '0.2',
      },
      'spawn-chance': '0.69',
      stats: {
        'base-attack': '118',
        'base-defense': '111',
        'base-stamina': '128',
        'max-cp': '1115',
        'max-hp': '113',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
        {
          name: 'tackle',
          type: 'normal',
          'base-damage': '5',
          energy: '5',
          'move-duration-seg': '0.5',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'seed bomb',
          type: 'grass',
          'base-damage': '55',
          energy: '-33',
          'move-duration-seg': '2.1',
        },
        {
          name: 'power whip',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '2.6',
        },
      ],
      egg: '2 km',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'next-evolution': [
          {
            num: '002',
            name: 'ivysaur',
            'candy-cost': '25',
            'next-evolution': [
              {
                num: '003',
                name: 'venusaur',
                'candy-cost': '100',
              },
            ],
          },
        ],
      },
    },
    {
      num: '002',
      name: 'ivysaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      about:
        "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
      size: {
        height: '0.99 m',
        weight: '13.0 kg',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.07',
        'base-capture-rate': '0.1',
      },
      'spawn-chance': '0.042',
      stats: {
        'base-attack': '151',
        'base-defense': '143',
        'base-stamina': '155',
        'max-cp': '1699',
        'max-hp': '134',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'razor leaf',
          type: 'grass',
          'base-damage': '13',
          energy: '7',
          'move-duration-seg': '1',
        },
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'solar beam',
          type: 'grass',
          'base-damage': '180',
          energy: '-100',
          'move-duration-seg': '4.9',
        },
        {
          name: 'power whip',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '2.6',
        },
      ],
      egg: 'not in eggs',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'next-evolution': [
          {
            num: '003',
            name: 'venusaur',
            'candy-cost': '100',
          },
        ],
        'prev-evolution': [
          {
            num: '001',
            name: 'bulbasaur',
            'candy-cost': '25',
          },
        ],
      },
    },
    {
      num: '003',
      name: 'venusaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      about:
        "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
      size: {
        height: '2.01 m',
        weight: '100.0 kg',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.05',
        'base-capture-rate': '0.05',
      },
      'spawn-chance': '0.017',
      stats: {
        'base-attack': '198',
        'base-defense': '189',
        'base-stamina': '190',
        'max-cp': '2720',
        'max-hp': '162',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'razor leaf',
          type: 'grass',
          'base-damage': '13',
          energy: '7',
          'move-duration-seg': '1',
        },
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'petal blizzard',
          type: 'grass',
          'base-damage': '110',
          energy: '-100',
          'move-duration-seg': '2.6',
        },
        {
          name: 'solar beam',
          type: 'grass',
          'base-damage': '180',
          energy: '-100',
          'move-duration-seg': '4.9',
        },
      ],
      egg: 'not in eggs',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'prev-evolution': [
          {
            num: '002',
            name: 'ivysaur',
            'candy-cost': '100',
            'prev-evolution': [
              {
                num: '001',
                name: 'bulbasaur',
                'candy-cost': '25',
              },
            ],
          },
        ],
      },
    },
    ]

    expect(result3).toEqual(outputfiltertype);
  });
});

