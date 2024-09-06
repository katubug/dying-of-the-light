SanityEvents.change(event => {
    const { player, server } = event
    let newSanity = event.getSanity();

    if (newSanity >= 50) {
        if(player.stages.has('insanity')) return;
                player.stages.add('insanity')
                player.persistentData.insightCount++ //Player gets insight for losing their 
                console.log("Player insight is now "+event.player.persistentData.insightCount)
                player.tell("You feel as if the world is out to get you...")
                server.runCommandSilent(`apathy set-admin join ${event.player.name.string} insane`)
    }
    if (newSanity < 50) {
        if(!player.stages.has('insanity')) return;
            player.stages.remove('insanity')
            player.tell("You feel a sense of well-being.")
            server.runCommandSilent(`apathy set-admin part ${event.player.name.string} insane`)
}
});


PlayerEvents.tick(event => {
    let { player, server } = event
    let sanity = player.nbt.ForgeCaps['sanitydim:sanity']['sanity.sanity']
    let alignment = player.nbt.ForgeCaps['tombstone:cap_tombstone']['alignment']
    if (player.age % 200 != 0) return
    if (alignment <= -200){
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
        //console.log(alignment+" 0")
    }
    if (alignment <= -300){
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
        //console.log(alignment+" 1")
    }
    if (alignment <= -400){
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
        //console.log(alignment+" 2")
    }
    if (alignment <= -500){
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
        //console.log(alignment+" 3")
    }
    if (alignment >= 200){
        server.runCommandSilent(`sanity add ${event.player.name.string} 1`)
        //console.log(alignment+" 0")
    }
    if (alignment >= 300){
        server.runCommandSilent(`sanity add ${event.player.name.string} 1`)
        //console.log(alignment+" 1")
    }
    if (alignment >= 400){
        server.runCommandSilent(`sanity add ${event.player.name.string} 1`)
        //console.log(alignment+" 2")
    }
    if (alignment >= 500){
        server.runCommandSilent(`sanity add ${event.player.name.string} 1`)
        //console.log(alignment+" 3")
    }
    //If Player is wearing OP armor, drain sanity.
    if (player.chestArmorItem.hasTag('forge:sanity_drain_armor')) {
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
        //player.tell(sanity)
    }
    if (player.headArmorItem.hasTag('forge:sanity_drain_armor')) {
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.legsArmorItem.hasTag('forge:sanity_drain_armor')) {
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.feetArmorItem.hasTag('forge:sanity_drain_armor')) {
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    //If Player's head is injured, drain sanity.
    if (player.hasEffect('legendarysurvivaloverhaul:headache')) {
        server.runCommandSilent(`sanity add ${event.player.name.string} -2`)
    }
    //Player sanity passively regens at high insight.
    if (player.persistentData.insightCount >=100){
        server.runCommandSilent(`sanity add ${event.player.name.string} 1`)
    }
    //Player sanity passively detriments when too high.
    if (player.persistentData.insightCount >=150){
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    //Sanity passively drains while holding Void Tome.
    if (player.mainHandItem.id == 'void_tome:void_tome'){
        server.runCommandSilent(`sanity add ${event.player.name.string} -2`)
    }
})


//Sanity checker item
ItemEvents.rightClicked( event => {
    const { item, server, player } = event
    let alignment = player.nbt.ForgeCaps['tombstone:cap_tombstone']['alignment']
    if (player.mainHandItem.id == 'tombstone:impregnated_diamond') {
        player.tell(alignment)
        
    }
})


//Sanity Drain items decrement sanity when right clicked.
ItemEvents.rightClicked( event => {
    const { item, server, player } = event
    if (player.mainHandItem.hasTag('forge:sanity_drain_item')) {
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
})

//Sanity Drain items decrement sanity when left clicked (requires buddy script in startup)
NetworkEvents.dataReceived('leftClickData', event=> {
    const {player, data, server} = event;
    const {hand} = data;
    const item = player.getItemInHand(hand);
    if (player.mainHandItem.hasTag('forge:sanity_drain_item')) {
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
})