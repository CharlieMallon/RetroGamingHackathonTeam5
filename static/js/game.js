import shooting from "./shooting.js";
kaboom({
	...{
		fullscreen: false,
		width: 550,
		height: 400,
		scale: 2,
		clearColor: [0, 0, 0, 1],
		startScene: 'Start',
		version: '0.5.0',
	},
	global: true,
	plugins: [peditPlugin, asepritePlugin, kbmspritePlugin],
});

// load background sprites (Main Game)
loadSprite('sky', 'placeholders/screen/sky_area.png');
loadSprite('ground', 'placeholders/screen/ground_area.png');
loadSprite('upgrade', 'placeholders/screen/upgrade_area.png');

// Start Screen
scene('start', () => {
	// all objs are bound to a scene
	add([text('Luna Conflics', 32), pos(275, 100), origin('center')]);
	add([text('Insert Coin', 32), pos(275, 200), origin('center'), 'flashy']);
	add([text('press space to start', 12), pos(275, 300), origin('center')]);
	// all events are bound to a scene
	action('flashy', (f) => {
		f.color = rand(rgb(0, 0, 0), rgb(1, 1, 1));
	});
	keyPress('space', () => {
		go('main');
	});
});

// Main Game Scene
scene('main', (args = {}) => {
	// gets all the content from the shooting function in the shooting.js file
	shooting();
	layers(['bg', 'game', 'ui'], 'game');
	// all objs are bound to a scene
	add([sprite('sky'), layer('bg'), pos(0, 0), scale(1)]);
	add([sprite('ground'), layer('bg'), pos(0, 226), scale(1)]);
	add([sprite('upgrade'), layer('bg'), pos(0, 350)]);
	// all events are bound to a scene
});

// Start the game on loading
start('start');
