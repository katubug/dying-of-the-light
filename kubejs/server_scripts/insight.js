PlayerEvents.loggedIn(event => {
    event.player.paint({
        insight_eye: {
            type: 'rectangle',
            alignx:'left',
            aligny:'top',
            x: 10,
            y: 10,
            h: 48,
            w: 48,
            texture: 'dying_light:textures/ui_images/10_insight_eye.png',
            color: '#ffffff',
            draw: 'ingame',
            visible: false
        },
        insight_eye_anim: {
            type: 'atlas_texture',
            alignx:'left',
            aligny:'top',
            x: 10,
            y: 10,
            h: 48,
            w: 48,
            texture: 'kubejs:item/insight_eye_anim',
            color: '#ffffff',
            draw:  'ingame',
            visible: false
        }/*,
      insight_count_display: {
        alignx:'left',
        aligny:'top',
        type: 'text',
        text: "insight",
        color: 'gray',
        scale: 0.5,
        x: 37,
        y: 80,
        draw: 'ingame',
        visible: false
      }*/
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
    if (player.age % 20 != 0) return
    //Set text to insight count
    event.player.paint({insight_count_display: {text:`${player.persistentData.insightCount}`}})
    //Low Insight
    //If player has 1+ insight, give them an advancement
    if (player.persistentData.insightCount >= 1) {
        if (!player.stages.has('insight_tutorial')){
            player.stages.add('insight_tutorial')
            event.server.runCommandSilent(`/advancement grant ${event.player.name.string} only dying_light:insight_introduction`)
        }
    }
    //If player has under 10 insight, and does not have the low insight stage, add the low insight stage
    if (player.persistentData.insightCount < 10) {
        if (!player.stages.has('low_insight')){
            player.stages.add('low_insight')
        }
        //and hide the eye
        event.player.paint({insight_eye: {visible:false}})
        //event.player.paint({insight_count_display: {text:`${player.persistentData.insightCount}`, visible:false}})
        
    }
    //If player has 11+ insight...
    //if player has the low insight stage, remove it
    if (player.persistentData.insightCount >=11){
        if (player.stages.has('low_insight')) {
            player.stages.remove('low_insight')
        }
        //and show the eye
        event.player.paint({insight_eye: {texture: 'dying_light:textures/ui_images/10_insight_eye.png', visible:true}})
        //event.player.paint({insight_count_display: {text:`${player.persistentData.insightCount}`, visible:true}})
    }
    //20 Insight/Insight Shop
    //If player has 20+ Insight and does not have the insight_shop stage, add it
    if (player.persistentData.insightCount >=20){
        if(!player.stages.has('insight_shop')) {
            player.stages.add('insight_shop')
        }
        //and display the eye
        event.player.paint({insight_eye: {texture: 'dying_light:textures/ui_images/20_insight_eye.png', visible:true}})
        //event.player.paint({insight_count_display: {text:`${player.persistentData.insightCount}`, visible:true}})
    }
    //If player drops below 20 Insight, remove Insightful stage from them
    if (player.persistentData.insightCount <20 && player.stages.has('insight_shop')) {
            player.stages.remove('insight_shop')       
    }
    //50 Insight/Insightful
    //If player has 50+ Insight and does not have the insightful stage, add it
    if (player.persistentData.insightCount >=50){
        if(!player.stages.has('insightful')) {
            player.stages.add('insightful')
        }
        //and show the eye
        event.player.paint({insight_eye: {texture: 'dying_light:textures/ui_images/50_insight_eye.png', visible:true}})
        //event.player.paint({insight_count_display: {text:`${player.persistentData.insightCount}`, visible:true}})
    }
    //If player drops below 50 Insight, remove Insightful stage from them
    if (player.persistentData.insightCount <50 && player.stages.has('insightful')) {
        player.stages.remove('insightful')
    }
    //100 Insight/Translation
    //If player has 100+ Insight and does not have the Translation stage, add it
    if (player.persistentData.insightCount >=100){
        if (!player.stages.has('translation')) {
            player.stages.add('translation')
        }
        //and show the eye
        event.player.paint({insight_eye: {texture: 'dying_light:textures/ui_images/100_insight_eye.png', visible:true}})
        //event.player.paint({insight_count_display: {text:`${player.persistentData.insightCount}`, visible:true}})
    }
    //If player drops below 100 Insight, remove Translation stage from them
    if (player.persistentData.insightCount <100 && player.stages.has('translation')) {
        player.stages.remove('translation')
    }
    //150 Insight/Madness
    //If player has 150+ Insight and does not have the Madness stage, add it
    if (player.persistentData.insightCount >=150){
        if(!player.stages.has('madness')) {
            player.stages.add('madness')
        }
        //and show the eye
        event.player.paint({insight_eye_anim: {visible:true}})
        //event.player.paint({insight_count_display: {text:`${player.persistentData.insightCount}`, visible:true}})
    }
    //If player drops below 150 Insight, remove Madness stage from them
    if (player.persistentData.insightCount <150 && player.stages.has('madness')) {
        player.stages.remove('madness')
        //event.player.paint({insight_eye_anim: {visible:false}})
    }
})

PlayerEvents.tick(event => {
    let { player } = event
    if (player.age % 200 != 0) return
        //If Player is overtired, drain Insight
        if (player.persistentData.insightCount <=0) return
        if (player.hasEffect('iguanatweaksreborn:tired')) {
            player.persistentData.insightCount--
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
        event.player.persistentData.insightCount++ // KATU TODO COMMENT THIS OUT WHEN NOT TESTING
        player.tell(`Your insight level is ${event.player.persistentData.insightCount}`)
        console.log("Katu is cheating for tests, and her insight is now "+event.player.persistentData.insightCount)
    }
})

ItemEvents.rightClicked('kubejs:lunatics_tome', event => {
    event.item.count--
    event.player.persistentData.insightCount+=5
    event.player.tell(`You gain 5 Insight. Your insight is now ${event.player.persistentData.insightCount}`)
})

ItemEvents.rightClicked('kubejs:great_ones_tome', event => {
    event.item.count--
    event.player.persistentData.insightCount+=10
    event.player.tell(`You gain 10 Insight. Your insight is now ${event.player.persistentData.insightCount}`)
})