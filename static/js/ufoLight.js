// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare variables
const upBound = 50;
const lowBound = 200;
const leftLight = "ufoLight"
const rightLight = "ufoLight"

// load in sprite
loadSprite("ufoLight", "placeholders/light_ufo.png");

const ufoLight = () => {
    // spawn light UFO
    loop(0.75, () => {
        add([
            sprite(leftLight),
            "leftLight",
            leftLight,
            pos(-50, rand(lowBound, upBound)),
            scale(.4)
        ]);
        add([
            sprite(rightLight),
            "rightLight",
            rightLight,
            pos(width() + 50, rand(lowBound, upBound)),
            scale(.4)
        ]);
    });

    action("leftLight", (o) => {
        o.move(120, 0);
    });

    action("rightLight", (o) => {
        o.move(-120, 0);
    });

    // collides("light", "missile", (e, m) => {
    //     destroy(e);
    //     destroy(m);
    // });
};

export default ufoLight