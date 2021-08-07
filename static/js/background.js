// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// load background sprites (Main Game)
loadSprite('sky', 'placeholders/screen/sky_area.png');
loadSprite('ground', 'placeholders/screen/ground_area.png');
loadSprite('upgrade', 'placeholders/screen/upgrade_area.png');

const background = () => {
    layers(['bg', 'game', 'ui'], 'game');
    // all objs are bound to a scene
    add([sprite('sky'), layer('bg'), pos(0, 0), scale(1)]);
    add([sprite('ground'), layer('bg'), pos(0, 226), scale(1)]);
    add([sprite('upgrade'), layer('bg'), pos(0, 350)]);
};

export default background