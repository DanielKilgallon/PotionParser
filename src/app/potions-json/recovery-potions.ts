import {Potion} from '../potion';

export const RECOVERY_POTIONS: Potion[] = [
  {
    name: 'Greater Healing Potion',
    ingredients: [
      'Bottled Water',
      'Pixie Dust',
      'Crystal Shard'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  },
  {
    name:
      'Healing Potion',
    ingredients: [
      'Lesser Healing Potion',
      'Glowing Mushroom'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  },
  {
    name: 'Lesser Healing Potion',
    ingredients: [
      'Bottle',
      'Gel',
      'Mushroom'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }, {
    name: 'Lesser Restoration Potion',
    ingredients: [
      'Lesser Healing Potion',
      'Lesser Mana Potion'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }, {
    name: 'Mana Potion',
    ingredients: [
      'Lesser Mana Potion',
      'Glowing Mushroom'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }, {
    name: 'Restoration Potion',
    ingredients: [
      'Mushroom',
      'Pink Gel',
      'Bottle'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }, {
    name: 'Super Healing Potion',
    ingredients: [
      'Greater Healing Potion',
      'Nebula Fragment',
      'Solar Fragment',
      'Stardust Fragment',
      'Vortex Fragment'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }, {
    name: 'Super Mana Potion',
    ingredients: [
      'Greater Mana Potion',
      'Fallen Star',
      'Crystal Shard',
      'Unicorn Horn'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }
];
