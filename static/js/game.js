// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'
// load in game functions
import shooting from "./shooting.js"
import ufoHeavy from './ufoHeavy.js'
import ufoLightLTR from './ufoLightLTR.js'
import ufoLightRTL from './ufoLightRTL.js'
import background from './background.js'
import upgrades from './upgrades.js'
import cities, { getRemainingCities, restartCities } from './cities.js'

// music
loadSound("menu", 'music/Never Surrender.ogg')
loadSound("Lose", 'music/Major Loss.ogg')

// Start Screen
scene('start', () => {
    // all objs are bound to a scene
    add([text('Lunar Conflicts', 32), pos(275, 50), origin('center')]);
    add([text('Insert Coin', 32), pos(275, 150), origin('center'), 'flashy']);
    add([text("Shoot small UFO's to salvage parts for upgrades and", 9), pos(275, 240), origin('center')]);
    add([text("blast the missiles from the sky using your mouse!", 9), pos(275, 260), origin('center')]);
    add([text("How long can you defend you cities?", 9), pos(275, 280), origin('center')]);
    add([text('press space to start', 12), pos(275, 350), origin('center')]);
    // game main menu music   
    const start = play("menu", { loop: true, });
    start.volume(0.2);
    start.speed(1);
    // all events are bound to a scene
    action('flashy', (f) => {
        f.color = rand(rgb(0, 0, 0), rgb(1, 1, 1));
    });
    keyPress('space', () => {
        start.stop()
        go('main');

    });
});

// Main Game Scene
scene('main', () => {
    // gets all the content from the game functions
    background();
    shooting();
    ufoHeavy();
    ufoLightLTR();
    ufoLightRTL();
    cities();
    upgrades();
});

scene("lose", ({ score, music }) => {
    // Lose menu music
    const loseScreenAudio = play("Lose", { loop: true, });
    loseScreenAudio.volume(0.2);
    loseScreenAudio.speed(1);
    // set game scale
    var game_scale = .69
    // add background from game
    add([sprite('sky'), layer('bg'), pos(0, 0), scale(game_scale)]);
    add([sprite('ground'), layer('bg'), pos(0, 226), scale(game_scale)]);
    add([sprite('upgrade'), layer('bg'), pos(0, 340), scale(game_scale)]);
    // adds the loose text with the players score
    add([text('Game Over', 32), pos(275, 100), origin('center')]);
    add([
        text("Score: " + score, 24),
        origin("center"),
        pos(width() / 2, height() / 2),
    ]);
    // tells the player how to try again
    add([text('press space to return to menu', 12), pos(275, 300), origin('center')]);
    keyPress('space', () => {
        location.reload()
    }); 
});

// Start the game on loading
start('start');