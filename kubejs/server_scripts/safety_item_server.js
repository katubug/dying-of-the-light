PlayerEvents.tick(event => {
    const { player } = event
    if (player.age % 20 != 0) return
    //console.log(player.mainHandItem.id)
    if (player.getHealth() < 10) { //This works
        if(player.stages.has('low_health')) return;
                player.stages.add('low_health')
                player.tell("you're low health")
                event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} low_health`)
    }
    if (player.getHealth() >= 10) { //This works
        if(!player.stages.has('low_health')) return;
                player.stages.remove('low_health')
                player.tell("you're okay now")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} low_health`)
    }
    //These do not work:
    if (player.mainHandItem.id == 'minecraft:lantern' || player.mainHandItem.id == 'hardcore_torches:lit_lantern') {
        if(player.stages.has('safety_item')) return;
            player.stages.add('safety_item')
            player.tell("you're safe")
            event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} safety_item`)
    }
    if (player.mainHandItem.id != 'minecraft:lantern' && player.mainHandItem.id != 'hardcore_torches:lit_lantern') {
            if(!player.stages.has('safety_item')) return;
                player.stages.remove('safety_item')
                player.tell("you're not safe")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} safety_item`)
    }
    
    if (player.mainHandItem.id == 'exposure:camera') {
        let camera = player.mainHandItem
        let film = camera.nbt.Film.Count
        let Active = camera.nbt.Active
        console.log('katu is holding'+camera)

        //If player has no film, but has safety, remove them from safety.
        if (film < 1) {             
            if(player.stages.has('camera')){
                player.stages.remove('camera')
                player.tell("you're not safe")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} camera`)
                }
            
            }
        //If camera has film, but has taken no photos...
        if (!camera.nbt.Film.tag){
            //And Camera is Active
            if (Active >= 1) {
                //If the player is already safe, leave them be
                if(player.stages.has('camera')) return;
                //Otherwise, add them to safety.
                    player.stages.add('camera')
                    player.tell("you're safe")
                    event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} camera`)
            }
        }
        //If the camera has film, and has taken photos, check whether it has used all charges...
        if (item.nbt.Film.tag.Frames){
            let finalFrame = item.nbt.Film.tag.Frames[15]
            //If the player has photos left...
            if (finalFrame == null){
                //And Camera is Active
                if (Active >= 1) {
                    //If the player is already safe, leave them be
                if(player.stages.has('camera')) return;
                //Otherwise, add them to safety.
                    player.stages.add('camera')
                    player.tell("you're safe")
                    event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} camera`)
                }
            }
        }
    }
})