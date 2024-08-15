
PlayerEvents.tick(event => {
    let { player, level, server } = event
    let sanity = player.nbt.ForgeCaps['sanitydim:sanity']['sanity.sanity']
    if (player.age % 200 != 0) return
        if (sanity >= 0.6) {
            if(player.stages.has('insanity')) return;
                player.stages.add('insanity')
                player.tell("You feel an increased sense of well-being.")
                event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} insane`)
    }
        if (sanity < 0.6) {
            if(!player.stages.has('insanity')) return;
                player.stages.remove('insanity')
                player.tell("You feel as if the world is out to get you...")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} insane`)
    }
})
