LootJS.modifiers((event) => {

    //event.enableLogging();

    //Remove all Chalk from Chests
    event.removeGlobalModifier('@chalk')

    //Remove all Photographs from Chests
    event.removeGlobalModifier('@exposure')

    //Make Corruption easier to come by
    event.addEntityLootModifier("minecraft:zombie_villager")
    .addLoot("graveyard:corruption")

    //Add tomes to chests
    event.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.2)
    .addLoot('kubejs:great_ones_tome')

    event.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.2)
    .addLoot('kubejs:great_ones_tome')

    event.addLootTableModifier("minecraft:chests/buried_treasure")
    .randomChance(0.5)
    .addLoot('kubejs:great_ones_tome')

    event.addLootTableModifier("minecraft:chests/stronghold/library")
    .randomChance(0.2)
    .addLoot('kubejs:great_ones_tome')

    event.addLootTableModifier("minecraft:chests/pillager_outpost")
    .randomChance(0.2)
    .addLoot('kubejs:lunatics_tome')

    event.addLootTableModifier("minecraft:chests/desert_pyramid")
    .randomChance(0.2)
    .addLoot('kubejs:lunatics_tome')

    event.addLootTableModifier("minecraft:chests/jungle_temple")
    .randomChance(0.2)
    .addLoot('kubejs:lunatics_tome')

    event.addLootTableModifier("graveyard:chests/crypt_loot")
    .randomChance(0.2)
    .addLoot('kubejs:lunatics_tome')

    event.addLootTableModifier("underground_jungle:chests/temple_treasure")
    .randomChance(0.2)
    .addLoot('kubejs:lunatics_tome')

    event.addLootTableModifier("aquamirae:chests/ship_1")
    .randomChance(0.05)
    .addLoot('kubejs:lunatics_tome')

    event.addLootTableModifier("aquamirae:chests/maze_camp_chest")
    .randomChance(0.05)
    .addLoot('kubejs:lunatics_tome')

    //Abberrant Fish
    let hollowCod = Item.of('minecraft:cod', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"The body remains whole, but the","italic":false}]\',\'["",{"text":"insides have hollowed out","italic":false}]\',\'["",{"text":"entirely. Peering into its mouth","italic":false}]\',\'["",{"text":"reveals an empty cavity,","italic":false}]\',\'["",{"text":"echoing with a distant, ghostly","italic":false}]\',\'["",{"text":"hum.","italic":false}]\'],Name:\'["",{"text":"Hollow Cod","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0)

    let mawbreachGrouper = Item.of('tide:deep_grouper', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Its massive mouth is split beyond","italic":false}]\',\'["",{"text":"its normal range, extending past","italic":false}]\',\'["",{"text":"its gills and folding back like","italic":false}]\',\'["",{"text":"jagged petals. Inside, multiple","italic":false}]\',\'["",{"text":"rows of smaller, snapping mouths","italic":false}]\',\'["",{"text":"continuously feed on anything caught","italic":false}]\',\'["",{"text":"in the grotesque bloom.","italic":false}]\'],Name:\'["",{"text":"Mawbreach Grouper","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let scaledSalmon = Item.of('minecraft:salmon', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Its once sleek body is marred with","italic":false}]\',\'["",{"text":"patches of raw, pink flesh. Boils","italic":false}]\',\'["",{"text":"hiss and pop along its spine,","italic":false}]\',\'["",{"text":"releasing plumes of steam that","italic":false}]\',\'["",{"text":"twist and rise as if alive.","italic":false}]\'],Name:\'["",{"text":"Scalded Salmon","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let veilfinAngler = Item.of('tide:abyss_angler', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Its translucent skin reveals","italic":false}]\',\'["",{"text":"twitching veins beneath,","italic":false}]\',\'["",{"text":"pulsing with an eerie light.","italic":false}]\',\'["",{"text":"A single oversized fin drapes","italic":false}]\',\'["",{"text":"like a torn veil, its lure","italic":false}]\',\'["",{"text":"swaying, drawing in more than","italic":false}]\',\'["",{"text":"prey.","italic":false}]\'],Name:\'["",{"text":"Veilfin Angler","italic":false,"color":"yellow"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let weepingBluegill = Item.of('tide:bluegill', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Its eyes have melted down the","italic":false}]\',\'["",{"text":"sides of its face, leaving dark,","italic":false}]\',\'["",{"text":"empty sockets. A constant trickle","italic":false}]\',\'["",{"text":"of thick, black liquid drips from","italic":false}]\',\'["",{"text":"the sockets, staining its once","italic":false}]\',\'["",{"text":"vibrant scales.","italic":false}]\'],Name:\'["",{"text":"Weeping Bluegill","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let fractalGuppy = Item.of('tide:guppy', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"This tiny fish has multiplied in","italic":false}]\',\'["",{"text":"a chaotic fashion, with limbs and","italic":false}]\',\'["",{"text":"fins repeating infinitely down","italic":false}]\',\'["",{"text":"its spine. It moves in erratic","italic":false}]\',\'["",{"text":"bursts, as though each part tries","italic":false}]\',\'["",{"text":"to swim in a different direction.","italic":false}]\'],Name:\'["",{"text":"Fractal Guppy","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let hostPerch = Item.of('tide:yellow_perch', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"The belly is grotesquely swollen,","italic":false}]\',\'["",{"text":"almost translucent, revealing","italic":false}]\',\'["",{"text":"something writhing inside. A","italic":false}]\',\'["",{"text":"sickening glow pulses from","italic":false}]\',\'["",{"text":"within, hinting at the parasitic","italic":false}]\',\'["",{"text":"mass using the perch as a living","italic":false}]\',\'["",{"text":"incubator.","italic":false}]\'],Name:\'["",{"text":"Host Perch","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let barbedPike = Item.of('tide:pike', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Jagged spines protrude from its","italic":false}]\',\'["",{"text":"elongated body, curving outward","italic":false}]\',\'["",{"text":"like hooks. The pike’s mouth","italic":false}]\',\'["",{"text":"hangs open in a permanent snarl,","italic":false}]\',\'["",{"text":"rows of sharp teeth mismatched","italic":false}]\',\'["",{"text":"and crooked as though forcibly","italic":false}]\',\'["",{"text":"rearranged.","italic":false}]\'],Name:\'["",{"text":"Barbed Pike","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let fleshriftCatfish = Item.of('tide:catfish', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"The thick whiskers have fused","italic":false}]\',\'["",{"text":"into fleshy tendrils, digging","italic":false}]\',\'["",{"text":"into its own body. Its bloated","italic":false}]\',\'["",{"text":"form is scarred and torn, with","italic":false}]\',\'["",{"text":"pieces of its flesh hanging","italic":false}]\',\'["",{"text":"loosely, barely clinging to","italic":false}]\',\'["",{"text":"the exposed bones.","italic":false}]\'],Name:\'["",{"text":"Fleshrift Catfish","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let threadedSailfish = Item.of('tide:sailfish', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Its once-majestic dorsal fin now","italic":false}]\',\'["",{"text":"unravels into long, sinewy","italic":false}]\',\'["",{"text":"tendrils that trail behind it.","italic":false}]\',\'["",{"text":"The threads pulse with life,","italic":false}]\',\'["",{"text":"wrapping around anything they","italic":false}]\',\'["",{"text":"brush, drawing it into the deep.","italic":false}]\'],Name:\'["",{"text":"Threaded Sailfish","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let cradleSnapper = Item.of('tide:shadow_snapper', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Its massive jaws are lined with","italic":false}]\',\'["",{"text":"rows of teeth, but within its","italic":false}]\',\'["",{"text":"mouth rests a smaller, living","italic":false}]\',\'["",{"text":"replica of itself—each snap","italic":false}]\',\'["",{"text":"echoes from both mouths in","italic":false}]\',\'["",{"text":"perfect synchronization.","italic":false}]\'],Name:\'["",{"text":"Cradle Snapper","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let splinteredBarracuda = Item.of('tide:barracuda', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Cracks run jagged across its body,","italic":false}]\',\'["",{"text":"each fissure leaking a faint,","italic":false}]\',\'["",{"text":"pale light. The fish twitches in","italic":false}]\',\'["",{"text":"sharp, erratic movements as if","italic":false}]\',\'["",{"text":"it\\\'s being pulled apart from the","italic":false}]\',\'["",{"text":"inside.","italic":false}]\'],Name:\'["",{"text":"Splintered Barracuda","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let shimmergillTrout = Item.of('tide:trout', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Scales gleam unnaturally, shifting","italic":false}]\',\'["",{"text":"in color like oil on water. Each","italic":false}]\',\'["",{"text":"glint hypnotizes onlookers, but","italic":false}]\',\'["",{"text":"those who stare too long find","italic":false}]\',\'["",{"text":"the colors never leave their","italic":false}]\',\'["",{"text":"vision.","italic":false}]\'],Name:\'["",{"text":"Shimmergill Trout","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let leechtoothTuna = Item.of('tide:tuna', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Gaping wounds in the fish’s mouth","italic":false}]\',\'["",{"text":"reveal long, writhing leeches","italic":false}]\',\'["",{"text":"where its teeth should be.","italic":false}]\',\'["",{"text":"They latch onto prey for","italic":false}]\',\'["",{"text":"sustenance, leaving the tuna as","italic":false}]\',\'["",{"text":"merely a vessel for their hunger.","italic":false}]\'],Name:\'["",{"text":"Leechtooth Tuna","italic":false,"color":"yellow"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let twinscaleBass = Item.of('tide:bass', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Two heads, fused at the spine,","italic":false}]\',\'["",{"text":"struggle for control. One side is","italic":false}]\',\'["",{"text":"vibrant and alive, the other,","italic":false}]\',\'["",{"text":"rotting and festering—both eyes","italic":false}]\',\'["",{"text":"seeing, neither agreeing.","italic":false}]\'],Name:\'["",{"text":"Twinscale Bass","italic":false,"color":"yellow"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let blisteredMackerel = Item.of('tide:magma_mackerel', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Bulging blisters coat its scales,","italic":false}]\',\'["",{"text":"each filled with a swirling, dark","italic":false}]\',\'["",{"text":"liquid. Puncture one, and the fish","italic":false}]\',\'["",{"text":"leaks a thick, tar-like substance","italic":false}]\',\'["",{"text":"that moves of its own accord.","italic":false}]\'],Name:\'["",{"text":"Blistered Mackerel","italic":false,"color":"yellow"}]\'}}').enchant('cursery:curse_hungry', 0) 

    let bonecoilEel = Item.of('tide:cave_eel', '{Tags:"aberrant_fish",display:{Lore:[\'["",{"text":"Its body has twisted unnaturally,","italic":false}]\',\'["",{"text":"folding and knotting over itself","italic":false}]\',\'["",{"text":"like a coiled rope. Segments of","italic":false}]\',\'["",{"text":"its flesh have been stripped","italic":false}]\',\'["",{"text":"away, leaving exposed bone, which","italic":false}]\',\'["",{"text":"cracks and shifts as it slithers","italic":false}]\',\'["",{"text":"through the water.","italic":false}]\'],Name:\'["",{"text":"Bonecoil Eel","italic":false,"color":"gold"}]\'}}').enchant('cursery:curse_hungry', 0)

    let aberrantFish = [
       hollowCod,
       mawbreachGrouper,
       scaledSalmon,
       veilfinAngler,
       weepingBluegill,
       fractalGuppy,
       hostPerch,
       barbedPike,
       fleshriftCatfish,
       threadedSailfish,
       cradleSnapper,
       splinteredBarracuda,
       shimmergillTrout,
       leechtoothTuna,
       twinscaleBass,
       blisteredMackerel,
       bonecoilEel
    ];

    for (const fish of aberrantFish) {
        event.addLootTableModifier("minecraft:gameplay/fishing")
        .logName("aberrant_fish")
        //.hasAnyStage(['insight_shop'])
        .randomChance(0.01)
        .removeLoot(Ingredient.all)
        .addLoot(fish)
    }
});