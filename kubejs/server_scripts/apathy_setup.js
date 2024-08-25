LevelEvents.loaded(event=>{
    event.server.runCommandSilent(`apathy set-admin create insane false`)
    event.server.runCommandSilent(`apathy set-admin create safety_item false`)
    event.server.runCommandSilent(`apathy set-admin create low_health false`)
    event.server.runCommandSilent(`apathy set-admin create camera false`)
    event.player.tell("hello world")

})