ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": "mekanism:bio_fuel" } },
        "fluidInput": { "amount": 10000, "fluid": "minecraft:water" },
        "gasInput": { "amount": 1, "gas": "mek1000:valine3g" },
        "energyRequired": 1, "duration": 1,
        "gasOutput": { "gas": "mek1000:valine3g", "amount": 10000 },
        "itemOutput": { "item": "mekanism:bio_fuel" }
    })

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { amount: 32, "ingredient": {"item": "minecraft:hay_block" } },
        "fluidInput": { "amount": 3642, "fluid": "minecraft:water" },
        "gasInput": { "amount": 7, "gas": "mek1000:valine3g" },
        "energyRequired": 1000, "duration": 1000,
        "gasOutput": { "gas": "mek1000:saltless_dried_soysouce", "amount": 1000 }
    })

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1,
            "gas": "mek1000:dvt"
        },
        "rightInput": {
            "amount": 1,
            "gas": "mek1000:saltless_dried_soysouce"
        },
        "output": {
            "gas": "mekanism_extras:naquadah_uranium_fuel",
            "amount": 10000
        }
    })

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1,
            "gas": "mekanism_the_valine:deuterium_valine3g_tritium"
        },
        "rightInput": {
            "amount": 1,
            "gas": "mek1000:saltless_dried_soysouce"
        },
        "output": {
            "gas": "mekanism_extras:naquadah_uranium_fuel",
            "amount": 10000
        }
    })

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1,
            "gas": "mek1000:dvt"
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
        "itemInput": { amount: 1, "ingredient": {"item": 'astral_mekanism:illusion_control_circuit' } },
        "fluidInput": { "amount": 1000, "fluid": "minecraft:water" },
        "gasInput": { "amount": 1, "gas": "mek1000:astral_valine3g" },
        "energyRequired": 2000, "duration": 1,
        "gasOutput": { "gas": "mek1000:astral_valine3g", "amount": 10000 },
        "itemOutput": {"item": 'astral_mekanism:illusion_control_circuit' },
    })

    event.custom({
        "type": "mekanism:activating",
        "input": {
            "amount": 1,
            "gas": "mek1000:valine3g"
        },
        "output": {
            "gas": "mekanismgenerators:fusion_fuel", "amount": 1000
        }
    })
})