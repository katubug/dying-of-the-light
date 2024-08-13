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
})




