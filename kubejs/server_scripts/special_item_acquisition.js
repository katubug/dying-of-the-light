LootJS.modifiers((event) => {

    event.enableLogging();

//Cornelia Drops
    //Tortured Souls drop Rune Echo Stones when Cornelia quest is active
    event.addEntityLootModifier("aquamirae:tortured_soul")
    .hasAnyStage(['cornelia_begun'])
    .killedByPlayer()
    .addLoot('kubejs:rune_echo_stone')

    //Fish up Cornelia's Frozen Heart
    event.addLootTableModifier("minecraft:gameplay/fishing")
    .logName("cornelia_heart")
    .hasAnyStage(['cornelia_begun'])
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
    .killedByPlayer()
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
    .logName("mother_pearl")
    .hasAnyStage(['mother_begun'])
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
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:whalebone_harpoon")

    event.addEntityLootModifier("aquamirae:maze_mother")
    .hasAnyStage(["mother_begun"])
    .killedByPlayer()
    .addLoot("kubejs:whalebone_harpoon")

//Nameless Hanged
    //Blindfold from Pillager Outposts, I guess.
    event.addLootTableModifier("minecraft:chests/pillager_outpost")
    .logName("nameless_hanged_graveyard_med")
    .hasAnyStage(["nameless_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.2)
        pool.addLoot('kubejs:blindfold')
        pool.limitCount([0, 1], [1, 1])
    })
    
    //Ragged Rope from Pillagers
    event.addEntityLootModifier("minecraft:pillager")
    .hasAnyStage(["nameless_begun"])
    .killedByPlayer()
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
    //Broken Toy from village chests minecraft:chests/village/village_plains_house
    event.addLootTableModifier("minecraft:chests/village/village_plains_house")
    .logName("hidebehind_toy")
    .hasAnyStage(["hidebehind_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.5)
        pool.addLoot('kubejs:broken_toy')
        pool.limitCount([0, 1], [1, 1])
    })
    //Carved Whistle from village chests minecraft:chests/illager_mansion/generic
    event.addLootTableModifier("minecraft:chests/illager_mansion/generic")
    .logName("hidebehind_whistle")
    .hasAnyStage(["hidebehind_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.5)
        pool.addLoot('kubejs:carved_whistle')
        pool.limitCount([0, 1], [1, 1])
    })
    //Unsent Letter from minecraft:chests/stronghold/library
    event.addLootTableModifier("minecraft:chests/stronghold/library")
    .logName("hidebehind_letter")
    .hasAnyStage(["hidebehind_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.5)
        pool.addLoot('kubejs:unsent_letter')
        pool.limitCount([0, 1], [1, 1])
    })

//Herobrine
    //Oblivion Dust from The Possessed
    event.addEntityLootModifier("endofherobrine:chicken")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    event.addEntityLootModifier("endofherobrine:cow")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    event.addEntityLootModifier("endofherobrine:pig")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    event.addEntityLootModifier("endofherobrine:pigman")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    event.addEntityLootModifier("endofherobrine:rabbit")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    event.addEntityLootModifier("endofherobrine:chicken")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    event.addEntityLootModifier("endofherobrine:sheep")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    event.addEntityLootModifier("endofherobrine:villager")
    .hasAnyStage(["herobrine_begun"])
    .killedByPlayer()
    .randomChance(0.15)
    .addLoot("kubejs:oblivion_dust")

    //Strange Tool from minecraft:chests/village/village_toolsmith
    event.addLootTableModifier("minecraft:chests/village/village_toolsmith")
    .logName("herobrine_tool")
    .hasAnyStage(["herobrine_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.5)
        pool.addLoot('kubejs:strange_tool')
        pool.limitCount([0, 1], [1, 1])
    })

    //Possessed Journal from Village Chests minecraft:chests/village/village_weaponsmith
    event.addLootTableModifier("minecraft:chests/village/village_weaponsmith")
    .logName("herobrine_journal")
    .hasAnyStage(["herobrine_begun"])
    .pool((pool) =>{
        pool.rolls([0, 1])
        pool.randomChance(0.5)
        pool.addLoot('kubejs:possessed_journal')
        pool.limitCount([0, 1], [1, 1])
    })

})



