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

PlayerEvents.tick(event => {
    const player = event.player;

    if (player.age % 200 != 0) return
    // Check if the player is wearing any piece of Netherite armor
    const isWearingNetherite = player.inventory.armor.some(item => 
        item.id === 'minecraft:netherite_helmet' ||
        item.id === 'minecraft:netherite_chestplate' ||
        item.id === 'minecraft:netherite_leggings' ||
        item.id === 'minecraft:netherite_boots'
    );

    // If wearing Netherite armor, apply fire resistance
    if (isWearingNetherite) {
        player.potionEffects.add('minecraft:fire_resistance', 200);
    }
});