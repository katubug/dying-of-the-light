ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingChangeTargetEvent', event => {
    //set the global changetarget function into here and restart your game once
    global.changetarget(event)
})

/**
 * 
 * @param {Internal.LivingChangeTargetEvent} event 
 */
global.changetarget = event => {
    //since this is a global event you can run /kubejs reload startup_scripts to reload whatever is in here without
    //restarting the entire game!
    /*
    //This has stopped working. It doesn't seem to be correctly recognizing when the player is holding an item.
    let { newTarget } = event
    if (newTarget == null) return
    console.log(newTarget)
    console.log(newTarget.mainHandItem)
    if (newTarget.mainHandItem.getId() == 'exposure:camera') {
        if (newTarget.mainHandItem.nbt 
            && newTarget.mainHandItem.nbt.Film 
            && newTarget.mainHandItem.nbt.Film.Count >= 1 
            && newTarget.mainHandItem.nbt.Active >= 1 
            && !newTarget.mainHandItem.nbt.Film.tag){
                console.log('1 setting new target'+newTarget)
                event.setNewTarget(null)
        }
        if (newTarget.mainHandItem.nbt
            && newTarget.mainHandItem.nbt.Film 
            && newTarget.mainHandItem.nbt.Film.Count >= 1 
            && newTarget.mainHandItem.nbt.Active >= 1 
            && newTarget.mainHandItem.nbt.Film.tag.Frames[15] == null){
                console.log('2 setting new target'+newTarget)
                event.setNewTarget(null)
        }
        else {
            console.log('target is '+newTarget+' and is holding '+ newTarget.mainHandItem)
        }
    }*/
}
    