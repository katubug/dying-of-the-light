ItemEvents.rightClicked('exposure:camera', event => {
    const { item, server, player } = event
    
    let film = item.nbt.Film.Count
    let filmType = item.nbt.Film.id
    let Active = item.nbt.Active
    
    
    if (film < 1) return
    if (!item.nbt.Film.tag){
        switch (filmType) {
            case 'exposure:black_and_white_film':
                if (Active >= 1) {
                    player.tell("bw")
                    console.log("bw")
                    server.runCommandSilent(`sanity add ${event.player.username} 5`)

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
                if (Active >= 1) {
                    player.tell("color")
                    server.runCommandSilent(`sanity add ${event.player.username} 10`)
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
    }

    if (item.nbt.Film.tag.Frames){
    let finalFrame = item.nbt.Film.tag.Frames[15]
    
    if (finalFrame == null){
    switch (filmType) {
        case 'exposure:black_and_white_film':
            if (Active >= 1) {
                player.tell("bw")
                console.log("bw")
                server.runCommandSilent(`sanity add ${event.player.username} 5`)
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
            if (Active >= 1) {
                player.tell("color")
                server.runCommandSilent(`sanity add ${event.player.username} 10`)
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
}
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