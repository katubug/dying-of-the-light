
PlayerEvents.tick(event => {
    let { player, level, server } = event
    let sanity = player.nbt.ForgeCaps['sanitydim:sanity']['sanity.sanity']
    if (player.age % 200 != 0) return
        if (sanity >= 0.6) {
            if(player.stages.has('insanity')) return;
                player.stages.add('insanity')
                player.tell("You feel as if the world is out to get you...")
                event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} insane`)
    }
        if (sanity < 0.6) {
            if(!player.stages.has('insanity')) return;
                player.stages.remove('insanity')
                player.tell("You feel a sense of well-being.")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} insane`)
    }
})

PlayerEvents.tick(event => {
    let { player, level, server } = event
    if (player.age % 200 != 0) return
    if (player.chestArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.headArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.legsArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.feetArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.hasEffect('born_in_chaos_v1:light_rampage')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -3`)
    }
    if (player.hasEffect('born_in_chaos_v1:medium_rampage')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -5`)
    }
    if (player.hasEffect('born_in_chaos_v1:strong_rampage')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -7`)
    }
    if (player.hasEffect('born_in_chaos_v1:rampant_rampage')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -10`)
    }
})
/*
ItemEvents.rightClicked(event => {
    const { item, server, player} = event 
    let film = item.nbt['Film']['Count']
    let filmType = item.nbt['Film']['id']
    if (item.getId() == 'exposure:camera' && film >=1 && filmType == 'exposure:black_and_white_film') {
        player.tell("bw")
        server.runCommandSilent(`sanity add ${event.player.name.string} 5`)
    }
    if (item.getId() == 'exposure:camera' && film >=1 && filmType == 'exposure:color_film') {

        player.tell("color")
        server.runCommandSilent(`sanity add ${event.player.name.string} 10`)
    }
})
    */
ItemEvents.rightClicked('exposure:camera', event => {
    const { item, server, player } = event
    let film = item.nbt.Film.Count
    let filmType = item.nbt.Film.id
    let filmCount = item.nbt.Film.tag.Frames[15]

    if (film < 1) return

    switch (filmType) {
        case 'exposure:black_and_white_film':
            player.tell("bw")
            server.runCommandSilent(`sanity add ${event.player.username} 5`)
            break

        case 'exposure:color_film':
            if (filmCount == null) {
                player.tell("color")
                server.runCommandSilent(`sanity add ${event.player.username} 10`)
            }
            break
    }
})

BlockEvents.leftClicked( event => {
    const { item, server, player } = event
    if (player.mainHandItem.hasTag('forge:sanity_drain_item')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
})