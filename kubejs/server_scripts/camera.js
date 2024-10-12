//HUGE THANKS to Liopyu from the KubeJS discord for holding my hand through this whole dang process.
let $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
    let DAMAGE_TYPE = $ResourceKey.createRegistryKey("damage_type")
    function getDamageSource(level, damageType, targetEntity, causingEntity) {
    let resourceKey = $ResourceKey.create(DAMAGE_TYPE, Utils.id(damageType))
    let holder = level.registryAccess().registryOrThrow(DAMAGE_TYPE).getHolderOrThrow(resourceKey)
    return new DamageSource(holder, targetEntity, causingEntity)
    }

ItemEvents.rightClicked('exposure:camera', event => {
    const { item, server, player, entity, target } = event
    const Mth = Java.loadClass('net.minecraft.util.Mth')
    if (!item.nbt.Film) return;
    let film = item.nbt.Film.Count
    let filmType = item.nbt.Film.id
    let Active = item.nbt.Active

    let damageSource = getDamageSource(entity.getLevel(), "kubejs:spirit_damage", target.entity, entity);
    
    if (film < 1) return
    if (!item.nbt.Film.tag){
        //console.log("Camera does not have frames")
        switch (filmType) {
            case 'exposure:black_and_white_film':
                if (Active >= 1) {
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
                        //Grant player Insight
                        event.player.persistentData.insightCount++
                        console.log("Player gained insight from using Camera, and now has"+event.player.persistentData.insightCount)
                        //If it's a regular spirit entity, do normal damage to it
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage")) 
                            target.entity.attack(damageSource, 7);
                        //If it's an unfair spirit entity, two-shot it (cuz black and white)
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage_1s"))
                            target.entity.attack(damageSource, 30);
                    }
            })
            }
                break
    
            case 'exposure:color_film':
                if (Active >= 1) {
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
                        //Grant player Insight
                        event.player.persistentData.insightCount++
                        console.log("Player gained insight from using Camera, and now has"+event.player.persistentData.insightCount)
                        //If it's a regular spirit entity, do normal damage
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage"))
                            target.entity.attack(damageSource, 7);
                        //If it's an unfair spirit entity, one shot it (cuz color)
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage_1s"))
                            target.entity.attack(damageSource, 30);
                    }
            })
                }
                break
        }
    }

    if (item.nbt.Film.tag && item.nbt.Film.tag.Frames){
    let finalFrame = item.nbt.Film.tag.Frames[15]
    //console.log("Camera has frames.")
    
    if (finalFrame == null){
    switch (filmType) {
        case 'exposure:black_and_white_film':
            if (Active >= 1) {
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
                        //Grant player Insight
                        event.player.persistentData.insightCount++
                        console.log("Player gained insight from using Camera, and now has"+event.player.persistentData.insightCount)
                        //If it's a regular spirit entity, do normal damage to it
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage"))
                            target.entity.attack(damageSource, 7);
                        //If it's an unfair spirit entity, two-shot it (cuz black and white)
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage_1s"))
                            target.entity.attack(damageSource, 30);
                    }
            })
        }
            break

        case 'exposure:color_film':
            if (Active >= 1) {
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
                        //Grant player Insight
                        event.player.persistentData.insightCount++
                        console.log("Player gained insight from using Camera, and now has"+event.player.persistentData.insightCount)
                        //If it's a regular spirit entity, do normal damage
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage"))
                            target.entity.attack(damageSource, 7);
                        //If it's an unfair spirit entity, one shot it (cuz color)
                        if (entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage_1s"))
                            target.entity.attack(damageSource, 30);
                    }
            })
            }
            break
    }
}
}
})