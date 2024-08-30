PlayerEvents.tick(event => {
    let { player } = event
    if (!player.persistentData.insightCount) player.persistentData.insightCount = 0
    if (player.persistentData.insightCount <=0 && player.stages.has('insight_shop')) {
        player.stages.remove('insight_shop')
        console.log("Player can no longer access Insight Shop.")
        event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} reset 7F588C2BBD868E89`)
    }
    if (player.persistentData.insightCount < 10) return
    if (player.persistentData.insightCount >=20 && !player.stages.has('insight_shop')) {
        player.stages.add('insight_shop')
    }
    if (player.persistentData.insightCount >=50 && !player.stages.has('insightful')) {
        player.stages.add('insightful')
    }
    if (player.persistentData.insightCount >=100 && !player.stages.has('translation')) {
        player.stages.add('translation')
    }
    
})



PlayerEvents.advancement(event => {
    let {advancement} = event
    event.player.persistentData.insightCount++
    console.log("Player insight from gaining advancement "+advancement+" is now "+event.player.persistentData.insightCount)
})

ItemEvents.rightClicked( event => {
    const { item, server, player } = event
    if (player.mainHandItem.id == 'kubejs:ancient_eye') {
        player.tell(`Your insight level is ${event.player.persistentData.insightCount}`)
        //event.player.persistentData.insightCount++
        //console.log("Katu is cheating for tests, and her insight is now "+event.player.persistentData.insightCount)
    }
})