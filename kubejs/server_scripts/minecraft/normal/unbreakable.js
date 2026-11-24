ServerEvents.recipes(event => {

  // 対象を集める：タグから自動収集 + タグに入らない物を手動追加
  const targets = new Set()

  ;[
    '#minecraft:axes',
    '#minecraft:pickaxes',
    '#minecraft:shovels',
    '#minecraft:hoes',
    '#minecraft:swords',
    '#minecraft:trimmable_armor', // 防具一式
    '#forge:tools',               // MODツール対策
  ].forEach(tag => Ingredient.of(tag).itemIds.forEach(id => targets.add(id)))

  ;[
    'minecraft:bow',
    'minecraft:crossbow',
    'minecraft:trident',
    'minecraft:shield',
    'minecraft:elytra',
    'minecraft:fishing_rod',
    'minecraft:shears',
    'minecraft:flint_and_steel',
    'minecraft:brush',
  ].forEach(id => targets.add(id))

  targets.add('experienceobelisk:transforming_focus')
  targets.add('lightingwand:wand')
  
  // 特定のアイテムだけにしたい場合は、上の収集を消してここに書けばOK
  // targets.add('minecraft:diamond_sword')

  targets.forEach(id => {
    event.shaped(
      Item.of(id, '{Unbreakable:1b}'), // JEI表示用
      [
        'NNN',
        'NIN',
        'NNN'
      ],
      {
        N: 'minecraft:netherite_block',
        I: Item.of(id).ignoreNBT() // エンチャント付き・ダメージ付きでも素材にできる
      }
    )
    .id(`kubejs:unbreakable/${id.replace(':', '/')}`)
    .modifyResult((grid, result) => {
      let center = grid.find(id)
      if (!center || center.id == 'minecraft:air') return result

      // 中央の実物をコピーして Unbreakable:1b だけ足す
      let out = center.withNBT('{Unbreakable:1b}')
      out.count = 1
      out.nbt.damage = 0
      return out
    })
  })
})