// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'

// load background sprites (Main Game)
loadSprite('sky', 'sprites/backgrounds/air.png');
loadSprite('ground', 'sprites/backgrounds/ground.png');
loadSprite('upgrade', 'sprites/backgrounds/upgrade_area.png');

// declare main (global) variables
const TIME_REMAINING = 30

const background = () => {
    // layers of the game
    layers(['bg', 'game', 'ui'], 'game');
    // all objs are bound to a scene
    var game_scale = .69
    add([sprite('sky'), layer('bg'), pos(0, 0), scale(game_scale)]);
    add([sprite('ground'), layer('bg'), pos(0, 226), scale(game_scale)]);
    add([sprite('upgrade'), layer('bg'), pos(0, 340), scale(game_scale)]);

    // scoreboard element
    const score = add([
        text('0'),
        color(rgb(0, 1, 0)),
        pos(width() / 2 + 100, height() / 2),
        layer('ui'),
        scale(3),
        {
            value: 0,
        }
    ]);

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

    // Start the countdown timer
    countdown.action(() => {
        countdown.count -= dt();
        countdown.text = countdown.count.toFixed(2);
        if (countdown.count <= 0) {
            go('lose', { score: score.value })
        }
    });
};

export default background