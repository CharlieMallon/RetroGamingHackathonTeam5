// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// load background sprites (Main Game)
loadSprite('sky', 'sprites/backgrounds/air.png');
loadSprite('ground', 'sprites/backgrounds/ground.png');
loadSprite('upgrade', 'sprites/backgrounds/upgrade_area.png');

const background = () => {
    layers(['bg', 'game', 'ui'], 'game');
    // all objs are bound to a scene
    var game_scale = 1
    add([sprite('sky'), layer('bg'), pos(0, 0), scale(game_scale)]);
    add([sprite('ground'), layer('bg'), pos(0, 226), scale(game_scale)]);
    add([sprite('upgrade'), layer('bg'), pos(0, 350), scale(game_scale)]);
};

export default background