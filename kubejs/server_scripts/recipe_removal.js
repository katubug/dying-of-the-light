ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        {output: 'aquamirae:maze_rose'},
        {output: 'immersive_weathering:ice_sickle'},
        {output: 'aquamirae:poisoned_chakra'},
        {output: 'legendarysurvivaloverhaul:seasonal_calendar'},
        {output: 'ring_of_return:ring_of_return'},
        {output:'crockpot:milkmade_hat'},
        {output:'crockpot:creative_milkmade_hat'},
        {output: 'tombstone:impregnated_diamond'},
        {output: 'tombstone:bone_needle'},
        {output: 'minecraft:lantern'}
        ];
    
for (const remove of toRemove) {
  event.remove(remove);
}
})