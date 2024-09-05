ItemEvents.rightClicked('kubejs:lunar_gem', event => {
    let moonPhase = event.level.moonPhase;
    if (moonPhase == 0 ){
        let moonString = "Full"
        event.player.tell(`The current Moon phase is ${moonString}`)
    } else if (moonPhase == 1){
        let moonString = "Waning Gibbous"
        event.player.tell(`The current Moon phase is ${moonString}, 7 days to Full.`)
    } else if (moonPhase == 2){
        let moonString = "Last Quarter"
        event.player.tell(`The current Moon phase is ${moonString}, 6 days to Full.`)
    } else if (moonPhase == 3){
        let moonString = "Waning Crescent"
        event.player.tell(`The current Moon phase is ${moonString}, 5 days to Full.`)
    } else if (moonPhase == 4){
        let moonString = "New Moon"
        event.player.tell(`The current Moon phase is ${moonString}, 4 days to Full.`)
    } else if (moonPhase == 5){
        let moonString = "Waxing Crescent"
        event.player.tell(`The current Moon phase is ${moonString}, 3 days to Full.`)
    } else if (moonPhase == 6){
        let moonString = "First Quarter"
        event.player.tell(`The current Moon phase is ${moonString}, 2 days to Full.`)
    } else if (moonPhase == 7){
        let moonString = "Waxing Gibbous"
        event.player.tell(`The current Moon phase is ${moonString}, 1 day to Full.`)
    }
})
