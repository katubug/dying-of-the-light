ItemEvents.firstLeftClicked( event => {
    const {item, player, server} = event
    event.player.sendData('leftClickData', {hand: `${event.hand}`})
    //player.tell("doop")
    /*if (item.hasTag('forge:sanity_drain_item')) {
        player.tell("boop")
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }*/
})