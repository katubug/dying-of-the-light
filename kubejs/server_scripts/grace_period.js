PlayerEvents.tick(event => {
    let { player, level, server } = event
    if (!player.persistentData.FireResistanceTimer) player.persistentData.FireResistanceTimer = 0
    if (player.persistentData.FireResistanceTimer > 0) {
        player.persistentData.FireResistanceTimer--
    }
    if (player.age % 20 != 0) return
    if (player.block.up.canSeeSky && level.isDay() && player.block.up.light >= 15) {
        if (player.persistentData.FireResistanceTimer == 0) {
            player.potionEffects.add("fire_resistance", 500, 0, false, false)
            player.persistentData.FireResistanceTimer = 6000
        }
    }
})