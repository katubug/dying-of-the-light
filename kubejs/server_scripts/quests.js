BlockEvents.rightClicked('hardcore_torches:unlit_lantern', event => {
    const { item, level, player, target } = event 
    const { x, y, z } = player
    if (item.getId() == 'minecraft:flint_and_steel') {
        if (player.stages.has('lantern_quest')) return
        player.stages.add('lantern_quest')
    }
})

PlayerEvents.tick(event => {
    if (event.player.age % 20 != 0) return
    if (event.player.stages.has('sculk_sickness')) return
    if (event.player.hasEffect("sculksickness:sculk_sickness")) {
            event.player.stages.add('sculk_sickness')
            //event.player.tell("oowie")
            event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 1C1D0FD87D3FA513`)
    }
})

//Shop Scripts

//Black and White Film
FTBQuestsEvents.customReward('354CF419EB53165B', event =>{
    event.player.persistentData.insightCount-=2
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
})

//Color Film
FTBQuestsEvents.customReward('7B4B415748A14BE7', event =>{
    event.player.persistentData.insightCount-=5
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
    
})

//Salt
FTBQuestsEvents.customReward('0DF32BFB6729D13D', event =>{
    event.player.persistentData.insightCount--
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
})

//Food
FTBQuestsEvents.customReward('244EAB198E5E059E', event =>{
    event.player.persistentData.insightCount-=10
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
})

//Parrot
FTBQuestsEvents.customReward('7C5AF71554A0867E', event =>{
    event.player.persistentData.insightCount-=10
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
})

//Wolf
FTBQuestsEvents.customReward('2CB896707192F980', event =>{
    event.player.persistentData.insightCount-=10
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
})

//Cat
FTBQuestsEvents.customReward('1771282FC9B8F11C', event =>{
    event.player.persistentData.insightCount-=10
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
})