ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'evolvedmekanism:ingot_plaslitherite' } },
        "gasInput": { "amount": 10, "gas": "mekanism:antimatter" },
        "output": { "item": 'mek1000:valine3g_ingot_0' }, "duration": 4000
    })

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        amount: 8,
        ingredient: {
          item: 'ae2:silicon',
        },
      },
      fluidInput: {
        amount: 500,
        fluid: "mekanism:lithium",
      },
      gasInput: {
        amount: 100,
        gas: "mekanismelements:hydrogen_cyanide",
      },
      energyRequired: 5000,
      duration: 400,
      itemOutput: {
        item: 'mek1000:solar_grade_silicon',
        count: 1,
      },
    })
    .id("mek1000:solar_grade_silicon");

    event.shaped(
        Item.of('mek1000:pdt', 1),
        [
            'THM',
            'HCH',
            'MHT'
        ],
        {
            M: 'mekanism:quantum_entangloporter',
            T: 'mekanism:teleporter',
            C: 'mek1000:reinforced_steel_casing',
            H: 'astral_mekanism:vibration_control_circuit'

        }
    )

    const itemIngredient = (item) => ({ ingredient: { item } })

    const amountIngredient = (item, amount) => ({
        amount,
        ingredient: { item }
    })

    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: itemIngredient('mek1000:bablo_crystal'),
        gasInput: { amount: 1000, gas: "mekanism:antimatter" },
        output: { item: 'justdirethings:time_crystal' },
        duration: 10000
    })

    event.custom({
        type: "evolvedmekanism:alloying",
        extraInput: amountIngredient('mek1000:bablo_crystal', 64),
        secondExtraInput: amountIngredient('mek1000:valinium_processor', 4),
        mainInput: amountIngredient('astral_mekanism:resonance_control_circuit', 1),
        output: {
            item: 'mek1000:double_string_control_circuit'
        }
    })
})
