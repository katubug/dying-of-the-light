//Cave Dweller
ItemEvents.entityInteracted('kubejs:teddy', (event) => {
	const {
		player,
		hand,
		item,
		target,
		target: {
			x,
			y,
			z
		},
		server,
		level
	} = event;

	if (target.type != 'cave_dweller:cave_dweller') return
	player.swing(hand, true);
	item.count--
	server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
	target.discard()
	server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
	event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 4E1E94854D89D78C`)
	const itemEntity = level.createEntity('item');
	itemEntity.item = Item.of('kubejs:cave_dweller_note')
	itemEntity.setPos(x + 1, y, z);
	itemEntity.spawn();
});

//Nameless Hanged
ItemEvents.entityInteracted('minecraft:nametag', (event) => {
	const {
		player,
		hand,
		item,
		target,
		target: {
			x,
			y,
			z
		},
		server,
		level
	} = event;

	if (target.type != 'graveyard:nameless_hanged') return
	player.swing(hand, true);
	item.count--
	server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
	target.discard()
	server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
	event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 60EB099B66664AB0`)
	const itemEntity = level.createEntity('item');
	itemEntity.item = Item.of('kubejs:nameless_hanged_note')
	itemEntity.setPos(x + 1, y, z);
	itemEntity.spawn();
});

//Captain Cornelia
ItemEvents.entityInteracted('kubejs:cornelias_heart', (event) => {
	const {
		player,
		hand,
		item,
		target,
		target: {
			x,
			y,
			z
		},
		server,
		level
	} = event;

	if (target.type != 'aquamirae:captain_cornelia') return
	player.swing(hand, true);
	item.count--
	server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
	target.discard()
	server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
	event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 4B182572C6CC69D4`)
	let itemEntity = level.createEntity('item');
	itemEntity.item = Item.of('kubejs:captain_cornelia_note')
	itemEntity.setPos(x + 1, y, z);
	itemEntity.spawn();
	let itemEntity2 = level.createEntity('item');
	itemEntity2.item = Item.of('aquamirae:three_bolt_helmet', '{Damage:0}').enchant('minecraft:fire_protection', 2)
	itemEntity2.setPos(x + 1, y, z);
	itemEntity2.spawn();
	let itemEntity3 = level.createEntity('item');
	itemEntity3.item = Item.of('aquamirae:oxygen_tank')
	itemEntity3.setPos(x + 1, y, z);
	itemEntity3.spawn();
	let itemEntity4 = level.createEntity('item');
	itemEntity4.item = Item.of('aquamirae:oxygen_tank')
	itemEntity4.setPos(x + 1, y, z);
	itemEntity4.spawn();
	let itemEntity8 = level.createEntity('item');
	itemEntity8.item = Item.of('4x aquamirae:ship_graveyard_echo')
	itemEntity8.setPos(x + 1, y, z);
	itemEntity8.spawn();
	let itemEntity6 = level.createEntity('item');
	itemEntity6.item = Item.of('aquamirae:treasure_pouch')
	itemEntity6.setPos(x + 1, y, z);
	itemEntity6.spawn();
});

//Herobrine
ItemEvents.entityInteracted('tombstone:soul_receptacle', (event) => {
	const {
		player,
		hand,
		item,
		target,
		target: {
			x,
			y,
			z
		},
		server,
		level
	} = event;

	if (target.type != 'endofherobrine:herobrine') return
	player.swing(hand, true);
	item.count--
	server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
	target.discard()
	server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
	event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 6362E71906F370EC`)
	const itemEntity = level.createEntity('item');
	itemEntity.item = Item.of('kubejs:herobrine_note')
	itemEntity.setPos(x + 1, y, z);
	itemEntity.spawn();
});

//HideBehind
ItemEvents.entityInteracted('legendarysurvivaloverhaul:plaster', (event) => {
	const {
		player,
		hand,
		item,
		target,
		target: {
			x,
			y,
			z
		},
		server,
		level
	} = event;

	if (target.type() != "entity.whisperwoods.hidebehind") return
	player.swing(hand, true);
	item.count--
	server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
	target.discard()
	server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
	event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 2F5A3770228081FD`)
	const itemEntity = level.createEntity('item');
	itemEntity.item = Item.of('kubejs:hidebehind_note')
	itemEntity.setPos(x + 1, y, z);
	itemEntity.spawn();
});

//Maze Mother
ItemEvents.entityInteracted('abyssal_decor:white_pearl', (event) => {
	const {
		player,
		hand,
		item,
		target,
		target: {
			x,
			y,
			z
		},
		server,
		level
	} = event;

	if (target.type != 'aquamirae:maze_mother') return
	player.swing(hand, true);
	item.count--
	server.runCommandSilent(`particle heart ${target.x} ${target.y+1} ${target.z} 1 1 1 0 10 normal`)
	target.discard()
	server.runCommandSilent(`playsound minecraft:block.bubble_column.upwards_inside master @a ${target.x} ${target.y+1} ${target.z} 100000`)
	event.server.runCommandSilent(`/ftbquests change_progress ${event.player.name.string} complete 42FCF194A16D7C61`)
	const itemEntity = level.createEntity('item');
	itemEntity.item = Item.of('kubejs:maze_mother_note')
	itemEntity.setPos(x + 1, y, z);
	itemEntity.spawn();
});

//Don't summon Cornelia if her quest is completed.
ItemEvents.rightClicked('aquamirae:shell_horn', (event) => {
	const {
		player,
		hand,
		item,
		target,
		target: {
			x,
			y,
			z
		},
		server,
		level
	} = event;

	if (player.stages.has('cornelia_resolved')) {
		player.swing(hand, true);
		player.tell("The horn has no effect, and breaks as you use it. Her soul is at peace.")
		event.cancel()
	}
});