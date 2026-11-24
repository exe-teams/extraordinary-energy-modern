ServerEvents.recipes((event) => {
    let sml_s_ores = [
        "minecraft:coal_ore",
        "minecraft:iron_ore",
        "minecraft:copper_ore",
        "minecraft:gold_ore",
        "minecraft:redstone_ore",
        "minecraft:emerald_ore",
        "minecraft:lapis_ore",
        "minecraft:diamond_ore",
        "kubejs:ore_quartz",
        "kubejs:ore_debri_deepslate",
        "mekanism:tin_ore",
        "mekanism:osmium_ore",
        "mekanism:uranium_ore",
        "mekanism:fluorite_ore",
        "mekanism:lead_ore",
        "kubejs:ore_iridium",
        'kubejs:ore_certus_quartz',
    ];

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_s")
        .machineLevel(0)
        .duration(20 * 10)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('minecraft:diamond_pickaxe')
        )
        .chance(0.1, builder => builder
            .outputItems(sml_s_ores)
        )

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_m")
        .machineLevel(1)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('minecraft:netherite_pickaxe')
        )
        .outputItems(sml_s_ores)

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l1")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:budding_amethyst')
        .outputItems('1024x minecraft:amethyst_block')
        .chance(0.8, builder => builder
            .outputItems('1024x minecraft:amethyst_block')
        )
        .chance(0.5, builder => builder
            .outputItems('1024x minecraft:amethyst_block')
        )
        .chance(0.1, builder => builder
            .outputItems('8192x minecraft:amethyst_block')
        )

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l2")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'kubejs:ore_certus_quartz')
        .outputItems('1024x kubejs:ore_certus_quartz')
        .outputItems('1024x kubejs:dense_ore_certus_quartz')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l3")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:coal_ore')

        .outputItems('1024x minecraft:coal_ore')
        .outputItems('1024x denseores:dense_coal_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l4")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:iron_ore')

        .outputItems('1024x minecraft:iron_ore')
        .outputItems('1024x denseores:dense_iron_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l5")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:gold_ore')

        .outputItems('1024x minecraft:gold_ore')
        .outputItems('1024x denseores:dense_gold_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l6")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:copper_ore')

        .outputItems('1024x minecraft:copper_ore')
        .outputItems('1024x denseores:dense_copper_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l7")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:diamond_ore')

        .outputItems('1024x minecraft:diamond_ore')
        .outputItems('1024x denseores:dense_diamond_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l8")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:emerald_ore')

        .outputItems('1024x minecraft:emerald_ore')
        .outputItems('1024x denseores:dense_emerald_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l9")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:lapis_ore')

        .outputItems('1024x minecraft:lapis_ore')
        .outputItems('1024x denseores:dense_lapis_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l10")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'minecraft:redstone_ore')

        .outputItems('1024x minecraft:redstone_ore')
        .outputItems('1024x denseores:dense_redstone_ore')

    event.recipes.mek1000
        .sml_drill()
        .id("mek1000:sml_drilling_l11")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick((builder) => builder.inputFE(2147483647))
        .chance(0, (builder) => builder.inputItems("mekanism:laser"))
        .inputItems("mek1000:emc", "kubejs:ore_quartz")

        .outputItems("1024x kubejs:ore_quartz")
        .outputItems("1024x kubejs:dense_ore_quartz");

    if (outputChance !== undefined) {
      recipe = recipe.chance(outputChance, (builder) => builder.outputItems(outputItems));
    } else {
      outputItems.forEach((item) => {
        recipe = recipe.outputItems(item);
      });
    }
  };

  createDrillRecipe({
    id: "mek1000:sml_drilling_s",
    machineLevel: 0,
    duration: 20 * 10,
    tool: "minecraft:diamond_pickaxe",
    outputItems: smallOres,
    outputChance: 0.1,
  });

  createDrillRecipe({
    id: "mek1000:sml_drilling_s_bablo",
    machineLevel: 0,
    duration: 20 * 180,
    tool: "justdirethings:eclipsealloy_pickaxe",
    inputItems: [emcItem],
    outputItems: ["mek1000:bablo_crystal"],
  });

  createDrillRecipe({
    id: "mek1000:sml_drilling_l_bablo",
    machineLevel: 2,
    duration: 20,
    tool: laserTool,
    inputItems: [emcItem, "1x mek1000:bablo_crystal"],
    outputItems: ["128x mek1000:bablo_crystal"],
  });

  createDrillRecipe({
    id: "mek1000:sml_drilling_m",
    machineLevel: 1,
    duration: 20,
    tool: "minecraft:netherite_pickaxe",
    outputItems: smallOres,
  });

  event.recipes.mek1000
    .sml_drill()
    .id("mek1000:sml_drilling_l1")
    .machineLevel(2)
    .duration(20)
    .perTick((builder) => builder.inputFE(drillEnergy))
    .chance(0, (builder) => builder.inputItems(laserTool))
    .inputItems(emcItem, "minecraft:budding_amethyst")
    .outputItems("1024x minecraft:amethyst_block")
    .chance(0.8, (builder) => builder.outputItems("1024x minecraft:amethyst_block"))
    .chance(0.5, (builder) => builder.outputItems("1024x minecraft:amethyst_block"))
    .chance(0.1, (builder) => builder.outputItems("8192x minecraft:amethyst_block"));

  const largeOreRecipes = [
    ["mek1000:sml_drilling_l2", "kubejs:ore_certus_quartz", "1024x kubejs:ore_certus_quartz", "1024x kubejs:dense_ore_certus_quartz"],
    ["mek1000:sml_drilling_l3", "minecraft:coal_ore", "1024x minecraft:coal_ore", "1024x denseores:dense_coal_ore"],
    ["mek1000:sml_drilling_l4", "minecraft:iron_ore", "1024x minecraft:iron_ore", "1024x denseores:dense_iron_ore"],
    ["mek1000:sml_drilling_l5", "minecraft:gold_ore", "1024x minecraft:gold_ore", "1024x denseores:dense_gold_ore"],
    ["mek1000:sml_drilling_l6", "minecraft:copper_ore", "1024x minecraft:copper_ore", "1024x denseores:dense_copper_ore"],
    ["mek1000:sml_drilling_l7", "minecraft:diamond_ore", "1024x minecraft:diamond_ore", "1024x denseores:dense_diamond_ore"],
    ["mek1000:sml_drilling_l8", "minecraft:emerald_ore", "1024x minecraft:emerald_ore", "1024x denseores:dense_emerald_ore"],
    ["mek1000:sml_drilling_l9", "minecraft:lapis_ore", "1024x minecraft:lapis_ore", "1024x denseores:dense_lapis_ore"],
    ["mek1000:sml_drilling_l10", "minecraft:redstone_ore", "1024x minecraft:redstone_ore", "1024x denseores:dense_redstone_ore"],
    ["mek1000:sml_drilling_l11", "kubejs:ore_quartz", "1024x kubejs:ore_quartz", "1024x kubejs:dense_ore_quartz"],
    ["mek1000:sml_drilling_l12", "mekanism:tin_ore", "1024x mekanism:tin_ore", "1024x densemekanism:dense_tin_ore"],
    ["mek1000:sml_drilling_l13", "mekanism:fluorite_ore", "1024x mekanism:fluorite_ore", "1024x densemekanism:dense_fluorite_ore"],
    ["mek1000:sml_drilling_l14", "mekanism:lead_ore", "1024x mekanism:lead_ore", "1024x densemekanism:dense_lead_ore"],
    ["mek1000:sml_drilling_l15", "mekanism:osmium_ore", "1024x mekanism:osmium_ore", "1024x densemekanism:dense_osmium_ore"],
    ["mek1000:sml_drilling_l16", "mekanism:uranium_ore", "1024x mekanism:uranium_ore", "1024x densemekanism:dense_uranium_ore"],
    ["mek1000:sml_drilling_l17", "kubejs:ore_iridium", "1024x kubejs:ore_iridium", "1024x kubejs:dense_ore_iridium"],
  ];

  largeOreRecipes.forEach(([id, inputOre, normalOutput, denseOutput]) => {
    createDrillRecipe({
      id,
      machineLevel: 2,
      duration: 20,
      tool: laserTool,
      inputItems: [emcItem, inputOre],
      outputItems: [normalOutput, denseOutput],
    });
  });

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l16")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'mekanism:uranium_ore')

        .outputItems('1024x mekanism:uranium_ore')
        .outputItems('1024x densemekanism:dense_uranium_ore')

    event.recipes.mek1000.sml_drill()
        .id("mek1000:sml_drilling_l17")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick(builder => builder
            .inputFE(2147483647)
        )
        .chance(0, builder => builder
            .inputItems('mekanism:laser')
        )
        .inputItems('mek1000:emc', 'kubejs:ore_iridium')

        .outputItems('1024x kubejs:ore_iridium')
        .outputItems('1024x kubejs:dense_ore_iridium')

    event.recipes.mek1000
        .sml_drill()
        .id("mek1000:sml_drilling_l18")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick((builder) => builder.inputFE(2147483647))
        .chance(0, (builder) => builder.inputItems("mekanism:laser"))
        .inputItems("mek1000:emc", "kubejs:ore_debri_deepslate")
        .outputItems("1024x kubejs:ore_debri_deepslate");

    event.recipes.mek1000
        .sml_drill()
        .id("mek1000:sml_drilling_l19")
        .machineLevel(2)
        .duration(20 * 1)
        .perTick((builder) => builder.inputFE(2147483647))
        .chance(0, (builder) => builder.inputItems("mekanism:laser"))
        .inputItems("mek1000:emc", '64x mekanism_extras:block_naquadah')
        .outputItems("2048x mekanism_extras:end_naquadah_ore")
        .chance(0.3, builder => builder
            .outputItems('2048x mekanism_extras:end_naquadah_ore')
        );
})