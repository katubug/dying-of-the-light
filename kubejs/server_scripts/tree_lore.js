BlockEvents.rightClicked('mysticaloaktree:wise_oak', event => {
    const { item, level, player, target } = event 
    const { x, y, z } = player
    console.log(player.mainHandItem.id)
    console.log(player.mainHandItem.nbt.Entities[0].Id)
    if (player.mainHandItem.nbt.Entities[0].Id == "cave_dweller:cave_dweller") {
        console.log('cavedweller')
        //item.count--
        player.tell("A book appears in your hands.");
        const itemEntity = level.createEntity('item');
        //itemEntity.item = Item.of('minecraft:written_book', '{author:"Utak Aluna",generation:3,pages:[\'{"text":"The creature known as Cave Dweller was once a human man, known as Garrik. He was a miner, and a devoted husband and father. He and his family lived in a modest, cozy hut by the sea.\\\\n\\\\nBut his fate was cursed to tragedy."}\',\'{"text":"One bright, otherwise cheery summer, his young daughter fell gravely ill.\\\\n\\\\nThe sickness came from the blue - she had been a laughing, healthy child her whole life. Yet within days, she withered, and passed away."}\',\'{"text":"Garrik and his wife were devastated. In less than a week, their precious child had gone from vibrant and happy - to gone from this world.\\\\n\\\\nHis wife fell into a deep depression, and Garrik feared he would lose her, too."}\',\'{"text":"Without his wife knowing, Garrik sought the help of a necromancer, who agreed to revive Garrik\\\'s daughter - but at a desperate price.\\\\n\\\\nHe agreed without hesitation, and the necromancer promised to begin his dark rituals."}\',\'{"text":"Over the next few weeks, Garrik grew leaner and paler. His wife, lost to sorrow as she was, barely acknowledged the change until the day he lashed out at her, but it was too late. With his new, freakish strength, he killed her, and in doing so, lost his mind."}\',\'{"text":"In horror at his own actions, Garrik fled the house. He did not stop running until he was deep into the mines that were so familiar to him.\\\\n\\\\nThere, he wailed writhed, and tore at his own flesh, refusing to eat or drink."}\',\'{"text":"And there he has stayed since, his body and mind warping until neither held any remaining trace of humanity.\\\\n\\\\nMeanwhile, back behind a modest, cozy hut by the sea, a small grave stirred in the darkness of night..."}\'],title:"Cave Dweller"}')
        itemEntity.item = Item.of('minecraft:written_book', '{author:"Utak Aluna",display:{Name:\'{"font":"runelic:runelic","text":"Cave Dweller"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"The creature known as Cave Dweller was once a human man, known as Garrik. He was a miner, and a devoted husband and father. He and his family lived in a modest, cozy hut by the sea.\\\\n\\\\nBut his fate was cursed to tragedy."}\',\'{"font":"runelic:runelic","text":"One bright, otherwise cheery summer, his young daughter fell gravely ill.\\\\n\\\\nThe sickness came from the blue - she had been a laughing, healthy child her whole life. Yet within days, she withered, and passed away."}\',\'{"font":"runelic:runelic","text":"Garrik and his wife were devastated. In less than a week, their precious child had gone from vibrant and happy - to gone from this world.\\\\n\\\\nHis wife fell into a deep depression, and Garrik feared he would lose her, too."}\',\'{"font":"runelic:runelic","text":"Without his wife knowing, Garrik sought the help of a necromancer, who agreed to revive Garrik\\\'s daughter - but at a desperate price.\\\\n\\\\nHe agreed without hesitation, and the necromancer promised to begin his dark rituals."}\',\'{"font":"runelic:runelic","text":"Over the next few weeks, Garrik grew leaner and paler. His wife, lost to sorrow as she was, barely acknowledged the change until the day he lashed out at her, but it was too late. With his new, freakish strength, he killed her, and in doing so, lost his mind."}\',\'{"font":"runelic:runelic","text":"In horror at his own actions, Garrik fled the house. He did not stop running until he was deep into the mines that were so familiar to him.\\\\n\\\\nThere, he wailed writhed, and tore at his own flesh, refusing to eat or drink."}\',\'{"font":"runelic:runelic","text":"And there he has stayed since, his body and mind warping until neither held any remaining trace of humanity.\\\\n\\\\nMeanwhile, back behind a modest, cozy hut by the sea, a small grave stirred in the darkness of night..."}\'],resolved:1b,title:"Cave Dweller"}')
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    } else if (player.mainHandItem.nbt.Entities[0].Id == "minecraft:villager") {
        //item.count--
        console.log("villager")
        player.tell("A book appears in your hands.");
        //Item.of('minecraft:written_book', '{author:"Utak Aluna",generation:3,pages:[\'{"text":"Legends say that Herobrine was once a man named Steve, but this is not entirely the truth. The being you call Herobrine is not of this realm at all, but instead hails from a distant plane, cold and lifeless, and always dark."}\',\'{"text":"He came to this realm because of the sunshine. He wishes to be alive the way we are. To feel warmth, to enjoy the taste of fresh food and the gentleness of an embrace. But he lacks the ability. His reality is so far"}\',\'{"text":"removed from ours, that he can never understand what it means to live. He tries to get a semblance of our experience by possessing villagers, creatures, even monsters. There he can pretend he feels the sunshine or the rain."}\',\'{"text":"But he cannot. He cannot understand, and his impotence drives him mad. The lack of feeling permeates him in every cell. What he desires the most, he can never have."}\'],resolved:1b,title:"Herobrine"}')
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('minecraft:written_book', '{author:"Utak Aluna",display:{Name:\'{"font":"runelic:runelic","text":"Herobrine"}\'},generation:3,pages:[\'{"font":"runelic:runelic","text":"Legends say that Herobrine was once a man named Steve, but this is not entirely the truth. The being you call Herobrine is not of this realm at all, but instead hails from a distant plane, cold and lifeless, and always dark."}\',\'{"font":"runelic:runelic","text":"He came to this realm because of the sunshine. He wishes to be alive the way we are. To feel warmth, to enjoy the taste of fresh food and the gentleness of an embrace. But he lacks the ability. His reality is so far"}\',\'{"font":"runelic:runelic","text":"removed from ours, that he can never understand what it means to live. He tries to get a semblance of our experience by possessing villagers, creatures, even monsters. There he can pretend he feels the sunshine or the rain."}\',\'{"font":"runelic:runelic","text":"But he cannot. He cannot understand, and his impotence drives him mad. The lack of feeling permeates him in every cell. What he desires the most, he can never have."}\'],resolved:1b,title:"Herobrine"}')
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    } else {
        console.log('dang')
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

/*
BlockEvents.rightClicked('minecraft:lectern', event => {
    const { item, level, player, target } = event 
    const { x, y, z } = player
    //console.log(item.nbt.display.Name)
    if (item == 'minecraft:written_book'
        && item.nbt.display.Name == `{"font":"runelic:runelic","text":"Cave Dweller"}`
    ){
        event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} low_health`)

    }
        
})
*/