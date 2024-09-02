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

    //Summoning Ritual for Lore Books
    //Cave Dweller
    event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput(Item.of('minecraft:written_book', '{author:"unknown",display:{Name:\'{"font":"runelic:runelic","text":"Cave Dweller"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"The creature known as Cave Dweller was once a human man, known as Garrik. He was a miner, and a devoted husband and father. He and his family lived in a modest, cozy hut by the sea.\\\\n\\\\nBut his fate was cursed to tragedy."}\',\'{"font":"runelic:runelic","text":"One bright, otherwise cheery summer, his young daughter fell gravely ill.\\\\n\\\\nThe sickness came from the blue - she had been a laughing, healthy child her whole life. Yet within days, she withered, and passed away."}\',\'{"font":"runelic:runelic","text":"Garrik and his wife were devastated. In less than a week, their precious child had gone from vibrant and happy - to gone from this world.\\\\n\\\\nHis wife fell into a deep depression, and Garrik feared he would lose her, too."}\',\'{"font":"runelic:runelic","text":"Without his wife knowing, Garrik sought the help of a necromancer, who agreed to revive Garrik\\\'s daughter - but at a desperate price.\\\\n\\\\nHe agreed without hesitation, and the necromancer promised to begin his dark rituals."}\',\'{"font":"runelic:runelic","text":"Over the next few weeks, Garrik grew leaner and paler. His wife, lost to sorrow as she was, barely acknowledged the change until the day he lashed out at her, but it was too late. With his new, freakish strength, he killed her, and in doing so, lost his mind."}\',\'{"font":"runelic:runelic","text":"In horror at his own actions, Garrik fled the house. He did not stop running until he was deep into the mines that were so familiar to him.\\\\n\\\\nThere, he wailed and writhed, and tore at his own flesh, refusing to eat or drink."}\',\'{"font":"runelic:runelic","text":"And there he has stayed since, his body and mind warping until neither held any remaining trace of humanity.\\\\n\\\\nMeanwhile, back behind a modest, cozy hut by the sea, a small grave stirred in the darkness of night..."}\'],title:"Cave Dweller"}'))
        .input(Item.of('minecraft:iron_pickaxe', '{Damage:0}'))
        .input('64x minecraft:cobblestone')
        .input('minecraft:rotten_flesh')
        .blockBelow('minecraft:deepslate')
        .recipeTime(200)

            //Cave Dweller
        event.recipes.summoningrituals.altar("minecraft:book")
        .itemOutput('minecraft:dirt')
        .input('aquamirae:abyssal_amethyst')
        .input('aquamirae:ship_graveyard_echo')
        .input(Item.of('minecraft:potion', '{Potion:"minecraft:water_breathing"}'))
        .blockBelow('minecraft:packed_ice')
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




