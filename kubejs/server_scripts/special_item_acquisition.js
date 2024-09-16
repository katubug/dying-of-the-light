LootJS.modifiers((event) => {

    event.enableLogging();

//Cornelia Drops
    //Tortured Souls drop Rune Echo Stones when Cornelia quest is active
    event.addEntityLootModifier("aquamirae:tortured_soul")
    .hasAnyStage(['cornelia_begun'])
    .addLoot('kubejs:rune_echo_stone')

    //Fish up Cornelia's Frozen Heart
    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("cornelia_heart")
    //.hasAnyStage(['cornelia_begun'])
    .weatherCheck({
        raining: true,
        thundering: true
    })
    .biome("minecraft:deep_frozen_ocean")
    .randomChance(0.05)
    .removeLoot(Ingredient.all)
    .addLoot('kubejs:icy_heart_fragment');

    //Find Cornelia's Log in Ship Chests
    event.addLootTableModifier("aquamirae:chests/ship_2")
    .logName("cornelia_ship2")
    .hasAnyStage(['cornelia_begun'])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.1)
        pool.addLoot('kubejs:ships_log')
        pool.limitCount([0, 1], [1, 1])
    })

    event.addLootTableModifier("aquamirae:chests/ship_1")
    .logName("cornelia_ship1")
    .hasAnyStage(['cornelia_begun'])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.1)
        pool.addLoot('kubejs:ships_log')
        pool.limitCount([0, 1], [1, 1])
    })

//Cave Dweller
    //Polished Coal from Mineshafts
    event.addLootTableModifier("minecraft:chests/abandoned_mineshaft")
    .logName("cave_dweller_mineshaft")
    .hasAnyStage(["dweller_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.2)
        pool.addLoot('kubejs:polished_coal')
        pool.limitCount([0, 1], [1, 1])
    })

    //Woman's Locket from Graveyards
    event.addLootTableModifier("graveyard:chests/medium_loot")
    .logName("cave_dweller_graveyard_med")
    .hasAnyStage(["dweller_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.2)
        pool.addLoot('kubejs:womans_locket')
        pool.limitCount([0, 1], [1, 1])
    })

    //Necromantic Contract from Witches
    event.addEntityLootModifier("minecraft:witch")
    .hasAnyStage(["dweller_begun"])
    .addLoot("kubejs:necromantic_contract")

//Maze Mother
    //Idol from Igloos. 100% chance because of how rare igloos are. I think I might not even have the stage attached to it? And then just add in something else you can do with the item.
    event.addLootTableModifier("minecraft:chests/igloo_chest")
    .logName("maze_mother_igloo")
    //.hasAnyStage(["mother_begun"])
    .pool((pool) =>{
        pool.rolls([1, 1])
        pool.randomChance(1.0)
        pool.addLoot('kubejs:manta_ray_idol')
        pool.limitCount([1, 1], [1, 1])
    })
    
    //Tainted Pearl from fishing in Deep Frozen Ocean during rain
    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("cornelia_heart")
    //.hasAnyStage(['cornelia_begun'])
    .weatherCheck({
        raining: true
    })
    .biome("minecraft:deep_frozen_ocean")
    .randomChance(0.05)
    .removeLoot(Ingredient.all)
    .addLoot('kubejs:tainted_pearl');

    //Whalebone Harpoon from either Maze Mother or Anglerfish
    event.addEntityLootModifier("aquamirae:anglerfish")
    .hasAnyStage(["mother_begun"])
    .randomChance(0.15)
    .addLoot("kubejs:whalebone_harpoon")

    event.addEntityLootModifier("aquamirae:maze_mother")
    .hasAnyStage(["mother_begun"])
    .addLoot("kubejs:whalebone_harpoon")

//Nameless Hanged
    //Blindfold from Graves (?)
    //Ragged Rope from Pillagers
    event.addEntityLootModifier("minecraft:pillager")
    .hasAnyStage(["nameless_begun"])
    .randomChance(0.15)
    .addLoot("kubejs:ragged_rope")

    //Trade Goods from Wandering Trader or rarely in village chests
    event.addLootTableModifier("minecraft:chests/village/village_taiga_house")
    .logName("nameless_taiga")
    .hasAnyStage(["nameless_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.5)
        pool.addLoot('kubejs:trade_goods')
        pool.limitCount([0, 1], [1, 1])
    })

    event.addLootTableModifier("minecraft:chests/village/village_snowy_house")
    .logName("nameless_snowy")
    .hasAnyStage(["nameless_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.5)
        pool.addLoot('kubejs:trade_goods')
        pool.limitCount([0, 1], [1, 1])
    })

//HideBehind
    //Broken Toy from village chests
    //Carved Whistle from village chests
    //Autumn Leaves from i want to replace this item, it kinda sucks.

//Herobrine
    //Oblivion Dust from The Possessed
    //Strange Tool
    //Possessed Journal from Village Chests

})



