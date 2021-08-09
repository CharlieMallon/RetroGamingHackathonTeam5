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
    add([text('Lunar Conflicts', 32), pos(275, 100), origin('center')]);
    add([text('Insert Coin', 32), pos(275, 200), origin('center'), 'flashy']);
    add([text('press space to start', 12), pos(275, 300), origin('center')]);
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
    // adds the loose text with the players score
    add([text('Lunar Conflicts', 32), pos(275, 100), origin('center')]);
    add([
        text("Score: " + score, 24),
        origin("center"),
        pos(width() / 2, height() / 2),
    ]);
    // tells the player how to try again
    add([text('press space to play again', 12), pos(275, 300), origin('center')]);
    keyPress('space', () => {
        // I think that loaction re-load works better here as it re-sets all parameters.
        // it is effective tho not as 'clean' UX wise.
        
        // restartCities()
        // // Stops the music when scene changes
        // start.loop = false
        // start.stop()
        // go('main')
        location.reload()
    });
});

// Start the game on loading
start('start');