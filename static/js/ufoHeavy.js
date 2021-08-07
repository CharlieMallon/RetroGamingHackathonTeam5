// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare varables
const upBound = 40;
const lowBound = height() - 12;

loadSprite("ufoHeavy", "placeholders/heavy_ufo.png");
const ufoHeavy = () => {
    // obj spawn
    loop(0.4, () => {
        const obj = choose([
            "ufoHeavy"
        ]);
        add([
            sprite(obj),
            "obj",
            obj,
            pos(width(), rand(lowBound, upBound)),
            scale(.5)
        ]);
    });
    action("obj", (o) => {
        o.move(-90 * 1, 0);
        if (o.pos.x <= -width()) {
            destroy(o);
        }
    });
};

export default ufoHeavy