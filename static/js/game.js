import shooting from "./shooting.js";
kaboom({
    ... {
        fullscreen: false,
        width: 550,
        height: 400,
        scale: 2,
        clearColor: [0, 0, 0, 1],
        startScene: 'Start',
        version: '0.5.0',
    },
    global: true,
    plugins: [peditPlugin, asepritePlugin, kbmspritePlugin],
});

// load background sprites (Main Game)
loadSprite('sky', 'placeholders/screen/sky_area.png');
loadSprite('ground', 'placeholders/screen/ground_area.png');
loadSprite('upgrade', 'placeholders/screen/upgrade_area.png');

// declare main (global) variables
const TIME_REMAINING = 30

// Start Screen
scene('start', () => {
    // all objs are bound to a scene
    add([text('Lunar Conflicts', 32), pos(275, 100), origin('center')]);
    add([text('Insert Coin', 32), pos(275, 200), origin('center'), 'flashy']);
    add([text('press space to start', 12), pos(275, 300), origin('center')]);
    // all events are bound to a scene
    action('flashy', (f) => {
        f.color = rand(rgb(0, 0, 0), rgb(1, 1, 1));
    });
    keyPress('space', () => {
        go('main');
    });
});

// Main Game Scene
scene('main', (args = {}) => {
    // gets all the content from the shooting function in the shooting.js file
    shooting();
    layers(['bg', 'game', 'ui'], 'game');
    // scoreboard element
    // const score = add([
    //     text('0'),
    //     color(rgb(0, 1, 0)),
    //     pos(width() - 64, 6),
    //     layer('ui'),
    //     scale(3),
    //     {
    //         value: 0,
    //     }
    // ])
    // countdown timer element
    const countdown = add([
        text('0'),
        color(rgb(1, 0, 0)),
        pos(width() / 2, height() / 2),
        scale(2),
        layer('ui'),
        {
            count: TIME_REMAINING,
        },
    ]);
    // all objs are bound to a scene
    add([sprite('sky'), layer('bg'), pos(0, 0), scale(1)]);
    add([sprite('ground'), layer('bg'), pos(0, 226), scale(1)]);
    add([sprite('upgrade'), layer('bg'), pos(0, 350)]);
    // all events are bound to a scene

    // Start the countdown timer
    countdown.action(() => {
        countdown.count -= dt();
        countdown.text = countdown.count.toFixed(2);
        // if (countdown.count <= 0) {
        //     go('lose', { score: score.value })
        // }
    });
});

// Start the game on loading
start('start');