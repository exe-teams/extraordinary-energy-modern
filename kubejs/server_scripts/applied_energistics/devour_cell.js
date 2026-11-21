ServerEvents.recipes((event) => {
  // extendedae_plus:infinity_biginteger_cell
  event.custom({
  type: 'extendedcrafting:shaped_table',
  pattern: [
    'AAAAAAAAAAAAA',
    'ABBBBBBBBBBBA',
    'ABCCCCCCCCCBA',
    'ABCDDDDDDDCBA',
    'ABCDDDDDDDCBA',
    'ABCDDDDDDDCBA',
    'ABCDDDEDDDCBA',
    'ABCDDDDDDDCBA',
    'ABCDDDDDDDCBA',
    'ABCDDDDDDDCBA',
    'ABCCCCCCCCCBA',
    'ABBBBBBBBBBBA',
    'AAAAAAAAAAAAA'
  ],
  key: {
    A: {
      item: 'mek1000:infinity_item_component'
    },
    B: {
      item: 'mek1000:infinity_fluid_component'
    },
    C: {
      item: 'mek1000:infinity_chemical_component'
    },
    D: {
      item: 'extendedae_plus:infinity_core'
    },
    E: {
      item: 'mek1000:ultimate_storage_housing'
    }
  },
  result: {
    item: 'extendedae_plus:infinity_biginteger_cell'
  }
  })
  .id('extendedae_plus:infinity_biginteger_cell');

  event.remove({output:'extendedae_plus:infinity_biginteger_cell'})
});