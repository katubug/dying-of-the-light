/*
BlockEvents.rightClicked('block.right_click', event => {
    //main hand only
    const { block, hand, item, world, player } = event;
    if (hand != 'MAIN_HAND') return; 
    if (block.id == 'realistictorches:torch_wall')
    if (item.id == 'minecraft:torch' || item.id == ('realistictorches:lit_torch')) {
        block.popItem(block.id)
        //target.playSound('minecraft:item.bone_meal.use')
        event.server.runCommandSilent(`playsound minecraft:item.bone_meal.use block @a ${block.x} ${block.y} ${block.z}`)
    }
});
*/