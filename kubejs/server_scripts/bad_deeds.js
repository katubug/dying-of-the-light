EntityEvents.hurt(event =>{
    let { entity, source } = event
    if (source.actual==null) return
    //Don't Hit Babies
    if (source.actual.type == 'minecraft:player' && entity.nbt.Age < 0){
        console.log(`${source.getPlayer().name.string} is hurting a baby!`)
        event.server.runCommandSilent(`/tbalignment ${source.getPlayer().name.string} decrease 20`)
    }
    //Don't Hit Pets
    if (source.actual.type == 'minecraft:player' && entity.nbt.Owner){
        console.log(`${source.getPlayer().name.string} is hurting a pet!`)
        event.server.runCommandSilent(`/tbalignment ${source.getPlayer().name.string} decrease 20`)
    }
        
})
