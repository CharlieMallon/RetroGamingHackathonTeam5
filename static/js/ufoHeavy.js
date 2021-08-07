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
            pos(width(), height() / 2),
        ]);
    });

    action("obj", (o) => {
        o.move(-90 * 1, 0);
        if (o.pos.x <= -width()) {
            destroy(o);
        }
    });
};