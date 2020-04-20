import {Potion} from '../potion';

export const RECOVERY_POTIONS: Potion[] = [
  {
    name: 'Greater Healing',
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
      'Healing',
    ingredients: [
      'Lesser Healing',
      'Glowing Mushroom'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  },
  {
    name: 'Lesser Healing',
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
    name: 'Lesser Restoration',
    ingredients: [
      'Lesser Healing',
      'Lesser Mana'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }, {
    name: 'Mana',
    ingredients: [
      'Lesser Mana',
      'Glowing Mushroom'
    ],
    stations: [
      'Placed Bottle',
      'Alchemy Table'
    ]
  }, {
    name: 'Restoration',
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
    name: 'Super Healing',
    ingredients: [
      'Greater Healing',
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
    name: 'Super Mana',
    ingredients: [
      'Greater Mana',
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
