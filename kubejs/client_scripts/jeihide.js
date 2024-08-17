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
        'born_in_chaos_v1:damned_demomans_hat_helmet', 
        'born_in_chaos_v1:trident_hayfork', 
        'born_in_chaos_v1:skullbreaker_hammer',
        'born_in_chaos_v1:wood_splitter_axe',
        'born_in_chaos_v1:phantom_bomb', 
        'born_in_chaos_v1:supreme_measure', 
        'immersive_weathering:ice_sickle',
        'aquamirae:poisoned_chakra'
];
    
for (const hide of toHide) {
  event.hide(hide);
}

})