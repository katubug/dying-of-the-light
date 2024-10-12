PlayerEvents.tick(event => {
	const {
		player
	} = event
	if (player.age % 20 != 0) return
	if (player.mainHandItem.id == 'minecraft:lantern' || player.mainHandItem.id == 'hardcore_torches:lit_lantern') {
		if (player.stages.has('safety_item')) return;
		player.stages.add('safety_item')
		event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} safety_item`)
	}
	if (player.mainHandItem.id != 'minecraft:lantern' && player.mainHandItem.id != 'hardcore_torches:lit_lantern') {
		if (!player.stages.has('safety_item')) return;
		player.stages.remove('safety_item')
		event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} safety_item`)
	}

	if (player.getHealth() < 10) {
		if (player.stages.has('low_health')) return;
		player.stages.add('low_health')
		player.tell("You're bleeding - monsters can smell the blood!")
		event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} low_health`)
	}
	if (player.getHealth() >= 10) {
		if (!player.stages.has('low_health')) return;
		player.stages.remove('low_health')
		event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} low_health`)
	}
})

PlayerEvents.tick(event => {
	const {
		player
	} = event
	if (player.age % 20 != 0) return

	if (player.mainHandItem.id != 'exposure:camera') {
		{
			if (player.stages.has('camera')) {
				player.stages.remove('camera')
				event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} camera`)
			}
		}
	}
	if (player.mainHandItem.id == 'exposure:camera'){
	if (!player.mainHandItem.nbt) return;
	if (player.mainHandItem.nbt.Active == 0) {
		{
			if (player.stages.has('camera')) {
				player.stages.remove('camera')
				event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} camera`)
			}
		}
	}
	}

	if (player.mainHandItem.id == 'exposure:camera') {
		if (!player.mainHandItem.nbt.Film) return;
		let film = player.mainHandItem.nbt.Film.Count
		let Active = player.mainHandItem.nbt.Active

		//If player has no film, but has safety, remove them from safety.
		if (film < 1) {
			{
				if (player.stages.has('camera')) {
					player.stages.remove('camera')
					player.tell("The camera can't protect you without film!")
					event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} camera`)
				}
			}
		}
		//If camera has film, but has taken no photos...
		if (!player.mainHandItem.nbt.Film.tag) {
			//If the camera is active
			if (Active >= 1) {
				//If the player is already safe, leave them be
				if (player.stages.has('camera')) return;
				//Otherwise, add them to safety.
				player.stages.add('camera')
				console.log("Player is safe.")
				event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} camera`)
			}
		}
		//If the camera has film, and has taken photos, check whether it has used all charges...
		if (player.mainHandItem.nbt.Film.tag && player.mainHandItem.nbt.Film.tag.Frames) {
			let finalFrame = player.mainHandItem.nbt.Film.tag.Frames[15]
			//If the player has photos left...
			if (finalFrame == null) {
				//And if the camera is active:
				if (Active >= 1) {
					//If the player is already safe, leave them be
					if (player.stages.has('camera')) return;
					//Otherwise, add them to safety.
					player.stages.add('camera')
					console.log("Player is safe.")
					event.server.runCommandSilent(`apathy set-admin join ${event.player.name.string} camera`)
				}
			}
			//If the camera has used all shots, but player has safety, remove them from safety.
			if (finalFrame) {
				if (player.stages.has('camera')) {
					player.stages.remove('camera')
					player.tell("The camera can't protect you without film!")
					event.server.runCommandSilent(`apathy set-admin part ${event.player.name.string} camera`)
				}
			}
		}
	}
})