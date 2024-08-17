/*
EntityEvents.spawned(event => {
    let { entity, player, level, server } = event
    if (!entity.type == 'minecraft:zombie') return
    if (server.player.stages.has('no_zombie')){
        event.cancel()
    }
})
*/
//make inner entities not spawn if the player has completed certain sanity checkpoints