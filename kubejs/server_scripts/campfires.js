//Campfires place unlit

BlockEvents.placed((event) => {
    let campfire = "minecraft:campfire";
    if (
      event.player.mainHandItem == campfire ||
      event.player.offHandItem == campfire
    )
      event.block.set(campfire, {
        lit: false,
        facing: event.block.properties.facing,
      }); // also fixed facing reset
  });

//Campfires extinguish in rain
