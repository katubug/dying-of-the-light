PlayerEvents.tick(event => {
    let { player, server } = event
    //Only check in 10 second intervals
    if (player.age % 200 != 0) return
    //TODO Katu there's gotta be a better way to do this lmaos

    if (player.stages.has('dweller_resolved') && player.stages.has('dweller_begun')){
        console.log("Player has Resolved Dweller quest, removing Begun stage.")
        player.stages.remove('dweller_begun')
    }
    if (player.stages.has('nameless_resolved') && player.stages.has('nameless_begun')){
        console.log("Player has Resolved Nameless quest, removing Begun stage.")
        player.stages.remove('nameless_begun')
    }
    if (player.stages.has('mother_resolved') && player.stages.has('mother_begun')){
        console.log("Player has Resolved Mother quest, removing Begun stage.")
        player.stages.remove('mother_begun')
    }
    if (player.stages.has('herobrine_resolved') && player.stages.has('herobrine_begun')){
        console.log("Player has Resolved Herobrine quest, removing Begun stage.")
        player.stages.remove('herobrine_begun')
    }
    if (player.stages.has('hidebehind_resolved') && player.stages.has('hidebehind_begun')){
        console.log("Player has Resolved Hidebehind quest, removing Begun stage.")
        player.stages.remove('hidebehind_begun')
    }
    if (player.stages.has('cornelia_resolved') && player.stages.has('cornelia_begun')){
        console.log("Player has Resolved Cornelia quest, removing Begun stage.")
        player.stages.remove('cornelia_begun')
    }

})