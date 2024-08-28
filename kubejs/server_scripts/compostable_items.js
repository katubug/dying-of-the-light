ServerEvents.compostableRecipes(event=>{
    //event.add("bamboo", 0.125) // 12.5% to increase compost progress

    let toCompost = [
        'kubejs:rotted_residue',
        'kubejs:putrid_ichor',
        'crockpot:wet_goop'
    ];
    
    for (const compost of toCompost) {
        event.add(compost, 0.50);
  }

})