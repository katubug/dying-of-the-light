ServerEvents.tags('item', event => {

    event.add(
        'spoiled:foods/vanilla', 
        'meadow:alpine_salt'
    )

    event.add(
        'forge:spoilable_fish',
        'fishofthieves:cooked_wildsplash',
        'fishofthieves:devilfish',
        'fishofthieves:cooked_devilfish',
        'fishofthieves:battlegill',
        'fishofthieves:cooked_battlegill',
        'fishofthieves:cooked_wrecker',
        'fishofthieves:wrecker',
        'fishofthieves:cooked_stormfish',
        'fishofthieves:cooked_plentifin',
        'minecraft:cod',
        'minecraft:cooked_cod',
        'minecraft:salmon',
        'minecraft:cooked_salmon',
        'minecraft:tropical_fish',
        'fishofthieves:plentifin',
        'fishofthieves:cooked_ancientscale',
        'fishofthieves:ancientscale',
        'fishofthieves:cooked_islehopper',
        'fishofthieves:islehopper',
        'fishofthieves:cooked_pondie',
        'fishofthieves:pondie',
        'fishofthieves:cooked_splashtail',
        'fishofthieves:splashtail',
        'fishofthieves:stormfish',
        'fishofthieves:wildsplash'
    )

    event.add(
        'forge:spoilable_food',
        'abyssal_decor:muckroot_soup',
        'crockpot:ice_cream',
        'abyssal_decor:cooked_muckroot',
        'crockpot:breakfast_skillet',
        'crockpot:froggle_bunwich',
        'crockpot:scotch_egg',
        'crockpot:fruit_medley',
        'crockpot:mashed_potatoes',
        'crockpot:asparagus_soup',
        'crockpot:mushy_cake',
        'crockpot:perogies',
        'crockpot:potato_souffle',
        'crockpot:flower_salad',
        'crockpot:watermelon_icle',
        'crockpot:milk_bottle',
        'crockpot:jammy_preserves',
        'crockpot:stuffed_eggplant',
        'crockpot:plain_omelette',
        'crockpot:pepper_popper',
        'crockpot:ratatouille',
        'crockpot:bone_soup',
        'crockpot:california_roll',
        'crockpot:salsa',
        'crockpot:cooked_eggplant',
        'tombstone:easter_egg_food',
        'crockpot:gazpacho',
        'immersive_weathering:golden_moss_clump',
        'crockpot:veg_stinger',
        'crockpot:cooked_egg',
        'crockpot:glow_berry_mousse'
    )

    event.add(
        'forge:spoilable_meat',
        'crockpot:seafood_gumbo',
        'crockpot:kabobs',
        'crockpot:monster_lasagna',
        'crockpot:monster_tartare',
        'crockpot:meat_balls',
        'crockpot:fish_sticks',
        'crockpot:hot_chili',
        'crockpot:bacon_eggs',
        'crockpot:moqueca',
        'crockpot:ceviche',
        'crockpot:fish_tacos',
        'crockpot:bone_stew',
        'crockpot:surf_n_turf',
        'crockpot:tropical_bouillabaisse',
        'crockpot:turkey_dinner',
        'crockpot:honey_ham',
        'crockpot:honey_nuggets',
        'crockpot:volt_goat_jelly',
        'crockpot:bunny_stew',
        'crockpot:salmon_sushi',
        'crockpot:potato_tornado'
    )

    event.add(
        'forge:spoilable_veggies',
        'crockpot:tomato',
        'crockpot:pepper',
        'legendarysurvivaloverhaul:heart_fruit',
        'crockpot:corn',
        'crockpot:eggplant',
        'crockpot:asparagus',
        'minecraft:apple',
        'minecraft:melon_slice',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:baked_potato',
        'minecraft:beetroot'
    )

    event.add(
        'forge:cooked_to_rotten_flesh',
        'minecraft:cooked_porkchop', 
        'minecraft:cooked_beef', 
        'crockpot:cooked_hoglin_nose', 
        'crockpot:cooked_frog_legs', 
        'minecraft:cooked_rabbit', 
        'minecraft:cooked_chicken', 
        'minecraft:cooked_mutton'
    )

    event.add(
        'forge:raw_to_rotten_flesh',
        'minecraft:cooked_porkchop', 
        'minecraft:cooked_beef', 
        'crockpot:cooked_hoglin_nose', 
        'crockpot:cooked_frog_legs', 
        'minecraft:cooked_rabbit', 
        'minecraft:cooked_chicken', 
        'minecraft:cooked_mutton'
    )

    event.add(
        'forge:picnic_baskets',
        'muffins_picnic:white_picnic_basket',
        'muffins_picnic:light_gray_picnic_basket',
        'muffins_picnic:gray_picnic_basket',
        'muffins_picnic:black_picnic_basket',
        'muffins_picnic:brown_picnic_basket',
        'muffins_picnic:red_picnic_basket',
        'muffins_picnic:orange_picnic_basket',
        'muffins_picnic:yellow_picnic_basket',
        'muffins_picnic:lime_picnic_basket',
        'muffins_picnic:green_picnic_basket',
        'muffins_picnic:cyan_picnic_basket',
        'muffins_picnic:light_blue_picnic_basket',
        'muffins_picnic:blue_picnic_basket',
        'muffins_picnic:purple_picnic_basket',
        'muffins_picnic:magenta_picnic_basket',
        'muffins_picnic:pink_picnic_basket'
    )
    /*
    let saltedFoods = [
        Item.of('minecraft:beetroot_soup', '{Salted:1b}')
    ]

    for (const food of saltedFoods) {
        event.remove(
            'spoiled:foods',
            food
        )
    }*/


    
})


