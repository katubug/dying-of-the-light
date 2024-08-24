// Register Damage Type
//HUGE THANKS to Liopyu from the KubeJS discord for holding my hand through this whole dang process.
ServerEvents.highPriorityData(event => {
    event.addJson("kubejs:damage_type/spirit_damage", {
        "effects": "hurt",
        "exhaustion": 0.5,
        "message_id": "spiritKill",
        "scaling": "when_caused_by_living_non_player"
    })
})

EntityEvents.death(event => {
    const { entity, source } = event
    if (source.actual == null)return
    if (!entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage")) return
    if (!source.actual.persistentData.insightCount) source.actual.persistentData.insightCount = 0
    console.log(source.actual)
    if (source.getType() == "spiritKill") {
        source.actual.persistentData.insightCount++
        console.log(source.actual.persistentData.insightCount)
    }
})

ServerEvents.tags("damage_type", event => {
    event.add("minecraft:is_explosion", "kubejs:spirit_damage")
})