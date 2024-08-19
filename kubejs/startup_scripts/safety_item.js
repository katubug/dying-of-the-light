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
    let { newTarget } = event
    let vtorch = 'minecraft:torch'
    let vlantern = 'minecraft:lantern'
    let ltorch = 'hardcore_torches:lit_torch'
    let llantern = 'hardcore_torches:lit_lantern'
    if (newTarget == null) return
    if (newTarget.mainHandItem.nbt && newTarget.mainHandItem.nbt.Film 
        && newTarget.mainHandItem.nbt.Film.Count >= 1 && newTarget.mainHandItem.nbt.Active >= 1 && newTarget.mainHandItem.nbt.Film.tag.Frames[15] == null){
       event.setNewTarget(null)
     }
    if (newTarget.getHealth() < 10) return
    if (newTarget.mainHandItem.id == vtorch 
        || newTarget.mainHandItem.id == ltorch 
        || newTarget.mainHandItem.id == vlantern 
        || newTarget.mainHandItem.id == llantern) {
        event.setNewTarget(null)
    }
}