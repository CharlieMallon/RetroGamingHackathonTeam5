// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare variables
const upBound = 50;
const lowBound = 100;
const light = "ufoLight"

loadSprite("ufoLight", "placeholders/light_ufo.png");
const ufoLight = () => {
    // spawn light UFO
    loop(0.75, () => {
        add([
            sprite(light),
            "light",
            light,
            pos(width(), rand(lowBound, upBound)),
            scale(.4)
        ]);
    });
    action("light", (o) => {
        o.move(-90 * 1, 0);
        if (o.pos.x <= -width()) {
            destroy(o);
        }
    });
};

export default ufoLight