// Register Damage Type
ServerEvents.highPriorityData(event => {
    event.addJson("kubejs:damage_type/spirit_damage", {
        "effects": "hurt",
        "exhaustion": 0.5,
        "message_id": "spiritKill",
        "scaling": "when_caused_by_living_non_player"
    })
})
let $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
let DAMAGE_TYPE = $ResourceKey.createRegistryKey("damage_type")
function getDamageSource(level, damageType, causingEntity, targetEntity) {
    let resourceKey = $ResourceKey.create(DAMAGE_TYPE, Utils.id(damageType))
    let holder = level.registryAccess().registryOrThrow(DAMAGE_TYPE).getHolderOrThrow(resourceKey)
    return new DamageSource(holder, causingEntity, targetEntity)
}

ItemEvents.entityInteracted(event => {
    const { entity, target } = event
    let damageSource = getDamageSource(entity.getLevel(), "kubejs:spirit_damage", entity, target);
    target.attack(damageSource, 15);
})
EntityEvents.death(event => {
    const { entity, source } = event
    if (!source.actual?.player) return
    if (!entity.entityType.tags.anyMatch(tag => tag.location() == "forge:spirit_damage")) return
    if (!source.actual.persistentData.insightCount) source.actual.persistentData.insightCount = 0
    console.log(source.getType())
    if (source.getType() == "kubejs:spirit_damage") {
        source.actual.persistentData.insightCount++
        console.log(source.actual.persistentData.insightCount)
    }
})

ServerEvents.tags("damage_type", event => {
    event.add("minecraft:is_explosion", "kubejs:spirit_damage")
})