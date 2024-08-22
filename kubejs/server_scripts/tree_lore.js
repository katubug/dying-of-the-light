BlockEvents.rightClicked('mysticaloaktree:wise_oak', event => {
    const { item, level, player, target } = event 
    const { x, y, z } = player
    if (item.nbt.Entities[0].Id == "cave_dweller:cave_dweller" || item.nbt.Entities[1].Id == "cave_dweller:cave_dweller") {
        //item.count--
        player.tell("A book appears in your hands.");
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('minecraft:written_book', '{author:"Utak Aluna",generation:3,pages:[\'{"text":"The creature known as Cave Dweller was once a human man, known as Garrik. He was a miner, and a devoted husband and father. He and his family lived in a modest, cozy hut by the sea.\\\\n\\\\nBut his fate was cursed to tragedy."}\',\'{"text":"One bright, otherwise cheery summer, his young daughter fell gravely ill.\\\\n\\\\nThe sickness came from the blue - she had been a laughing, healthy child her whole life. Yet within days, she withered, and passed away."}\',\'{"text":"Garrik and his wife were devastated. In less than a week, their precious child had gone from vibrant and happy - to gone from this world.\\\\n\\\\nHis wife fell into a deep depression, and Garrik feared he would lose her, too."}\',\'{"text":"Without his wife knowing, Garrik sought the help of a necromancer, who agreed to revive Garrik\\\'s daughter - but at a desperate price.\\\\n\\\\nHe agreed without hesitation, and the necromancer promised to begin his dark rituals."}\',\'{"text":"Over the next few weeks, Garrik grew leaner and paler. His wife, lost to sorrow as she was, barely acknowledged the change until the day he lashed out at her, but it was too late. With his new, freakish strength, he killed her, and in doing so, lost his mind."}\',\'{"text":"In horror at his own actions, Garrik fled the house. He did not stop running until he was deep into the mines that were so familiar to him.\\\\n\\\\nThere, he wailed writhed, and tore at his own flesh, refusing to eat or drink."}\',\'{"text":"And there he has stayed since, his body and mind warping until neither held any remaining trace of humanity.\\\\n\\\\nMeanwhile, back behind a modest, cozy hut by the sea, a small grave stirred in the darkness of night..."}\'],title:"Cave Dweller"}')
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
    if (item.id == 'thaumon:mutagen') {
        item.count--
        block.set('mysticaloaktree:wise_oak')
    }
})