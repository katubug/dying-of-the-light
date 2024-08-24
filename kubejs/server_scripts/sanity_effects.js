
PlayerEvents.tick(event => {
    let { player, level, server } = event
    let sanity = player.nbt.ForgeCaps['sanitydim:sanity']['sanity.sanity']
    if (player.age % 200 != 0) return
        if (sanity >= 0.6) {
            if(player.stages.has('insanity')) return;
                player.stages.add('insanity')
                player.persistentData.insightCount++ //Player gets insight for losing their mind
                player.tell("You feel as if the world is out to get you...")
                event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} insane`)
    }
        if (sanity < 0.6) {
            if(!player.stages.has('insanity')) return;
                player.stages.remove('insanity')
                player.tell("You feel a sense of well-being.")
                event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} insane`)
    }
})

PlayerEvents.tick(event => {
    let { player, level, server } = event
    if (player.age % 200 != 0) return
    //If Player is wearing OP armor, drain sanity.
    if (player.chestArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.headArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.legsArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    if (player.feetArmorItem.hasTag('forge:sanity_drain_armor')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
    //If Player's head is injured, drain sanity.
    if (player.hasEffect('legendarysurvivaloverhaul:headache')) {
        event.server.runCommandSilent(`sanity add ${event.player.name.string} -2`)
    }
    //Player sanity passively regens at high insight.
    if (player.persistentData.insightCount >=100){
        event.server.runCommandSilent(`sanity add ${event.player.name.string} 1`)
    }
})

ItemEvents.rightClicked('exposure:camera', event => {
    const Mth = Java.loadClass('net.minecraft.util.Mth')
    const { item, server, player, level} = event
    let film = item.nbt.Film.Count                  //Player needs to have film
    let filmType = item.nbt.Film.id                 //Different film types provide different benefit levels
    let Active = item.nbt.Active                    //Player must be looking through the viewfinder
    let filmCount = item.nbt.Film.tag.Frames[15]    //Player must have film charges available (aka the final slot isn't used)

    if (film < 1) return

    switch (filmType) {
        case 'exposure:black_and_white_film':
            if (filmCount == null && Active >= 1) { //Make this only fire when the camera has charges left AND after the player is looking through the viewfinder
            //player.tell("bw")
            server.runCommandSilent(`sanity add ${event.player.username} 5`)
            player.persistentData.insightCount++ // player gets insight for observing/photographing
            //attempting damage. okay it does work! it also targets the player though, so we need to make the damage different.
            /*
            let box = AABB.of(player.x-10, player.y-2, player.x-10, player.x+10, player.y+2, player.z+10)
                let dim = event.server.getLevel('minecraft:overworld')
                let entitiesWithin = dim.getEntitiesWithin(box)
                entitiesWithin.attack(10)
            }*/
           /*
            level.getEntitiesWithin(player.boundingBox.inflate(10)).forEach(entity => {
                if(entity == player || !entity.hasTag('spirit_damage')) return;
                entity.attack(entity.level.damageSources().magic(),10)
            })
                */
            //Thanks to ChiefArug and Raia for this code: https://discord.com/channels/303440391124942858/1257097850785890415
            let myBoundingBox = player.getBoundingBox().inflate(4)
            player.getLevel().getEntitiesWithin(myBoundingBox).forEach(entity => {
                // math stuff here
                let dx = player.getX() - entity.getX()
                let dz = player.getZ() - entity.getZ()
                let entityYaw = Mth.wrapDegrees(Math.atan2(dz, dx) * (180/JavaMath.PI) +90)
                entityYaw = entityYaw % 360
                if (entityYaw < 0) entityYaw += 360
                //player.tell(`Entity Yaw: ${entityYaw}`);
        
                let playerYaw = player.getYaw() % 360
                if (playerYaw < 0) playerYaw += 360
                //player.tell(`Player Yaw: ${playerYaw}`);
        
                let minYaw = (playerYaw - 15) % 360
                if (minYaw < 0) minYaw += 360
                let maxYaw = (playerYaw + 15) % 360
                if (maxYaw < 0) maxYaw += 360
                //player.tell(`Min Yaw: ${minYaw}, Max Yaw: ${maxYaw}`);
        
                let isWithinRange
                if (minYaw < maxYaw) 
                    {
                        isWithinRange = (entityYaw >= minYaw && entityYaw <= maxYaw)
                    } 
                    else 
                    {
                        isWithinRange = (entityYaw >= minYaw || entityYaw <= maxYaw)
                    }
                //player.tell(`Is Within Range: ${isWithinRange}`);
        
                    
                    if (isWithinRange) {
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage"))
                            entity.attack(entity.level.damageSources().magic(),30)
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage_1s"))
                            entity.attack(entity.level.damageSources().magic(),1000)
                    }
            })
        }
            break

        case 'exposure:color_film':
            if (filmCount == null && Active >= 1) {
                //player.tell("color")
                server.runCommandSilent(`sanity add ${event.player.username} 10`)
                player.persistentData.insightCount++
            }
            break
    }
})
ItemEvents.rightClicked( event => {
    const { item, server, player } = event
    if (player.mainHandItem.hasTag('forge:sanity_drain_item')) {
        //player.tell("heehe")
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
})

NetworkEvents.dataReceived('leftClickData', event=> {
    const {player, data, server} = event;
    const {hand} = data;
    const item = player.getItemInHand(hand);
    //if (item.hasTag('forge:sanity_drain_item')) {
    if (player.mainHandItem.hasTag('forge:sanity_drain_item')) {
        //player.tell("boop")
        server.runCommandSilent(`sanity add ${event.player.name.string} -1`)
    }
})