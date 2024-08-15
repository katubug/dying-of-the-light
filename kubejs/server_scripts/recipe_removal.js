ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        {output: 'aquamirae:maze_rose'},
        {output: 'born_in_chaos_v1:damned_demomans_hat_helmet'}, 
        {output: 'born_in_chaos_v1:trident_hayfork'}, 
        {output: 'born_in_chaos_v1:skullbreaker_hammer'}, 
        {output: 'born_in_chaos_v1:wood_splitter_axe'}, 
        {output: 'born_in_chaos_v1:phantom_bomb'}, 
        {output: 'born_in_chaos_v1:supreme_measure'}, 
        {output: 'immersive_weathering:ice_sickle'},
        {output: 'aquamirae:poisoned_chakra'}
        ];
    
for (const remove of toRemove) {
  event.remove(remove);
}
})