ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "better_angel_ring:angel_ring" },
    "minecraft:nether_star",
    "minecraft:elytra"
  );
  
    event.shaped('execore:airborne_mining_charm', [
        'F F',
        ' E ',
        ' J '
    ], {
        F: 'minecraft:feather',
        E: 'minecraft:elytra',
        J: 'mekanism:jetpack'
    })

    event.shaped('execore:speed_charm_1', [
        'SSS',
        'SFS',
        'SSS'
    ], {
        F: 'minecraft:feather',
        S: 'minecraft:sugar'
    })

    event.shaped('execore:speed_charm_2', [
        'SFS',
        'SSS',
        'SFS'
    ], {
        F: 'execore:speed_charm_1',
        S: 'minecraft:sugar'
    })

    event.shaped('execore:speed_charm_3', [
        'SFS',
        'FTF',
        'SFS'
    ], {
        F: 'execore:speed_charm_2',
        S: 'minecraft:sugar',
        T:'mekanism:teleportation_core'
    })

    event.shapeless('execore:wireless_power_card',['ae2:wireless_receiver','ae2:advanced_card'])
});
