// Listen to item registry event

StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('eel_bait').displayName("Eel Bait")
    event.create('rotted_residue').displayName("Rotted Residue")
    event.create('putrid_ichor').displayName("Putrid Ichor")
    event.create('ancient_eye').displayName("Ancient Eye")
    event.create('lunar_gem').displayName("Lunar Gem")
    event.create('lunatics_tome').displayName("Lunatic's Tome")
    event.create('great_ones_tome').displayName("Great One's Tome")
    event.create('void_tome').displayName("Void Tome")
    
    //Herobrine Items
    event.create('oblivion_dust').displayName('Dust of Oblivion')           //dust from his origin plane
    event.create('strange_tool').displayName('Strange Tool')                //a tool he made without understanding
    event.create('possessed_journal').displayName('Journal of a Possessed') //a journal written by a villager he possessed
    
    //Cave Dweller Items
    event.create('teddy').displayName("Worn Teddy Bear")
    event.create('polished_coal').displayName('Anthracite Coal')              //some coal he polished to a shine, anthracite
    event.create('womans_locket').displayName('Woman\'s Locket')            //his wife's locket
    event.create('necromantic_contract').displayName('Necromantic Contract')//his contract with the necromancer
    
    //Maze Mother Items
    event.create('manta_ray_idol').displayName('Manta Ray Idol')            //An artifact made by the polar natives, worshipping the mother
    event.create('tainted_pearl').displayName('Rune-Tainted Pearl')         //a pearl from a clam near where the run was dug up
    event.create('whalebone_harpoon').displayName('Whalebone Harpoon')      //a harpoon from the locals who needed to defend themselves from her
    
    //Captain Cornelia Items
    event.create('frozen_heart').displayName("Frozen Heart")
    event.create('cornelias_heart').displayName("Cornelia's Heart")
    event.create('rune_echo_stone').displayName('Rune Echo Stone')          //a stone with the shape of the rune roughly carved into it. not as powerful but still evil
    event.create('icy_heart_fragment').displayName('Icy Heart Fragment')    //a piece of her frozen heart
    event.create('ships_log').displayName('Ship\'s Log Entry')                    //a log from her time as captain
    
    //Nameless Hanged Items
    event.create('ragged_rope').displayName('Ragged Rope')                //The rope he was hanged with
    event.create('blindfold').displayName('Tattered Blindfold')           //His blindfold
    event.create('trade_goods').displayName('Trade Goods')                //a box of trade goods
    
    //Hidebehind Items
    event.create('broken_toy').displayName('Broken Toy')                  //one of his few toys
    event.create('unsent_letter').displayName('Unsent Letter')            //a letter from benjamin to his parents
    event.create('carved_whistle').displayName('Carved Whistle')          //a whistle he made as part of his job
    
    //Poppets 
    event.create('herobrine_poppet').texture('kubejs:item/poppet_herobrine').displayName("Herobrine Poppet")
    event.create('hidebehind_poppet').texture('kubejs:item/poppet_hidebehind').displayName("HideBehind Poppet")
    event.create('nameless_hanged_poppet').texture('kubejs:item/poppet_nameless').displayName("Nameless Hanged Poppet")
    event.create('captain_cornelia_poppet').texture('kubejs:item/poppet_cornelia').displayName("Captain Cornelia Poppet")
    event.create('maze_mother_poppet').texture('kubejs:item/poppet_mother').displayName("Maze Mother Poppet")
    event.create('cave_dweller_poppet').texture('kubejs:item/poppet_dweller').displayName("Cave Dweller Poppet")

    //Notes
    event.create('hidebehind_note').displayName("Note from Benjamin")
    event.create('nameless_hanged_note').displayName("Note from a Nameless Man")
    event.create('captain_cornelia_note').displayName("Note from Cornelia")
    event.create('maze_mother_note').displayName("Maze Mother's Appreciation")
    event.create('herobrine_note').displayName("Note from a Lonely Being")
    event.create('cave_dweller_note').displayName("Note from Garrik")

    //Eye Animation Icon
    event.create('insight_eye_anim').displayName('Insight Eye Animated')

  })
  

ItemEvents.modification(event => {
  event.modify('minecraft:potion', item =>{
    item.maxStackSize = 16
    })

  event.modify('minecraft:lingering_potion', item =>{
    item.maxStackSize = 16
    })

  event.modify('minecraft:splash_potion', item =>{
    item.maxStackSize = 16
    })

})


