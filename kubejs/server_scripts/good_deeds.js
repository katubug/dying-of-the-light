
//Feeding Cats gives positive alignment
ItemEvents.entityInteracted( (event) => {
    const { 
        player, 
        hand, 
        item, 
        target
    } = event;

    if (target.type != 'minecraft:cat' ) return
    if (target.nbt.Health < 10){
        if (item.hasTag('forge:cat_food')){
            player.swing(hand, true);
            event.server.runCommandSilent(`/tbalignment ${event.player.name.string} increase 10`)
            }
        }
    });

//Feeding Dogs gives positive alignment
ItemEvents.entityInteracted( (event) => {
    const { 
        player, 
        hand, 
        item, 
        target
    } = event;

    if (target.type != 'minecraft:wolf' ) return
    if (target.nbt.Health < 20){
        if (item.hasTag('forge:dog_food')){
            player.swing(hand, true);
            event.server.runCommandSilent(`/tbalignment ${event.player.name.string} increase 10`)
            }
        }
    });
    
//Bone Mealing Crops
BlockEvents.rightClicked( event => {
    const { item, level, player, target, block } = event 
    const { x, y, z } = player
    if (!block.hasTag('minecraft:crops')) return
    if (item.getId() == 'minecraft:bone_meal') {
        event.server.runCommandSilent(`/tbalignment ${event.player.name.string} increase 10`)
    }
})