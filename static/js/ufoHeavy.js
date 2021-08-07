// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// declare variables
const upBound = 5;
const lowBound = 30;
const heavy = "ufoHeavy"

loadSprite("ufoHeavy", "placeholders/heavy_ufo.png");
const ufoHeavy = () => {
    // spawn heavy UFO
    loop(1, () => {
        add([
            sprite(heavy),
            "heavy",
            heavy,
            pos(width(), rand(lowBound, upBound)),
            scale(.4)
        ]);
    });
    action("heavy", (o) => {
        o.move(-90 * 1, 0);
        if (o.pos.x <= -width()) {
            destroy(o);
        }
    });
};

export default ufoHeavy