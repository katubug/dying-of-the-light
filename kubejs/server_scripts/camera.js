ItemEvents.rightClicked('exposure:camera', event => {
    const Mth = Java.loadClass('net.minecraft.util.Mth')
    const { item, server, player } = event
    let film = item.nbt.Film.Count                  //Player needs to have film
    let filmType = item.nbt.Film.id                 //Different film types provide different benefit levels
    let Active = item.nbt.Active                    //Player must be looking through the viewfinder
    let finalFrame = item.nbt.Film.tag.Frames[15]    //Player must have film charges available (aka the final slot isn't used)
    //TODO - finalFrame is undefined for first shot in each role. Can I add an "if item.nbt.Film.tag.Frames?" check?

    if (film < 1) return

    switch (filmType) {
        case 'exposure:black_and_white_film':
            if (finalFrame == null && Active >= 1) { //Make this only fire when the camera has charges left AND after the player is looking through the viewfinder
            server.runCommandSilent(`sanity add ${event.player.username} 5`)
            player.persistentData.insightCount++ // player gets insight for observing/photographing

            //Camera deals damage to tagged entities within player view
            //Thanks to ChiefArug and Raia for this code: https://discord.com/channels/303440391124942858/1257097850785890415
            let myBoundingBox = player.getBoundingBox().inflate(4)
            player.getLevel().getEntitiesWithin(myBoundingBox).forEach(entity => {
                // math stuff here
                let dx = player.getX() - entity.getX()
                let dz = player.getZ() - entity.getZ()
                let entityYaw = Mth.wrapDegrees(Math.atan2(dz, dx) * (180/JavaMath.PI) +90)
                entityYaw = entityYaw % 360
                if (entityYaw < 0) entityYaw += 360
        
                let playerYaw = player.getYaw() % 360
                if (playerYaw < 0) playerYaw += 360
        
                let minYaw = (playerYaw - 15) % 360
                if (minYaw < 0) minYaw += 360
                let maxYaw = (playerYaw + 15) % 360
                if (maxYaw < 0) maxYaw += 360
        
                let isWithinRange
                if (minYaw < maxYaw) 
                    {
                        isWithinRange = (entityYaw >= minYaw && entityYaw <= maxYaw)
                    } 
                    else 
                    {
                        isWithinRange = (entityYaw >= minYaw || entityYaw <= maxYaw)
                    }
        
                    if (isWithinRange) {
                        //If it's a regular spirit entity, do normal damage to it
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage"))
                            entity.attack(entity.level.damageSources().magic(),7)
                        //If it's an unfair spirit entity, two-shot it (cuz black and white)
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage_1s"))
                            entity.attack(entity.level.damageSources().magic(),1000)
                    }
            })
        }
            break

        case 'exposure:color_film':
            if (finalFrame == null && Active >= 1) {
                server.runCommandSilent(`sanity add ${event.player.username} 10`)
                player.persistentData.insightCount++

            //Camera deals damage to tagged entities within player view
            //Thanks to ChiefArug and Raia for this code: https://discord.com/channels/303440391124942858/1257097850785890415
            let myBoundingBox = player.getBoundingBox().inflate(4)
            player.getLevel().getEntitiesWithin(myBoundingBox).forEach(entity => {
                // math stuff here
                let dx = player.getX() - entity.getX()
                let dz = player.getZ() - entity.getZ()
                let entityYaw = Mth.wrapDegrees(Math.atan2(dz, dx) * (180/JavaMath.PI) +90)
                entityYaw = entityYaw % 360
                if (entityYaw < 0) entityYaw += 360
        
                let playerYaw = player.getYaw() % 360
                if (playerYaw < 0) playerYaw += 360
        
                let minYaw = (playerYaw - 15) % 360
                if (minYaw < 0) minYaw += 360
                let maxYaw = (playerYaw + 15) % 360
                if (maxYaw < 0) maxYaw += 360
        
                let isWithinRange
                if (minYaw < maxYaw) 
                    {
                        isWithinRange = (entityYaw >= minYaw && entityYaw <= maxYaw)
                    } 
                    else 
                    {
                        isWithinRange = (entityYaw >= minYaw || entityYaw <= maxYaw)
                    }
        
                    if (isWithinRange) {
                        //If it's a regular spirit entity, do normal damage
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage"))
                            entity.attack(entity.level.damageSources().magic(),15)
                        //If it's an unfair spirit entity, one shot it (cuz color)
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage_1s"))
                            entity.attack(entity.level.damageSources().magic(),200)
                    }
            })
            }
            break
    }
})

//this script doesn't work, but eventually I'm gonna use it to add insight to the player when they defeat ghosts with the camera's
EntityEvents.death("player", event => {
    const { entity, player } = event
    console.log(event.source.getType())
    if (event.source.getType() == "magic") {
        player.tell("heehoo")
    }
})