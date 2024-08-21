BlockEvents.rightClicked('mysticaloaktree:wise_oak', event => {
    const { item, level, player, target } = event 
    const { x, y, z } = player
    if (item.nbt.Entities[0].Id == "cave_dweller:cave_dweller" || item.nbt.Entities[1].Id == "cave_dweller:cave_dweller") {
        //item.count--
        player.tell("A book appears in your hands.");
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('minecraft:book', 1);
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    }
    if (item.nbt.Entities[0].Id == "minecraft:sheep" ||  item.nbt.Entities[1].Id == "minecraft:sheep") {
        //item.count--
        player.tell("A book appears in your hands.");
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('minecraft:book', 1);
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    }
})

BlockEvents.rightClicked('minecraft:oak_log', event => {
    const { block, hand, item, world, level, player } = event;
    if (hand != 'MAIN_HAND') return; 
    if (item.id == 'kubejs:summoning_powder') {
        item.count--
        block.set('mysticaloaktree:wise_oak')
    }
})