StartupEvents.registry('block', event => {

  // Carved Warped Logs
  event.create('carved_warped_1', 'cardinal')
  .model('kubejs:block/carved_warped_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Vertical') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_2', 'cardinal')
  .model('kubejs:block/carved_warped_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_3', 'cardinal')
  .model('kubejs:block/carved_warped_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Top') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_4', 'cardinal')
  .model('kubejs:block/carved_warped_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Bottom') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_5', 'cardinal')
  .model('kubejs:block/carved_warped_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Eerie') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_6', 'cardinal')
  .model('kubejs:block/carved_warped_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Curve') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_7', 'cardinal')
  .model('kubejs:block/carved_warped_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Unsettling') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_8', 'cardinal')
  .model('kubejs:block/carved_warped_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Warped Wood Head') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Acacia Logs
  event.create('carved_acacia_1', 'cardinal')
  .model('kubejs:block/carved_acacia_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Flower')
  .tagBlock('minecraft:mineable/axe')

  event.create('carved_acacia_2', 'cardinal')
  .model('kubejs:block/carved_acacia_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Cross') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_3', 'cardinal')
  .model('kubejs:block/carved_acacia_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Brace') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_4', 'cardinal')
  .model('kubejs:block/carved_acacia_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Edge') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_5', 'cardinal')
  .model('kubejs:block/carved_acacia_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Diamond') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_6', 'cardinal')
  .model('kubejs:block/carved_acacia_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Lined') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - rotation
  event.create('carved_acacia_7', 'cardinal')
  .model('kubejs:block/carved_acacia_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Corner') 
  .tagBlock('minecraft:mineable/axe') 
  

  event.create('carved_acacia_8', 'cardinal')
  .model('kubejs:block/carved_acacia_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Acacia Wood Bracket') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Birch Logs
event.create('carved_birch_1', 'cardinal')
.model('kubejs:block/carved_birch_1')
.soundType('wood')
.hardness(2)
.displayName('Carved Birch Wood Horizontal') 
.tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_birch_2', 'cardinal')
  .model('kubejs:block/carved_birch_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood End Cap') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_3', 'cardinal')
  .model('kubejs:block/carved_birch_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Inlay') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_4', 'cardinal')
  .model('kubejs:block/carved_birch_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Arched') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_5', 'cardinal')
  .model('kubejs:block/carved_birch_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Embossed') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_birch_6', 'cardinal')
  .model('kubejs:block/carved_birch_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Corner') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_7', 'cardinal')
  .model('kubejs:block/carved_birch_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Fleur de Lis') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_8', 'cardinal')
  .model('kubejs:block/carved_birch_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Birch Wood Vertical') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Crimson Logs
event.create('carved_crimson_1', 'cardinal')
.model('kubejs:block/carved_crimson_1')
.soundType('wood')
.hardness(2)
.displayName('Carved Crimson Wood Vertical') 
.tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_2', 'cardinal')
  .model('kubejs:block/carved_crimson_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_3', 'cardinal')
  .model('kubejs:block/carved_crimson_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Curve') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_4', 'cardinal')
  .model('kubejs:block/carved_crimson_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Celestial') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_5', 'cardinal')
  .model('kubejs:block/carved_crimson_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Lunar') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_6', 'cardinal')
  .model('kubejs:block/carved_crimson_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Rune Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_7', 'cardinal')
  .model('kubejs:block/carved_crimson_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Rune Vertical') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_crimson_8', 'cardinal')
  .model('kubejs:block/carved_crimson_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Crimson Wood Corner') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Dark Oak Logs
  event.create('carved_dark_oak_1', 'cardinal')
  .model('kubejs:block/carved_dark_oak_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Scales') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_2', 'cardinal')
  .model('kubejs:block/carved_dark_oak_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Clouds') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_3', 'cardinal')
  .model('kubejs:block/carved_dark_oak_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_4', 'cardinal')
  .model('kubejs:block/carved_dark_oak_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Head') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_5', 'cardinal')
  .model('kubejs:block/carved_dark_oak_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Vertical') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - rotation
  event.create('carved_dark_oak_6', 'cardinal')
  .model('kubejs:block/carved_dark_oak_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Leg') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_7', 'cardinal')
  .model('kubejs:block/carved_dark_oak_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Dragon Tail') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_8', 'cardinal')
  .model('kubejs:block/carved_dark_oak_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Dark Oak Wood Oni') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Spruce Logs
  event.create('carved_spruce_1', 'cardinal')
  .model('kubejs:block/carved_spruce_1')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Eagle') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_spruce_2', 'cardinal')
  .model('kubejs:block/carved_spruce_2')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Wing') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_3', 'cardinal')
  .model('kubejs:block/carved_spruce_3')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Talons') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_4', 'cardinal')
  .model('kubejs:block/carved_spruce_4')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Villager') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_5', 'cardinal')
  .model('kubejs:block/carved_spruce_5')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Paws') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_6', 'cardinal')
  .model('kubejs:block/carved_spruce_6')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Beast') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_7', 'cardinal')
  .model('kubejs:block/carved_spruce_7')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Horizontal') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_8', 'cardinal')
  .model('kubejs:block/carved_spruce_8')
  .soundType('wood')
  .hardness(2)
  .displayName('Carved Spruce Wood Vertical') 
  .tagBlock('minecraft:mineable/axe') 

})

BlockEvents.modification(event => {

  let starstone = [
    'abyssal_decor:starstone_tiles',
    'abyssal_decor:lapis_pillar',
    'abyssal_decor:gilded_lapis_pillar',
    'abyssal_decor:chiseled_starstone',
    'abyssal_decor:chiseled_starstone',
    'abyssal_decor:polished_starstone_wall',
    'abyssal_decor:polished_starstone_slab',
    'abyssal_decor:polished_starstone_stairs',
    'abyssal_decor:polished_starstone',
    'abyssal_decor:starstone_pillar',
    'abyssal_decor:smooth_starstone',
    'abyssal_decor:gilded_starstone',
    'abyssal_decor:starstone'
  ];

  for (const stars of starstone) {
    event.modify(stars, block => {
      block.lightEmission = 10
    })
  }   

    event.modify('abyssal_decor:starry_pearl_tiles', block => {
      block.lightEmission = 5
    })
  
})