PlayerEvents.tick(event => {
    let { player } = event
    if (!player.persistentData.insightCount) player.persistentData.insightCount = 0
    if (player.persistentData.insightCount < 10) return
    if (player.persistentData.insightCount >=50 && !player.stages.has('insightful')) {
        player.stages.add('insightful')
    }
    if (player.persistentData.insightCount >=100 && !player.stages.has('translation')) {
        player.stages.add('translation')
    }
})

PlayerEvents.advancement(event => {
    event.player.persistentData.insightCount++
})

ItemEvents.rightClicked( event => {
    const { item, server, player } = event
    if (player.mainHandItem.id == 'thaumon:mutagen') {
        player.tell(`Your insight level is ${event.player.persistentData.insightCount}`)
    }
})