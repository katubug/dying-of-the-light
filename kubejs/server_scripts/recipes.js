ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:cyan_bed'),
        [
            'AAA',
            'BBB'
        ], {
            A: 'zombie_fabrics:fabric',
            B: '#minecraft:planks'
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




