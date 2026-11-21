ServerEvents.recipes((event) => {
    let creative = ['mekanism:creative_bin', 'mekanism:creative_chemical_tank', 'mekanism:creative_fluid_tank', 'mekanism:creative_energy_cube', 'evolvedmekanism:qio_drive_creative', 'evolvedmekanism:creative_tier_installer', 'evolvedmekanism:creative_personal_barrel', 'evolvedmekanism:creative_personal_chest', 'mekanism:creative_chemical_tank', 'mekanism:creative_fluid_tank', 'mekanism:creative_energy_cube', 'evolvedmekanism:block_alloy_creative']

    creative.forEach(value => {
        event.remove({ output: value })
    })

    event.remove({ id: "astral_mekanism:astral_crafting/other/creative_bin" })
    event.remove({ id: "astral_mekanism:astral_crafting/other/creative_chemical_tank" })
    event.remove({ id: "astral_mekanism:astral_crafting/other/creative_energy_cube" })
    event.remove({ id: "astral_mekanism:astral_crafting/other/creative_fluid_tank" })
})