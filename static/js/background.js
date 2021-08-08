// load in kaboom variables from kaboom.js
import { getRemainingCities } from './cities.js';
import kaboom from './kaboom.js'
import shooting, { getSalvagedParts } from './shooting.js'
import salvagedParts from './shooting.js'

// load background sprites (Main Game)
loadSprite('sky', 'sprites/backgrounds/air.png');
loadSprite('ground', 'sprites/backgrounds/ground.png');
loadSprite('upgrade', 'sprites/backgrounds/upgrade_area.png');

// music
 loadSound("main", 'music/Heroic Intrusion.ogg')

// declare main (global) variables
const TIME_ELAPSED = 0

const background = () => {
    // layers of the game
    layers(['bg', 'game', 'ui'], 'game');
    // all objs are bound to a scene
    var game_scale = .69
    add([sprite('sky'), layer('bg'), pos(0, 0), scale(game_scale)]);
    add([sprite('ground'), layer('bg'), pos(0, 226), scale(game_scale)]);
    add([sprite('upgrade'), layer('bg'), pos(0, 340), scale(game_scale)]);
    
    // game music   
    const mainBackgroundAudio = play("main", { loop: true, });
    mainBackgroundAudio.volume(0.2);
    mainBackgroundAudio.speed(1);

    // scoreboard element
    const score = add([
        text('0'),
        color(rgb(0, 1, 0)),
        pos(width() - 150, height() - 30),
        layer('ui'),
        scale(1),
        {
            value: 0,
        }
    ]);

    score.action(() => {
        score.value = getSalvagedParts();
        score.text = "Upgrade points: " + getSalvagedParts();
    });

    // game timer element
    const timer = add([
        text(0),
        color(rgb(1, 1, 1)),
        pos(width() - 15, height() - 45),
        scale(1),
        origin("topright"),
        layer('ui'),
        {
            count: TIME_ELAPSED,
        },
    ]);

    // Start the game timer
    timer.action(() => {
        timer.count += dt();
        timer.value = timer.count.toFixed(0);
        timer.text = "Highscore: " + timer.count.toFixed(0);
        if (getRemainingCities() == 0) {
            // Stops the music when scene changes
            mainBackgroundAudio.loop = false
            mainBackgroundAudio.stop()
            go('lose', { score: timer.count.toFixed(0) })
        }
    });
};

export default background