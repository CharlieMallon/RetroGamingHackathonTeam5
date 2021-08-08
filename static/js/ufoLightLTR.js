// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare variables
const upBound = 50;
const lowBound = 200;
const leftLight = "ufoLightLTR"

// load in sprite
loadSprite("ufoLightLTR", "placeholders/light_ufo-ltr.png");

const ufoLightLTR = () => {
    // spawn light UFO
    loop(rand(1, 3), () => {
        add([
            sprite(leftLight),
            "leftLight",
            leftLight,
            pos(-50, rand(lowBound, upBound)),
            scale(.4)
        ]);
    });

    action("leftLight", (o) => {
        o.move(120, 0);
    });

    // collides("light", "missile", (e, m) => {
    //     destroy(e);
    //     destroy(m);
    // });
};

export default ufoLightLTR