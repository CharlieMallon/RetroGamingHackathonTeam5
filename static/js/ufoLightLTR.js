// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare variables
const upBound = 50;
const lowBound = 200;
const leftLight = "ufoLightLTR"

// load in sprite
loadSprite("ufoLightLTR", "sprites/enemies/light_ufo_LTR.png");

const ufoLightLTR = () => {
    var light_ufo;
    // spawn light UFO
    loop(rand(4, 10), () => {
        light_ufo = add([
            sprite(leftLight),
            "light",
            leftLight,
            pos(-50, rand(lowBound, upBound)),
            scale(.17)
        ]);
    });

    light_ufo.action(() => {
        light_ufo.move(120, 0);
    });
};

export default ufoLightLTR