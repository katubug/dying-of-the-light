LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:zombie")
        .addWeightedLoot(1, [
            Item.of("born_in_chaos_v1:corpse_maggot").withChance(15),
            Item.of("born_in_chaos_v1:dark_upgrade").withChance(1)
        ]);

        event
        .addEntityLootModifier("boh:little_sister")
        .addWeightedLoot(1, [
            Item.of("born_in_chaos_v1:pieceofdarkmetal").withChance(50)
        ]);
});


