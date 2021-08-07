// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'
// load in game functions
import shooting from "./shooting.js"
import ufoHeavy from './ufoHeavy.js'
import ufoLight from './ufoLight.js'
import background from './background.js'

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
    // gets all the content from the game functions
    background();
    shooting();
    ufoHeavy();
    ufoLight();
});

scene("lose", ({ score }) => {
    add([text('Lunar Conflicts', 32), pos(275, 100), origin('center')]);
	add([
		text("Score: " + score, 24),
		origin("center"),
		pos(width() / 2, height() / 2),
	]);
    add([text('press space to restart', 12), pos(275, 300), origin('center')]);
    keyPress('space', () => {
        go('main');
    });
});

// Start the game on loading
start('start');