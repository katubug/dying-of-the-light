ItemEvents.entityInteracted('kubejs:teddy', (event) => {
    const { 
        player, 
        hand, 
        item, 
        target, 
        target: { x, y, z },
        server,
        level
    } = event;

    if (target.type != 'cave_dweller:cave_dweller' ) return
        player.swing(hand, true);
        item.count--
        server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
        target.discard()
        server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
        event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 2C1356F21BE19F33`)
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('kubejs:cave_dweller_note')
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    });

ItemEvents.entityInteracted('minecraft:nametag', (event) => {
    const { 
        player, 
        hand, 
        item, 
        target, 
        target: { x, y, z },
        server,
        level
    } = event;

    if (target.type != 'graveyard:nameless_hanged' ) return
        player.swing(hand, true);
        item.count--
        server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
        target.discard()
        server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
        event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 74A1E604A452A534`)
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('kubejs:nameless_hanged_note')
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    });

ItemEvents.entityInteracted('void_tome:void_tome', (event) => {
    const { 
        player, 
        hand, 
        item, 
        target, 
        target: { x, y, z },
        server,
        level
    } = event;

    if (target.type != 'aquamirae:captain_cornelia' ) return
        player.swing(hand, true);
        item.count--
        server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
        target.discard()
        server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('kubejs:captain_cornelia_note')
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    });

ItemEvents.entityInteracted('minecraft:nametag', (event) => {
    const { 
        player, 
        hand, 
        item, 
        target, 
        target: { x, y, z },
        server,
        level
    } = event;

    if (target.type != 'endofherobrine:herobrine' ) return
        player.swing(hand, true);
        item.count--
        server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
        target.discard()
        server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
        const itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('kubejs:herobrine_note')
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
    });