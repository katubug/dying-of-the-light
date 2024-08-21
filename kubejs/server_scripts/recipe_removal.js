ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        {output: 'aquamirae:maze_rose'},
        {output: 'immersive_weathering:ice_sickle'},
        {output: 'aquamirae:poisoned_chakra'},
        {output: 'legendarysurvivaloverhaul:seasonal_calendar'}
        ];
    
for (const remove of toRemove) {
  event.remove(remove);
}
})