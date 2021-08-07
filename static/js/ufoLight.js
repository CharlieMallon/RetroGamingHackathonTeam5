// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare varables
const upBound = 40;
const lowBound = height() - 12;

loadSprite("ufoLight", "placeholders/light_ufo.png");
const ufoLight = () => {
    // obj spawn
    loop(0.4, () => {
        const obj = choose([
            "ufoLight"
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

export default ufoLight