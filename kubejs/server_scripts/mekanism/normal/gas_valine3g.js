//packmode: normal

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1,
            "gas": "mekanism_the_valine:deuterium_valine3g_tritium"
        },
        "rightInput": {
            "amount": 1,
            "gas": "mekanism_the_valine:saltless_dried_soysouce"
        },
        "output": {
            "gas": "mekanism_extras:naquadah_uranium_fuel",
            "amount": 10000
        }
    })

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { amount: 4, "ingredient": {"item": 'astral_mekanism:illusion_control_circuit' } },
        "fluidInput": { "amount": 50000, "fluid": "astral_mekanism:mixed_lava" },
        "gasInput": { "amount": 500000, "gas": "astral_mekanism:astral_ether" },
        "energyRequired": 1000, "duration": 1000,
        "gasOutput": { "gas": "mekanism_the_valine:the_incomparable_valine", "amount": 1 }
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'mekanism:dust_uranium' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:green",
            "amount": 500
        },
        "output": 'mekanism_extras:dust_naquadah'
    })
})