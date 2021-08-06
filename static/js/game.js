kaboom({
	...{
		fullscreen: false,
		width: 550,
		height: 400,
		scale: 2,
		startScene: 'main',
		version: '0.5.0',
	},
	global: true,
	plugins: [peditPlugin, asepritePlugin, kbmspritePlugin],
});

// load background sprites (Main Game)
loadSprite('sky', 'placeholders/screen/sky_area.png')
loadSprite('ground', 'placeholders/screen/ground_area.png')
loadSprite('upgrade', 'placeholders/screen/upgrade_area.png')

// Main Game Scene
scene('main', (args = {}) => {
    layers([
        'bg',
        'game',
        'ui'
    ], 'game')
    add([sprite('sky'), layer('bg'), pos(0, 0),scale(1)])
    add([sprite('ground'), layer('bg'), pos(0, 226),scale(1)])
    add([sprite('upgrade'), layer('bg'), pos(0, 350)])
});

// Start the game on loading
start('main');
