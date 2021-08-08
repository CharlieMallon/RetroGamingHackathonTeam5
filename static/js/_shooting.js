import kaboom from './kaboom.js'

// Work in progress
// const player_missile = add([
//     sprite("froggy"),
//     pos(100, 100),
//     body(),
//     {
//         dir: vec2(-1, 0),
//         SHOOT_ORIGIN: 240,
//         MISSLE_SPEED: 50,
//         SHOOT_ORIGIN: (250, 200),
//     },
// ]);

const MISSLE_SPEED = 50;
const SHOOT_ORIGIN = vec2(250, 200);

function shoot_missile(from, to) {
    add([
        sprite('mark'),
        layer('ui'),
        pos(SHOOT_ORIGIN.x, SHOOT_ORIGIN.y),
        'missile'
    ])
}

keyPress('space', () => {
    shoot_missile(SHOOT_ORIGIN, vec2(0, 0))
})


const shooting = () => {
    // shooting specifications

    // loads a sprite


    const position = mouseClick(() => {
        // gets the mouse position when the user clicks on the screen
        // var mpos = mousePos();

        // var move_vec = vec2((mpos.x - SHOOT_ORIGIN.x), (mpos.y - SHOOT_ORIGIN.y))
        // var move_vec_mag = move_vec.len();
        // var move_vec_norm = vec2(move_vec.x/move_vec_mag, move_vec.y/move_vec_mag)

        // add([sprite('mark'), layer('ui'), pos(SHOOT_ORIGIN.x, SHOOT_ORIGIN.y), "mark"]);

        // var move = action('mark', (m) => {
        //     console.log("MOVE");

        //     m.move(vec2(move_vec_norm.x * MISSLE_SPEED, move_vec_norm.y * MISSLE_SPEED));
        //     });
    });
}

export default shooting