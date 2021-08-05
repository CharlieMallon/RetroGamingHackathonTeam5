// initialize kaboom context
const k = kaboom();

// add a text of size 32 at position (100, 100)
k.add([
    k.text("oh hi", 32),
    k.pos(100, 100),
]);

// or
// k.addText("oh hi", 32, { pos: k.vec2(100, 100) });