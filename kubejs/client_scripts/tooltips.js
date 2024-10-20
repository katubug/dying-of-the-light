ItemEvents.tooltip(event => {

    event.add('graveyard:ossuary',
        'Place Bone Blocks inside to transform them.')

    event.add('minecraft:potato',
        'Cannot be planted directly. Store until it becomes Rooted Potato to plant.'
    )

    event.add('kubejs:lunar_gem',
        'Right click while holding to find the current moon phase.'
    )

    /*
    event.add('void_tome:void_tome',
        'This book makes you feel uneasy. Your sanity drains while you hold it in your hand.'
    )*/

    event.add('kubejs:void_tome',
        'This book makes you feel uneasy. Your sanity drains while you hold it in your hand.'
    )

    event.add('kubejs:lunatics_tome',
        'Right click to gain a small amount of Insight.'
    )

    event.add('kubejs:great_ones_tome',
        'Right click to gain a large amount of Insight.'
    )

    //Drink Tooltips
    event.add([
        'abyssal_decor:cinnamon_tea',
        'abyssal_decor:fever_blossom_tea',
        'crockpot:hot_cocoa',
        'crockpot:iced_tea',
        'crockpot:milk_bottle',
        'crockpot:tea',
        'crockpot:veg_stinger',
        'legendarysurvivaloverhaul:apple_juice',
        'legendarysurvivaloverhaul:beetroot_juice',
        'legendarysurvivaloverhaul:cactus_juice',
	    'legendarysurvivaloverhaul:canteen',
        'legendarysurvivaloverhaul:carrot_juice',
        'legendarysurvivaloverhaul:chorus_fruit_juice',
        'legendarysurvivaloverhaul:glistering_melon_juice',
        'legendarysurvivaloverhaul:golden_apple_juice',
        'legendarysurvivaloverhaul:golden_carrot_juice',
        'legendarysurvivaloverhaul:large_canteen',
        'legendarysurvivaloverhaul:melon_juice',
        'legendarysurvivaloverhaul:purified_water_bottle',
        'legendarysurvivaloverhaul:water_plant_bag',
        'bitter_brews:cup_of_hot_cocoa',
        'bitter_brews:cup_of_water',
        'bitter_brews:cup_of_milk',
        'bitter_brews:cup_of_chocolate_milk',
        'bitter_brews:cup_of_melon_juice',
        'bitter_brews:cup_of_sweet_berry_juice',
        'bitter_brews:cup_of_glow_berry_juice',
        'bitter_brews:cup_of_chorus_juice',
        'bitter_brews:cup_of_green_tea',
        'bitter_brews:cup_of_azalea_tea',
        'bitter_brews:cup_of_black_tea',
        'bitter_brews:cup_of_iced_tea',
        'bitter_brews:cup_of_honey_tea',
        'bitter_brews:cup_of_mango_tea',
        'bitter_brews:cup_of_kelp_tea',
        'bitter_brews:cup_of_jasmine_tea',
        'bitter_brews:cup_of_crimson_tea',
        'bitter_brews:cup_of_warped_tea',
        'bitter_brews:cup_of_shroomlight_tea',
        'bitter_brews:cup_of_coffee',
        'bitter_brews:cup_of_dark_coffee',
        'bitter_brews:cup_of_espresso',
        'bitter_brews:cup_of_lightning'
    ],
    'Drinks!')

    //Food Tooltips
    event.add([
        'abyssal_decor:bog_apple_pie',
        'abyssal_decor:bog_roll',
        'abyssal_decor:candy_bog_apple',
        'abyssal_decor:cinnamon_apple',
        'abyssal_decor:cinnamon_roll',
        'abyssal_decor:popped_spidercorn',
        'aquamirae:cooked_spinefish',
        'aquamirae:esca',
        'aquamirae:poseidons_breakfast',
        'aquamirae:sea_casserole',
        'aquamirae:sea_stew',
        'crockpot:asparagus_soup',
        'crockpot:bacon_eggs',
        'crockpot:bone_soup',
        'crockpot:bone_stew',
        'crockpot:breakfast_skillet',
        'crockpot:bunny_stew',
        'crockpot:california_roll',
        'crockpot:candy',
        'crockpot:ceviche',
        'crockpot:cooked_egg',
        'crockpot:cooked_frog_legs',
        'crockpot:cooked_hoglin_nose',
        'crockpot:fish_sticks',
        'crockpot:fish_tacos',
        'crockpot:flower_salad',
        'crockpot:froggle_bunwich',
        'crockpot:fruit_medley',
        'crockpot:gazpacho',
        'crockpot:glow_berry_mousse',
        'crockpot:honey_ham',
        'crockpot:honey_nuggets',
        'crockpot:hot_chili',
        'crockpot:ice_cream',
        'crockpot:jammy_preserves',
        'crockpot:kabobs',
        'crockpot:mashed_potatoes',
        'crockpot:meat_balls',
        'crockpot:monster_lasagna',
        'crockpot:monster_tartare',
        'crockpot:moqueca',
        'crockpot:mushy_cake',
        'crockpot:pepper_popper',
        'crockpot:perogies',
        'crockpot:perogies',
        'crockpot:plain_omelette',
        'crockpot:popcorn',
        'crockpot:potato_souffle',
        'crockpot:potato_tornado',
        'crockpot:pow_cake',
        'crockpot:pumpkin_cookie',
        'crockpot:ratatouille',
        'crockpot:salmon_sushi',
        'crockpot:salsa',
        'crockpot:scotch_egg',
        'crockpot:seafood_gumbo',
        'crockpot:stuffed_eggplant',
        'crockpot:surf_n_turf',
        'crockpot:taffy',
        'crockpot:tropical_bouillabaisse',
        'crockpot:turkey_dinner',
        'crockpot:veg_stinger',
        'crockpot:volt_goat_jelly',
        'crockpot:watermelon_icle',
        'fishofthieves:cooked_ancientscale',
        'fishofthieves:cooked_battlegill',
        'fishofthieves:cooked_devilfish',
        'fishofthieves:cooked_islehopper',
        'fishofthieves:cooked_plentifin',
        'fishofthieves:cooked_pondie',
        'fishofthieves:cooked_stormfish',
        'fishofthieves:cooked_wildsplash',
        'fishofthieves:cooked_wrecker',
        'immersive_weathering:enchanted_golden_moss_clump',
        'immersive_weathering:golden_moss_clump',
        'midnight:cooked_stag_flank',
        'midnight:cooked_suavis',
        'minecraft:beetroot_soup',
        'minecraft:bread',
        'minecraft:cake',
        'minecraft:cooked_beef',
        'minecraft:cooked_chicken',
        'minecraft:cooked_cod',
        'minecraft:cooked_mutton',
        'minecraft:cooked_porkchop',
        'minecraft:cooked_rabbit',
        'minecraft:cooked_salmon',
        'minecraft:cookie',
        'minecraft:mushroom_stew',
        'minecraft:pumpkin_pie',
        'minecraft:rabbit_stew',
        'tide:cooked_fish',
    ],
    'Food/Meals')

    //Ingredient Tooltips
    event.add([
        'abyssal_decor:bog_apple',
        'abyssal_decor:bog_apple_leaves',
        'abyssal_decor:cinnamon_stick',
        'abyssal_decor:muckroot_item',
        'abyssal_decor:spidercorn_crop',
        'aquamirae:fin',
        'aquamirae:spinefish',
        'crockpot:asparagus',
        'crockpot:corn',
        'crockpot:eggplant',
        'crockpot:frog_legs',
        'crockpot:frog_legs',
        'crockpot:garlic',
        'crockpot:hoglin_nose',
        'crockpot:hoglin_nose',
        'crockpot:milk_bottle',
        'crockpot:onion',
        'crockpot:pepper',
        'crockpot:syrup',
        'crockpot:tomato',
        'fishofthieves:ancientscale',
        'fishofthieves:battlegill',
        'fishofthieves:devilfish',
        'fishofthieves:islehopper',
        'fishofthieves:plentifin',
        'fishofthieves:pondie',
        'fishofthieves:splashtail',
        'fishofthieves:stormfish',
        'fishofthieves:wildsplash',
        'fishofthieves:wrecker',
        'immersive_weathering:moss_clump',
        'midnight:blue_unstable_fruit',
        'midnight:glob_fungus_hand',
        'midnight:lime_unstable_fruit',
        'midnight:raw_stag_flank',
        'midnight:raw_suavis',
        'midnight:teal_unstable_fruit',
        'minecraft:apple',
        'minecraft:beef',
        'minecraft:beetroot',
        'minecraft:carrot',
        'minecraft:chicken',
        'minecraft:chorus_fruit',
        'minecraft:cod',
        'minecraft:dried_kelp',
        'minecraft:egg',
        'minecraft:glow_berries',
        'minecraft:honey_bottle',
        'minecraft:melon',
        'minecraft:melon_slice',
        'minecraft:mutton',
        'minecraft:porkchop',
        'minecraft:potato',
        'minecraft:pumpkin',
        'minecraft:rabbit',
        'minecraft:salmon',
        'minecraft:sweet_berries',
        'minecraft:tropical_fish',
        'minecraft:tropical_fish',
        'minecraft:turtle_egg',
        'sculksickness:axolotl_leg',
        'sculksickness:bloom_fruit',
        'tide:abyss_angler',
        'tide:angelfish',
        'tide:anglerfish',
        'tide:ashen_perch',
        'tide:barracuda',
        'tide:bass',
        'tide:bedrock_tetra',
        'tide:birch_trout',
        'tide:blazing_swordfish',
        'tide:blossom_bass',
        'tide:bluegill',
        'tide:catfish',
        'tide:cave_crawler',
        'tide:cave_eel',
        'tide:chorus_cod',
        'tide:clayfish',
        'tide:crimson_fangjaw',
        'tide:crystalline_carp',
        'tide:crystal_shrimp',
        'tide:deep_grouper',
        'tide:dripstone_darter',
        'tide:echofin_snapper',
        'tide:elytrout',
        'tide:ember_koi',
        'tide:enderfin',
        'tide:endergazer',
        'tide:endstone_perch',
        'tide:fluttergill',
        'tide:frostbite_flounder',
        'tide:gilded_minnow',
        'tide:glowfish',
        'tide:guppy',
        'tide:hardened_clayfish',
        'tide:inferno_guppy',
        'tide:iron_tetra',
        'tide:lapis_lanternfish',
        'tide:leafback',
        'tide:luminescent_jellyfish',
        'tide:mackerel',
        'tide:magma_mackerel',
        'tide:midas_fish',
        'tide:mint_carp',
        'tide:mirage_catfish',
        'tide:oakfish',
        'tide:obsidian_pike',
        'tide:ocean_perch',
        'tide:pike',
        'tide:pine_perch',
        'tide:prarie_pike',
        'tide:purpur_pike',
        'tide:sailfish',
        'tide:sandskipper',
        'tide:shadow_snapper',
        'tide:shooting_starfish',
        'tide:slimefin_snapper',
        'tide:soulscaler',
        'tide:sporestalker',
        'tide:stonefish',
        'tide:sunspike_goby',
        'tide:trout',
        'tide:tuna',
        'tide:voidseeker',
        'tide:volcano_tuna',
        'tide:warped_guppy',
        'tide:witherfin',
        'tide:yellow_perch',
    ],
    'Raw Food/Ingredients')


})