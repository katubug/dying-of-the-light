EntityEvents.hurt(event =>{
    let { player, entity, target, server, source } = event
    if (!source.actual.type) return
    //Don't Hit Babies
    if (source.actual.type == 'minecraft:player' && entity.isBaby()){
        console.log(`${source.getPlayer().name.string} is hurting a baby!`)
        event.server.runCommandSilent(`/tbalignment ${source.getPlayer().name.string} decrease 10`)
    }
    /*
    if (source.actual.type == 'minecraft:player' && entity.){}
        console.log(`${source.getPlayer().name.string} is hurting a baby!`)
        event.server.runCommandSilent(`/tbalignment ${source.getPlayer().name.string} decrease 10`)
    }
        */
})
