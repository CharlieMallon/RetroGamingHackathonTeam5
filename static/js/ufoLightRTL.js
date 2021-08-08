// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare variables
const upBound = 50;
const lowBound = 200;
const rightLight = "ufoLightRTL"

// load in sprite
loadSprite("ufoLightRTL", "placeholders/light_ufo-rtl.png");

const ufoLightRTL = () => {
    // spawn light UFO
    loop(rand(1, 3), () => {
        add([
            sprite(rightLight),
            "rightLight",
            rightLight,
            pos(width() + 50, rand(lowBound, upBound)),
            scale(.4)
        ]);
    });

    action("rightLight", (o) => {
        o.move(-120, 0);
    });

    // collides("light", "missile", (e, m) => {
    //     destroy(e);
    //     destroy(m);
    // });
};

export default ufoLightRTL