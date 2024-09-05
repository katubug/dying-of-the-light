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

//Insight Rewards

//Study Cave Dweller
FTBQuestsEvents.customReward('2705B493FC2A0145', event =>{
    event.player.persistentData.insightCount+=1
    console.log("Player insight after completing quest is now "+event.player.persistentData.insightCount)
})

//Study Captain Cornelia
FTBQuestsEvents.customReward('345530A235F5629F', event =>{
    event.player.persistentData.insightCount+=1
    console.log("Player insight after completing quest is now "+event.player.persistentData.insightCount)
})

//Study Maze Mother
FTBQuestsEvents.customReward('3EB4CFC7F70B1AA1', event =>{
    event.player.persistentData.insightCount+=1
    console.log("Player insight after completing quest is now "+event.player.persistentData.insightCount)
})

//Study Nameless Hanged
FTBQuestsEvents.customReward('3A87EC0F8B883A7F', event =>{
    event.player.persistentData.insightCount+=1
    console.log("Player insight after completing quest is now "+event.player.persistentData.insightCount)
})

//Study Rotting Stalker
FTBQuestsEvents.customReward('613151BD44B1508D', event =>{
    event.player.persistentData.insightCount+=1
    console.log("Player insight after completing quest is now "+event.player.persistentData.insightCount)
})

//Study Sneaking Terror
FTBQuestsEvents.customReward('53161CF8D76544C4', event =>{
    event.player.persistentData.insightCount+=1
    console.log("Player insight after completing quest is now "+event.player.persistentData.insightCount)
})

//Study Herobrine/the Possessed
FTBQuestsEvents.customReward('3BFEA5393CFB2BF5', event =>{
    event.player.persistentData.insightCount+=1
    console.log("Player insight after completing quest is now "+event.player.persistentData.insightCount)
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

//Color Film Developing Potions
FTBQuestsEvents.customReward('15FC502EDB664303', event =>{
    event.player.persistentData.insightCount-=6
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

//Ferns
FTBQuestsEvents.customReward('14E9C39DEA20DF5B', event =>{
    event.player.persistentData.insightCount-=2
    console.log("Player insight after spending is now "+event.player.persistentData.insightCount)
})

//Potion Ingredients
FTBQuestsEvents.customReward('0AFF61B8CD24E091', event =>{
    event.player.persistentData.insightCount-=2
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