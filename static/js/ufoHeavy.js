// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'
import { getRemainingCities } from './cities.js'
import { destroyCity } from './cities.js';

// declare variables
const upBound = 5;
const lowBound = 30;
const heavy = "ufoHeavy";
const DROP_ORIGIN = vec2(275, 0);
const BOMB_SPEED = 50;

// load in sprite
loadSprite("ufoHeavy", "placeholders/heavy_ufo.png");
loadSprite("explosion", "sprites/explosion.png");
loadSprite("mark", "sprites/mark.png");

var ufoPos = [
    vec2 (77, 10),
    vec2 (177, 10),
    vec2 (277, 10),
    vec2 (377, 10),
    vec2 (477, 10),
]

const ufoHeavy = () => {
    // spawn heavy UFO
    var randInt = Math.floor(Math.random() * 5)
    console.log(randInt)
    ufoPos.forEach(element => {
        add([
            sprite("ufoHeavy"),
            "ufoHeavy",
            pos(element),
            origin('center'),
            scale(.4),
        ]);
    })


// spawn bomb - why don't you work?
    const bomb = add([
        pos(ufoPos[randInt]),
        origin('center'),
        "bomb",
        
    ])

    bomb.action(() => {
   
        bomb.move(vec2(0, BOMB_SPEED))
        render(() => {
            if (bomb.pos.y < 280){
                drawLine(ufoPos[randInt], bomb.pos)
            }
        });
        if (bomb.pos.y > 280) {
            
            const explosion = add([
                sprite('explosion'),
                pos(bomb.pos),
                origin('center'),
                scale(1),
                'explosion'
            ])
            explosion.collides('city', (c) => {
                destroy(c);
                destroyCity();
            });
            
            destroy(bomb)
            setTimeout(function(){ 
                destroy(explosion); 
            }, 500);
        }
   
    });
}
export default ufoHeavy