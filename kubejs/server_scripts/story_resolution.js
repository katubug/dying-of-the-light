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

ItemEvents.entityInteracted('aquamirae:rune_of_the_storm', (event) => {
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
        let itemEntity = level.createEntity('item');
        itemEntity.item = Item.of('kubejs:captain_cornelia_note')
        itemEntity.setPos(x + 1, y, z);
        itemEntity.spawn();
        let itemEntity2 = level.createEntity('item');
        itemEntity2.item = Item.of('aquamirae:three_bolt_helmet', '{Damage:0}').enchant('minecraft:fire_protection', 2)
        itemEntity2.setPos(x + 1, y, z);
        itemEntity2.spawn();
        let itemEntity3 = level.createEntity('item');
        itemEntity3.item = Item.of('aquamirae:oxygen_tank')
        itemEntity3.setPos(x + 1, y, z);
        itemEntity3.spawn();
        let itemEntity4 = level.createEntity('item');
        itemEntity4.item = Item.of('aquamirae:oxygen_tank')
        itemEntity4.setPos(x + 1, y, z);
        itemEntity4.spawn();
        let itemEntity8 = level.createEntity('item');
        itemEntity8.item = Item.of('4x aquamirae:ship_graveyard_echo')
        itemEntity8.setPos(x + 1, y, z);
        itemEntity8.spawn();
        let itemEntity6 = level.createEntity('item');
        itemEntity6.item = Item.of('aquamirae:treasure_pouch')
        itemEntity6.setPos(x + 1, y, z);
        itemEntity6.spawn();
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