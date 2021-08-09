// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare variables
const upBound = 50;
const lowBound = 200;
const rightLight = "ufoLightRTL"


// load in sprite
loadSprite("ufoLightRTL", "sprites/enemies/light_ufo_RTL.png");

const ufoLightRTL = () => {
    // spawn light UFO
    var light_ufo;

    loop(rand(4, 10), () => {
        light_ufo = add([
            sprite(rightLight),
            "light",
            pos(width() + 50, rand(lowBound, upBound)),
            scale(.17)
        ]);
    });

    light_ufo.action(() => {
        light_ufo.move(-120, 0);
    });
};

export default ufoLightRTL