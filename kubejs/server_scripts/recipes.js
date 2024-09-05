ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ring_of_return:ring_of_return'),
        [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'minecraft:iron_nugget',
            B: 'minecraft:ender_pearl'
        }
    )

    event.shaped(
        Item.of('2x tombstone:essence_of_undeath'),
        [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'tombstone:grave_dust',
            B: 'minecraft:rotten_flesh'
        }
    )

    event.shaped(
        Item.of('minecraft:lantern'),
        [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:iron_nugget',
            B: 'minecraft:glowstone_dust'
        }
    )

    event.shaped(
        Item.of('kubejs:lunar_gem'),
        [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'tombstone:grave_dust',
            B: 'minecraft:diamond'
        }
    )

    //Summoning Ritual for Lore Books
    //Cave Dweller
    event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"Cave Dweller"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"The creature known as Cave Dweller was once a human man, known as Garrik. He was a miner, and a devoted husband and father. He and his family lived in a modest, cozy hut by the sea.\\\\n\\\\nBut his fate was cursed to tragedy."}\',\'{"font":"runelic:runelic","text":"One bright, otherwise cheery summer, his young daughter fell gravely ill.\\\\n\\\\nThe sickness came from the blue - she had been a laughing, healthy child her whole life. Yet within days, she withered, and passed away."}\',\'{"font":"runelic:runelic","text":"Garrik and his wife were devastated. In less than a week, their precious child had gone from vibrant and happy - to gone from this world.\\\\n\\\\nHis wife fell into a deep depression, and Garrik feared he would lose her, too."}\',\'{"font":"runelic:runelic","text":"Without his wife knowing, Garrik sought the help of a necromancer, who agreed to revive Garrik\\\'s daughter - but at a desperate price.\\\\n\\\\nHe agreed without hesitation, and the necromancer promised to begin his dark rituals."}\',\'{"font":"runelic:runelic","text":"Over the next few weeks, Garrik grew leaner and paler. His wife, lost to sorrow as she was, barely acknowledged the change until the day he lashed out at her, but it was too late. With his new, freakish strength, he killed her, and in doing so, lost his mind."}\',\'{"font":"runelic:runelic","text":"In horror at his own actions, Garrik fled the house. He did not stop running until he was deep into the mines that were so familiar to him.\\\\n\\\\nThere, he wailed and writhed, and tore at his own flesh, refusing to eat or drink."}\',\'{"font":"runelic:runelic","text":"And there he has stayed since, his body and mind warping until neither held any remaining trace of humanity.\\\\n\\\\nMeanwhile, back behind a modest, cozy hut by the sea, a small grave stirred in the darkness of night..."}\'],title:"Cave Dweller"}'))
        .input('kubejs:cave_dweller_poppet')
        .input(Item.of('minecraft:iron_pickaxe', '{Damage:0}'))
        .input('64x minecraft:cobblestone')
        .input('minecraft:rotten_flesh')
        .blockBelow('minecraft:deepslate')
        .recipeTime(200)

        //Captain Cornelia
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(Item.of('minecraft:written_book', '{author:"unknown",generation:3,pages:[\'{"text":"Cornelia had loved the sea since childhood. Little wonder, then, that she followed in her father\\\'s footsteps and became a ship\\\'s captain. She may not always have been on the right side of the law, but she was fair and just, and treated her crew with respect."}\',\'{"text":"The crown did not care about her virtues. She was caught, betrayed by her own bosun, and sentenced to execution - except she was offered a chance at redemption. If she would take her men to the far north, to seek out the Ice Rune, she would be spared."}\',\'{"text":"And so she went to where the wind steals your breath and replaces it with icy daggers. And soon she understood that she had not been spared at all - this expedition was just as like a death sentence."}\',\'{"text":"The cold claimed first the ship, then many of the crew. Supplies dwindled, frost seeped in like seawater in a sinking ship. Hope died like an ember in the ice.\\\\n\\\\nOnly desperation kept the Captain going."}\',\'{"text":"\\\\"The Rune!\\\\" - she thought. \\\\"Perhaps it has the power to save us.\\\\" After all, if it was so desired, it must be very strong. Could it force this godforsaken chill out of her bones?\\\\n\\\\nShe took the crew\\\'s diving suit and left for the sea bed."}\',\'{"text":"She sensed she was close - she felt almost called to it. To the bottom of the sea, buried beneath the remains of untold dead things and sand.\\\\n\\\\nShe ought to have listened to the warning in her heart, but she did not. She began digging."}\',\'{"text":"Looking out through her helmet\\\'s glass visor, she watched her gloved hands delve into the ocean\\\'s bed for the final time, and pulled forth the rune.\\\\n\\\\nFor a moment, all was quiet. And then she screamed."}\',\'{"text":"The Rune sent icy tendrils through her veins, claiming every part of her, tearing and corrupting as it went. Long tentacles sprouted forth from the skin beneath her helmet.\\\\n\\\\nIn moments, gone was the little girl who had so loved the sea."}\',\'{"text":"In her place was a shadow, a monster, whose stopped heart would never again feel the joy of the sea. A malevolent being who would hunt any who sought to take the Rune from her."}\'],title:"Captain Cornelia"}'))
        .input('kubejs:captain_cornelia_poppet')
        .input('aquamirae:abyssal_amethyst')
        .input('aquamirae:ship_graveyard_echo')
        .input(Item.of('minecraft:potion', '{Potion:"minecraft:water_breathing"}'))
        .blockBelow('minecraft:packed_ice')
        .recipeTime(200)

        //Maze Mother
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"The Mother"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"In the depths of the frozen ocean are ancient beings. Cetaceans, Mylobatiae, and creatures too old to be named.\\\\n\\\\nOne of them, once, was the Mother. She was so called for her gentle shepherding of the sea life."}\',\'{"font":"runelic:runelic","text":"She once upon a time would glide silently through the dark waters, as if in flight. A fitting thought, for her wide fins looked very much like wings.\\\\n\\\\nShe ruled the ocean, a peaceful, loving being. But all good things must come to an end."}\',\'{"font":"runelic:runelic","text":"For humans had arrived in that isolated place. Bearing the stink of dead whales and rotting fish, they bore down upon the frozen ocean and were soon consumed by the ice. The Mother did not know of man, and so maintained her distance. "}\',\'{"font":"runelic:runelic","text":"But her solitude would soon be broken, as one of their ilk descended into the depths. The being had a round, metal head and a vicious spear. It drew up from the depths an item which the Mother did not understand, but which burned into her mind once unearthed."}\',\'{"font":"runelic:runelic","text":"It was poison, fell magic seeping from its shell. Powerful, indeed, but with a corruption that no living thing could resist.\\\\n\\\\nThe metal being seemed similarly affected, for it warped and mutated, growing tentacles and writhing in apparent agony."}\',\'{"font":"runelic:runelic","text":"The item, glowing with malice, reached out to the Mother and drew her in, as well. Her sleek black visage became studded with glowing crystals, and her eyes turned dead and sallow. Her behavior was matronly no more: now she was hungry. Desperately so."}\',\'{"font":"runelic:runelic","text":"In the end, the gentle manta which once watched over the isolated waters became a hollow force; haunting the sound, devouring all in her path."}\'],resolved:1b,title:"The Mother"}'))
        .input('kubejs:maze_mother_poppet')
        .input('minecraft:dirt')
        .input('minecraft:dirt')
        .blockBelow('minecraft:dirt')
        .recipeTime(200)

        //Nameless Hanged
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"The Nameless Hanged"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"It was a cold and wicked winter when the stranger arrived. He was blind, dressed in tattered monk robes, and was peddling wares from all corners of the land. Buying and selling was his trade, and he never stayed in one place for very long."}\',\'{"font":"runelic:runelic","text":"No one knew why he wandered, or where he\\\'d come from. Most didn\\\'t ask, but those that did were met with a smile and a shrug.\\\\n\\\\nWhat was oddest about him, though, was that it seemed, for all intents and purposes, as if he had preternatural sight. "}\',\'{"font":"runelic:runelic","text":"He walked without a cane, and easily appraised items he was presented. The children would often try to test him by holding up fingers or objects, but he guessed unerringly, every time. So perhaps it was inevitable that mistrust would one day get the better of him."}\',\'{"font":"runelic:runelic","text":"The night that he arrived in the village, there was a cruel blizzard. It tore through, freezing livestock and anyone unfortunate enough to venture out. By morning, the bodies were stiff as ice. But not the stranger."}\',\'{"font":"runelic:runelic","text":"He was not only alright, but he was smiling. Perhaps that\\\'s why they killed him. The people hounded him down and slipped a noose around his neck.\\\\n\\\\nWith his last breath, he tried to choke out a plea, but to no avail."}\',\'{"font":"runelic:runelic","text":"His body was left hanging from the old oak for the rest of the winter, but it never seemed to freeze.\\\\n\\\\nIn the end, no one remembered what he was called. And now, his name is lost forever, even to himself."}\'],title:"The Nameless Hanged"}'))
        .input('kubejs:nameless_hanged_poppet')
        .input('minecraft:dirt')
        .input('minecraft:dirt')
        .blockBelow('minecraft:dirt')
        .recipeTime(200)

        //Sneaking Terror
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput('minecraft:dirt')
        .input('kubejs:sneaking_terror_poppet')
        .input('minecraft:dirt')
        .blockBelow('minecraft:dirt')
        .recipeTime(200)

        //Rotting Stalker
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput('minecraft:dirt')
        .input('kubejs:rotting_stalker_poppet')
        .input('minecraft:dirt')
        .blockBelow('minecraft:dirt')
        .recipeTime(200)

        //Herobrine
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"Herobrine"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"Legends say that Herobrine was once a man named Steve, but this is not entirely the truth. The being you call Herobrine is not of this realm at all, but instead hails from a distant plane, cold and lifeless, and always dark."}\',\'{"font":"runelic:runelic","text":"He came to this realm because of the sunshine. He wishes to be alive the way we are. To feel warmth, to enjoy the taste of fresh food and the gentleness of an embrace. But he lacks the ability. His reality is so far"}\',\'{"font":"runelic:runelic","text":"removed from ours, that he can never understand what it means to live. He tries to get a semblance of our experience by possessing villagers, creatures, even monsters. There he can pretend he feels the sunshine or the rain."}\',\'{"font":"runelic:runelic","text":"But he cannot. He cannot understand, and his impotence drives him mad. The lack of feeling permeates him in every cell. What he desires the most, he can never have."}\'],title:"Herobrine"}'))
        .input('kubejs:herobrine_poppet')
        .input('minecraft:dirt')
        .blockBelow('minecraft:dirt')
        .recipeTime(200)

    /*
    //Lantern Filling/Lighting

    let oilCan = Ingredient.of('hardcore_torches:oil_can').withNBT(Fuel >=144000);
    let unlitLantern = 'hardcore_torches:unlit_lantern';

    event.shapeless(
        Item.of('hardcore_torches:unlit_lantern', '{Fuel:144000}'),
        [
            unlitLantern,
            oilCan
        ]
    )
        

    event.shapeless(
        Item.of('hardcore_torches:lit_torch'),
        [
            'minecraft:flint_and_steel', 
            '#hardcore_torches:torches'
        ]
    ).replaceIngredient('minecraft:flint_and_steel', 'minecraft:flint_and_steel')
    */

})




