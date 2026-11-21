ServerEvents.recipes(event => {
    event.remove({id:"mekanismelements:chemical_infusing/aqua_regia"})
    event.remove({id:"mekanismelements:chemical_infusing/dissolved_spent_nuclear_waste"})

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 3,
            "gas": "mekanism:hydrogen_chloride"
        },
        "rightInput": {
            "amount": 1,
            "gas": "mekanismelements:nitric_acid"
        },
        "output": {
            "gas": "astral_mekanism:aqua_regia",
            "amount": 4
        }
    })
})