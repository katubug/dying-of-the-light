JEIEvents.hideItems(event => {
    // Disabled Items Removal
    let toHide = [
        'ftbquests:barrier',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'ftbquests:loot_crate_opener',
        'ftbquests:screen_1',
        'ftbquests:screen_3',
        'ftbquests:screen_5',
        'ftbquests:screen_7',
        'ftbquests:task_screen_configurator',
        'aquamirae:maze_rose',
        'immersive_weathering:ice_sickle',
        'aquamirae:poisoned_chakra',
        'legendarysurvivaloverhaul:seasonal_calendar',
        'crockpot:milkmade_hat',
        'crockpot:creative_milkmade_hat',
];
    
for (const hide of toHide) {
  event.hide(hide);
}

})