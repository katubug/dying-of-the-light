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
        */

    event.shapeless(
        Item.of('hardcore_torches:lit_torch'),
        [
            'minecraft:flint_and_steel', 
            '#hardcore_torches:torches'
        ]
    ).replaceIngredient('minecraft:flint_and_steel', 'minecraft:flint_and_steel')

})




