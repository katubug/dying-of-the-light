ServerEvents.recipes(event => {
    //Eel Bait Craftable
    event.shapeless(
        Item.of('kubejs:eel_bait'),
        [
            '#minecraft:foodstuffs/raw',
            'aquamirae:spinefish',
            '#forge:salt'
        ]
    )
    
    //Ring of Return easier to make
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

    //Make Pure White Pearls craftable at high insight
    event.shapeless(
        Item.of('abyssal_decor:white_pearl'),
        [
            'tombstone:scroll_of_purification',
            '#forge:pearls_for_purification'
        ]
    ).stage("insightful")

    //Make Ender Eyes craftable with medium insight
    event.shapeless(
        Item.of('minecraft:ender_eye'),
        [
            'minecraft:blaze_powder', 
            'minecraft:ender_pearl'
        ]
    ).stage("insight_shop")

    //Essence of Undeath craftable
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

    //Lantern requires glowstone
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

    //Lunar Gem craftable
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

    //Summoning Altar craftable at high insight
    event.shaped(
        Item.of('summoningrituals:altar'),
        [
            'ECD',
            'BAB',
            'AAA'
        ], {
            A: 'minecraft:dark_oak_planks', 
            B: 'minecraft:gold_ingot', 
            C: 'minecraft:red_wool', 
            D: 'minecraft:wither_skeleton_skull', 
            E: 'minecraft:candle'
        }
    ).stage('insightful')

    //Summoning Ritual for Lore Books
    //Cave Dweller
    let dwellerBook = Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"Cave Dweller"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"The creature known as Cave Dweller was once a human man, known as Garrik. He was a miner, and a devoted husband and father. He and his family lived in a modest, cozy hut by the sea.\\\\n\\\\nBut his fate was cursed to tragedy."}\',\'{"font":"runelic:runelic","text":"One bright, otherwise cheery summer, his young daughter fell gravely ill.\\\\n\\\\nThe sickness came from the blue - she had been a laughing, healthy child her whole life. Yet within days, she withered, and passed away."}\',\'{"font":"runelic:runelic","text":"Garrik and his wife were devastated. In less than a week, their precious child had gone from vibrant and happy - to gone from this world.\\\\n\\\\nHis wife fell into a deep depression, and Garrik feared he would lose her, too."}\',\'{"font":"runelic:runelic","text":"Without his wife knowing, Garrik sought the help of a necromancer, who agreed to revive Garrik\\\'s daughter - but at a desperate price.\\\\n\\\\nHe agreed without hesitation, and the necromancer promised to begin his dark rituals."}\',\'{"font":"runelic:runelic","text":"Over the next few weeks, Garrik grew leaner and paler. His wife, lost to sorrow as she was, barely acknowledged the change until the day he lashed out at her, but it was too late. With his new, freakish strength, he killed her, and in doing so, lost his mind."}\',\'{"font":"runelic:runelic","text":"In horror at his own actions, Garrik fled the house. He did not stop running until he was deep into the mines that were so familiar to him.\\\\n\\\\nThere, he wailed and writhed, and tore at his own flesh, refusing to eat or drink."}\',\'{"font":"runelic:runelic","text":"And there he has stayed since, his body and mind warping until neither held any remaining trace of humanity.\\\\n\\\\nMeanwhile, back behind a modest, cozy hut by the sea, a small grave stirred in the darkness of night..."}\'],title:"Cave Dweller"}')
    event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(dwellerBook)
        .input('kubejs:cave_dweller_poppet')
        .input('kubejs:womans_locket')
        .input('kubejs:necromantic_contract')
        .input('kubejs:polished_coal')
        .input(Item.of('minecraft:iron_pickaxe', '{Damage:0}'))
        .input('64x minecraft:cobblestone')
        .blockBelow('minecraft:deepslate')
        .recipeTime(200)

    //Captain Cornelia
    let corneliaBook = Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"Captain Cornelia"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"Cornelia had loved the sea since childhood. Little wonder, then, that she followed in her father\\\'s footsteps and became a ship\\\'s captain. She may not always have been on the right side of the law, but she was fair and just, and treated her crew with respect."}\',\'{"font":"runelic:runelic","text":"The crown did not care about her virtues. She was caught, betrayed by her own bosun, and sentenced to execution - except she was offered a chance at redemption. If she would take her men to the far north, to seek out the Storm Rune, she would be spared."}\',\'{"font":"runelic:runelic","text":"And so she went to where the wind steals your breath and replaces it with icy daggers. And soon she understood that she had not been spared at all - this expedition was just as like a death sentence."}\',\'{"font":"runelic:runelic","text":"The cold claimed first the ship, then many of the crew. Supplies dwindled, frost seeped in like seawater in a sinking ship. Hope died like an ember in the ice.\\\\n\\\\nOnly desperation kept the Captain going."}\',\'{"font":"runelic:runelic","text":"\\\\"The Rune!\\\\" - she thought. \\\\"Perhaps it has the power to save us.\\\\" After all, if it was so desired, it must be very strong. Could it force this godforsaken chill out of her bones?\\\\n\\\\nShe took the crew\\\'s diving suit and left for the sea bed."}\',\'{"font":"runelic:runelic","text":"She sensed she was close - she felt almost called to it. To the bottom of the sea, buried beneath the remains of untold dead things and sand.\\\\n\\\\nShe ought to have listened to the warning in her heart, but she did not. She began digging."}\',\'{"font":"runelic:runelic","text":"Looking out through her helmet\\\'s glass visor, she watched her gloved hands delve into the ocean\\\'s bed for the final time, and pulled forth the rune.\\\\n\\\\nFor a moment, all was quiet. And then she screamed."}\',\'{"font":"runelic:runelic","text":"The Rune sent icy tendrils through her veins, claiming every part of her, tearing and corrupting as it went. Long tentacles sprouted forth from the skin beneath her helmet.\\\\n\\\\nIn moments, gone was the little girl who had so loved the sea."}\',\'{"font":"runelic:runelic","text":"In her place was a shadow, a monster, whose stopped heart would never again feel the joy of the sea. The Rune consumed her entirely, leaving behind nothing but vestiges."}\'],title:"Captain Cornelia"}')

        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(corneliaBook)
        .input('kubejs:captain_cornelia_poppet')
        .input('kubejs:ships_log')
        .input('kubejs:rune_echo_stone')
        .input('kubejs:icy_heart_fragment')
        .input('4x aquamirae:ship_graveyard_echo')
        .input('2x minecraft:pufferfish')
        .blockBelow('minecraft:packed_ice')
        .recipeTime(200)

        //Maze Mother
        let motherBook = Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"The Mother"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"In the depths of the frozen ocean are ancient beings. Cetaceans, Mylobatiae, and creatures too old to be named.\\\\n\\\\nOne of them, once, was the Mother. She was so called for her gentle shepherding of the sea life."}\',\'{"font":"runelic:runelic","text":"She once upon a time would glide silently through the dark waters, as if in flight. A fitting thought, for her wide fins looked very much like wings.\\\\n\\\\nShe ruled the ocean, a peaceful, loving being. But all good things must come to an end."}\',\'{"font":"runelic:runelic","text":"For humans had arrived in that isolated place. Bearing the stink of dead whales and rotting fish, they bore down upon the frozen ocean and were soon consumed by the ice. The Mother did not know of man, and so maintained her distance. "}\',\'{"font":"runelic:runelic","text":"But her solitude would soon be broken, as one of their ilk descended into the depths. The being had a round, metal head and a vicious spear. It drew up from the depths an item which the Mother did not understand, but which burned into her mind once unearthed."}\',\'{"font":"runelic:runelic","text":"It was poison, fell magic seeping from its shell. Powerful, indeed, but with a corruption that no living thing could resist.\\\\n\\\\nThe metal being seemed similarly affected, for it warped and mutated, growing tentacles and writhing in apparent agony."}\',\'{"font":"runelic:runelic","text":"The item, glowing with malice, reached out to the Mother and drew her in, as well. Her sleek black visage became studded with glowing crystals, and her eyes turned dead and sallow. Her behavior was matronly no more: now she was hungry. Desperately so."}\',\'{"font":"runelic:runelic","text":"In the end, the gentle manta which once watched over the isolated waters became a hollow force; haunting the sound, devouring all in her path."}\'],resolved:1b,title:"The Mother"}')
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(motherBook)
        .input('kubejs:maze_mother_poppet')
        .input('kubejs:manta_ray_idol')
        .input('kubejs:tainted_pearl')
        .input('kubejs:whalebone_harpoon')
        .input('aquamirae:abyssal_amethyst')
        .input('2x minecraft:glow_ink_sac')
        .blockBelow('minecraft:blue_ice')
        .recipeTime(200)

        //Nameless Hanged
        let namelessBook = Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"The Nameless Hanged"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"It was a cold and wicked winter when the stranger arrived. He was blind, dressed in tattered monk robes, and was peddling wares from all corners of the land. Buying and selling was his trade, and he never stayed in one place for very long."}\',\'{"font":"runelic:runelic","text":"No one knew why he wandered, or where he\\\'d come from. Most didn\\\'t ask, but those that did were met with a smile and a shrug.\\\\n\\\\nWhat was oddest about him, though, was that it seemed, for all intents and purposes, as if he had preternatural sight. "}\',\'{"font":"runelic:runelic","text":"He walked without a cane, and easily appraised items he was presented. The children would often try to test him by holding up fingers or objects, but he guessed unerringly, every time. So perhaps it was inevitable that mistrust would one day get the better of him."}\',\'{"font":"runelic:runelic","text":"The night that he arrived in the village, there was a cruel blizzard. It tore through, freezing livestock and anyone unfortunate enough to venture out. By morning, the bodies were stiff as ice. But not the stranger."}\',\'{"font":"runelic:runelic","text":"He was not only alright, but he was smiling. Perhaps that\\\'s why they killed him. The people hounded him down and slipped a noose around his neck.\\\\n\\\\nWith his last breath, he tried to choke out a plea, but to no avail."}\',\'{"font":"runelic:runelic","text":"His body was left hanging from the old oak for the rest of the winter, but it never seemed to freeze.\\\\n\\\\nIn the end, no one remembered what he was called. And now, his name is lost forever, even to himself."}\'],title:"The Nameless Hanged"}')
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(namelessBook)
        .input('kubejs:nameless_hanged_poppet')
        .input('kubejs:blindfold')
        .input('kubejs:trade_goods')
        .input('kubejs:ragged_rope')
        .input('5x minecraft:emerald')
        .input('3x graveyard:corruption')
        .blockBelow('minecraft:snow_block')
        .recipeTime(200)

        //HideBehind
        let hidebehindBook = Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"Benjamin"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"Benjamin was not a wanted child. Not hated, but never loved. His parents did not want him, not even a little.\\\\n\\\\nAnd it hardly mattered what they wanted, because they would die before Benjamin had turned six years old."}\',\'{"font":"runelic:runelic","text":"He spent his whole childhood trundled from one place to another, like an old suitcase that the grown-ups needed to find a place to store. Benjamin felt as if he were relegated to the back of the closet; dusty and forgotten."}\',\'{"font":"runelic:runelic","text":"Nowhere ever felt like home. He spent much of his time hiding from his caretakers, and no one ever seemed to want to find him.\\\\n\\\\nThey seemed to prefer when he was out of sight. He had little toys to play with, and very few books to read."}\',\'{"font":"runelic:runelic","text":"He felt an emptiness, a yawning void in his chest, but never quite knew why. After all, this loneliness was all he\\\'d known.\\\\n\\\\nThen, one day when he was not quite ten years old, he fell and injured his knee."}\',\'{"extra":[{"text":"Now, this was not an unusual injury for a boy his age, and it wasn\\\'t particularly severe. A grown-up, if any had bothered to notice, would probably have dismissed it out of hand. But it snapped something inside of Benjamin. It "},{"italic":true,"text":"hurt!"},{"text":" And no one cared. No one even "},{"italic":true,"text":"noticed"},{"text":"."}],"text":""}\',\'{"font":"runelic:runelic","text":"Benjamin ran, sobbing, to the forest. He tucked himself behind a tree, and cried until he couldn\\\'t anymore. He fell asleep, and dreamed of rescue. But when he awoke, he was still by the tree, covered in autumn leaves. He sighed, and his broken heart died within him."}\',\'{"font":"runelic:runelic","text":"He went back home, where he was barely greeted. He wished they would admonish him for making them worry, but they did not. They didn\\\'t even ask him where he\\\'d been.\\\\n\\\\nBut he could fall no lower into despair. He had become gray inside."}\',\'{"font":"runelic:runelic","text":"Benjamin grew up, and finished school, and took up a trade. He worked with his hands so that his mind would keep quiet. He got up, went to work, came home, went to bed. Each and every day, day in and day out. A gray, nothing man in a world which couldn\\\'t seem to see him."}\',\'{"font":"runelic:runelic","text":"And then one day, quite without circumstance, he died. Without ever having had a friend, without ever knowing what it was like to be embraced.\\\\n\\\\nAn entire life lived alone - and when he was gone, there was no one to cry for him."}\'],resolved:1b,title:"Benjamin"}')
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(hidebehindBook)
        .input('kubejs:hidebehind_poppet')
        .input('kubejs:carved_whistle')
        .input('kubejs:unsent_letter')
        .input('kubejs:broken_toy')
        .input('minecraft:dark_oak_sapling')
        .input('minecraft:fermented_spider_eye')
        .blockBelow('minecraft:dark_oak_log')
        .recipeTime(200)

        //Herobrine
        let herobrineBook = Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"Herobrine"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"Legends say that Herobrine was once a man named Steve, but this is not quite so.\\\\n\\\\nThe being you call Herobrine is not of this realm at all, but instead hails from a distant plane, cold and lifeless, and always dark. A plane of dust and nothingness."}\',\'{"font":"runelic:runelic","text":"He is not a true creature, but one of diaphanous thought. No brain, no heart, no soul. A hollow, pale existence.\\\\n\\\\nHe was drawn to this realm by the sunshine, leaking in through a crack in reality. He passed through, and was enraptured."}\',\'{"font":"runelic:runelic","text":"There he met a human - perhaps one named Steve - and became obsessed with his vigor.\\\\n\\\\nHerobrine tried to mimic his appearance, but it brought him no revelations. Still, he lingered, copying Steve\\\'s actions like an echo."}\',\'{"font":"runelic:runelic","text":"He wishes to be alive the way we are. To feel the heat of blood pulsing through your veins; to enjoy the taste of fresh, wholesome food; to succumb to the gentleness of an embrace."}\',\'{"font":"runelic:runelic","text":"The stark oblivion of his home is so far removed from our vibrant lush world, that he simply cannot comprehend our experience. He fundamentally lacks the tools we use to interpret our lives."}\',\'{"font":"runelic:runelic","text":"He tries to get a semblance of life by possessing villagers, creatures, even monsters. In those bodies, he can pretend he feels the brilliant sunshine or the comforting rain.\\\\n\\\\nBut he cannot understand."}\',\'{"font":"runelic:runelic","text":"He cannot truly feel, and his inability drives him mad. The lack of soulfulness permeates him in every cell of his borrowed body. What he desires the most, he can never have.\\\\n\\\\nSo he haunts this world, appearing in the form of a man in blue."}\'],resolved:1b,title:"Herobrine"}')

        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(herobrineBook)
        .input('kubejs:herobrine_poppet')
        .input('kubejs:strange_tool')
        .input('kubejs:oblivion_dust')
        .input('kubejs:possessed_journal')
        .input('4x minecraft:redstone_torch')
        .input('endofherobrine:cursed_head')
        .blockBelow('minecraft:gold_block')
        .recipeTime(200)

        //Frozen Key
        event.recipes.summoningrituals.altar('tide:deep_aqua_crystal')
        .itemOutput('aquamirae:frozen_key')
        .input('minecraft:blue_ice')
        .input('aquamirae:fin')
        .input('minecraft:iron_ingot')
        .blockBelow('minecraft:packed_ice')
        .recipeTime(100)

        //Hirschgeist Skull
        event.recipes.summoningrituals.altar('tide:deep_aqua_crystal')
        .itemOutput('whisperwoods:hirschgeist_skull')
        .input('graveyard:bone_dagger')
        .input('minecraft:skeleton_skull')
        .input('minecraft:oak_sapling')
        .input('minecraft:dark_oak_sapling')
        .input('tombstone:essence_of_undeath')
        .blockBelow('minecraft:grass_block')
        .recipeTime(100)
        .dayTime('night')
        .weather('thunder')

        //Return Rune of the Storm
        event.recipes.summoningrituals.altar('aquamirae:rune_of_the_storm')
        .itemOutput('kubejs:frozen_heart')
        .input('tombstone:strange_tablet')
        .input('chalk:white_chalk')
        .input('minecraft:nautilus_shell')
        .input('aquamirae:ship_graveyard_echo')
        .input('aquamirae:anglers_fang')
        .input('aquamirae:abyssal_amethyst')
        .blockBelow('thaumon:runic_ancient_stone')
        .recipeTime(100)
        .weather('thunder')
        .sacrifice('aquamirae:eel')
        .sacrificeRegion(9, 9)
//it gives you her heart which is frozen
//you heal the heart somehow (combine with icy heart fragment?)
//you click the heart onto cornelia
//HEART OF THE SEA

    event.shaped(

        Item.of('kubejs:cornelias_heart'),
        [
            ' A ',
            'CBC',
            ' C '
        ], {
            A: 'kubejs:frozen_heart',
            B: 'minecraft:heart_of_the_sea',
            C: 'legendarysurvivaloverhaul:sun_fern'
        }
    )
    



})