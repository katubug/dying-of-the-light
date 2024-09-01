//Feeding Pets gives positive alignment and sanity
ItemEvents.entityInteracted( (event) => {
    const { 
        player, 
        hand, 
        item, 
        target
    } = event;
    let alignment = player.nbt.ForgeCaps['tombstone:cap_tombstone']['alignment']

    if (target.type != 'minecraft:cat' ) return
    if (item.hasTag('forge:cat_food')){
        player.swing(hand, true);
        let newAlignment = alignment+2
        console.log(newAlignment)
        player.mergeNbt({ForgeCaps:{'tombstone:cap_tombstone':{'alignment':newAlignment}}})
        console.log(alignment)
        }
    });