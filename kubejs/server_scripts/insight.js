PlayerEvents.loggedIn(event => {
    event.player.paint({
      insight_eye: {
        type: 'rectangle',
        x: 40,
        y: 20,
        texture: 'kubejs:textures/item/ancient_eye.png',
        color: '#07171b',
        draw: 'always',
        visible: false
      },
      last_message: {
        type: 'text',
        text: "insight",
        scale: 1.5,
        x: 60,
        y: 20,
        draw: 'always'
      }
    })
  })

PlayerEvents.tick(event => {
    let { player } = event
    if (!player.persistentData.insightCount) player.persistentData.insightCount = 0
    if (player.persistentData.insightCount <=0 && player.stages.has('insight_shop')) {
        player.stages.remove('insight_shop')
        console.log("Player can no longer access Insight Shop.")
        event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} reset 7F588C2BBD868E89`)
    }
    if (player.age % 100 != 0) return
    event.player.paint({last_message: {text:`${player.persistentData.insightCount}`}})
    //Low Insight
    //If player has under 10 insight, and does not have the low insight stage, add the low insight stage
    if (player.persistentData.insightCount < 10) {
        if (!player.stages.has('low_insight')){
            player.stages.add('low_insight')
        }
        //and hide the eye
        event.player.paint({insight_eye: {color: '#25544A', visible:false}})
        console.log("Player has low insight, eye should be hidden.")
    }
    //If player has 11+ insight...
    //if player has the low insight stage, remove it
    if (player.persistentData.insightCount >=11){
        if (player.stages.has('low_insight')) {
            player.stages.remove('low_insight')
        }
        //and show the eye
        event.player.paint({insight_eye: {color: '#56B098', visible:true}})
        console.log("Player has low insight, but eye should be visible.")
    }
    //20 Insight/Insight Shop
    //If player has 20+ Insight and does not have the insight_shop stage, add it
    if (player.persistentData.insightCount >=20){
        if(!player.stages.has('insight_shop')) {
            player.stages.add('insight_shop')
        }
        //and display the eye
        event.player.paint({insight_eye: {color: '#84F1F9', visible:true}})
        console.log("player has 20+ insight")
    }
    //If player drops below 20 Insight, remove Insightful stage from them
    if (player.persistentData.insightCount <20 && player.stages.has('insight_shop')) {
            player.stages.remove('insight_shop')
            console.log("player has 20- insight")        
    }
    //50 Insight/Insightful
    //If player has 50+ Insight and does not have the insightful stage, add it
    if (player.persistentData.insightCount >=50){
        if(!player.stages.has('insightful')) {
            player.stages.add('insightful')
        }
        //and show the eye
        event.player.paint({insight_eye: {color: '#E0A16E', visible:true}})
        console.log("player has 50+ insight")
    }
    //If player drops below 50 Insight, remove Insightful stage from them
    if (player.persistentData.insightCount <50 && player.stages.has('insightful')) {
        player.stages.remove('insightful')
        console.log("player has 50- insight")
    }
    //100 Insight/Translation
    //If player has 100+ Insight and does not have the Translation stage, add it
    if (player.persistentData.insightCount >=100){
        if (!player.stages.has('translation')) {
            player.stages.add('translation')
        }
        //and show the eye
        event.player.paint({insight_eye: {color: '#FAC716', visible:true}})
        console.log("player has 100+ insight")
    }
    //If player drops below 100 Insight, remove Translation stage from them
    if (player.persistentData.insightCount <100 && player.stages.has('translation')) {
        player.stages.remove('translation')
        console.log("player has 100- insight")
    }
    //150 Insight/Madness
    //If player has 150+ Insight and does not have the Madness stage, add it
    if (player.persistentData.insightCount >=150){
        if(!player.stages.has('madness')) {
            player.stages.add('madness')
        }
        //and show the eye
        event.player.paint({insight_eye: {color: '#FF0000', visible:true}})
        console.log("player has 150+ insight")
    }
    //If player drops below 150 Insight, remove Madness stage from them
    if (player.persistentData.insightCount <150 && player.stages.has('madness')) {
        player.stages.remove('madness')
        console.log("player has 150- insight")
    }
})


EntityEvents.death(event => {
    const {entity, player} = event
    if (!entity.isPlayer()) return
    if (player.persistentData.insightCount > 0) {
    player.persistentData.insightCount--
    console.log(`Player ${event.player.name.string} lost insight when dying. Insight is now `+player.persistentData.insightCount+"."
        )
    }
})


PlayerEvents.advancement(event => {
    let {advancement} = event
    event.player.persistentData.insightCount++
    console.log("Player gained insight from advancement "+advancement+" and now has "+event.player.persistentData.insightCount+" insight.")
})

ItemEvents.rightClicked( event => {
    const { item, server, player } = event
    if (player.mainHandItem.id == 'kubejs:ancient_eye') {
        //event.player.persistentData.insightCount++ // KATU TODO COMMENT THIS OUT WHEN NOT TESTING
        player.tell(`Your insight level is ${event.player.persistentData.insightCount}`)
        //console.log("Katu is cheating for tests, and her insight is now "+event.player.persistentData.insightCount)
    }
})