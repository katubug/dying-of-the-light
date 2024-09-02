/*
//Feeding Pets gives positive alignment and sanity
ItemEvents.entityInteracted( (event) => {
    const { 
        player, 
        hand, 
        item, 
        target
    } = event;
    let playerAlignment = player.nbt.ForgeCaps['tombstone:cap_tombstone']['alignment']
    let displayNbt = player.nbt

    if (target.type != 'minecraft:cat' ) return
    if (item.hasTag('forge:cat_food')){
        player.swing(hand, true);
        let newAlignment = playerAlignment+2
        displayNbt.put('tombstone:cap_tombstone', {alignment:[NBT.f(newAlignment)]})
        player.setNbt(displayNbt)
        //player.mergeNbt({ForgeCaps:{'tombstone:cap_tombstone':{'alignment':newAlignment}}})
        console.log(playerAlignment)
        }
    });
    */