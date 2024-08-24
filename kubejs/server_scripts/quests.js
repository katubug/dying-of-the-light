BlockEvents.rightClicked('hardcore_torches:unlit_lantern', event => {
    const { item, level, player, target } = event 
    const { x, y, z } = player
    if (item.getId() == 'minecraft:flint_and_steel') {
        if (player.stages.has('lantern_quest')) return
        player.stages.add('lantern_quest')
    }
})