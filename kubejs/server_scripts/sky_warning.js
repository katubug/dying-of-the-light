

PlayerEvents.tick(event => {
    let { player, level, server } = event

    if(player.age % 20 == 0)
        {
        if(player.getLevel().getDimension().getPath() == 'overworld')
            {
            if(player.block.up.canSeeSky
            && level.isDay()
            ){
                if(!player.stages.has('sun_warning')){
                server.scheduleInTicks(1 * 20, callback => {
                    if(!player.hasEffect("fire_resistance"))
                        player.stages.add('sun_warning')
                        server.runCommandSilent(`title ${event.player.name.string} title {"text":"It hurts!", "bold":true, "italic":true, "color":"red"}`)
                        server.runCommandSilent(`title ${event.player.name.string} subtitle {"text":"Get out of the sunlight!", "italic":true, "color":"yellow"}`)
                    })
                }
            }
        }
    }
})
