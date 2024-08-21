PlayerEvents.tick(event => {
    let { player, level, server } = event
    if (player.age % 20 != 0) return
    if (player.getHealth() < 10) {
        if(player.stages.has('low_health')) return;
                player.stages.add('low_health')
                player.tell("you're low health")
                event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} low_health`)
    }
    if (player.getHealth() >= 10) {
        if(!player.stages.has('low_health')) return;
                player.stages.remove('low_health')
                player.tell("you're okay now")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} low_health`)
    }
    if (player.mainHandItem.id == 'minecraft:lantern' || player.mainHandItem.id == 'hardcore_torches:lit_lantern') {
            if(player.stages.has('safety_item')) return;
                player.stages.add('safety_item')
                player.tell("you're safe")
                event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} safety_item`)
    }
    if (player.mainHandItem.id != 'minecraft:lantern' && player.mainHandItem.id != 'hardcore_torches:lit_lantern') {
            if(!player.stages.has('safety_item')) return;
                player.stages.remove('safety_item')
                player.tell("you're not safe")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} safety_item`)
    }
})