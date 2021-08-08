// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'
import { getRemainingCities } from './cities.js'
import { destroyCity } from './cities.js';
import { getCityPositions } from './cities.js';

// load in sprite
loadSprite("ufoHeavy", "sprites/enemies/heavy_ufo.png");
loadSprite("explosion", "sprites/explosion.png");

// sound effects
loadSound("explode", 'music/explosion2.wav')
loadSound("shooting", 'music/shooting.wav')

var ufoPos = [
    vec2 (77, 25),
    vec2 (177, 25),
    vec2 (277, 25),
    vec2 (377, 25),
    vec2 (477, 25),
]

var enemyShootingDelay

const ufoHeavy = () => {
    // declare variables
    const upBound = 5;
    const lowBound = 30;
    const heavy = "ufoHeavy";
    const DROP_ORIGIN = vec2(275, 0);
    const BOMB_SPEED = 60;

    // spawn heavy UFO
    var randInt = 0;
    var previousRanInt = 0;
    ufoPos.forEach(element => {
        add([
            sprite("ufoHeavy"),
            "ufoHeavy",
            pos(element),
            origin('center'),
            scale(.17),
        ]);
    })

    var minDelay = 2000;
    enemyShootingDelay = 2000;

    setTimeout(function(){
        minDelay = 1000
    }, 10000)

    function ufoShooting(){     
        enemyShootingDelay = (Math.floor(Math.random() * 4) * 1000) + minDelay;
        randInt = Math.floor(Math.random() * 5)
        var randomCity= Math.floor(Math.random() * 5)
        var thisUfoPos = vec2(ufoPos[randInt])
        var targetCityPos = vec2(getCityPositions()[randomCity])
        console.log(targetCityPos.x)
        const bomb = add([
            pos(ufoPos[randInt]),
            origin('center'),
            "bomb",
            sprite("ufoHeavy"),
            scale(0.001)         
        ])
   
        console.log("ufoHeavy.js >> ufoHeavy >> Instantiated a bomb")
        const shooting = play("shooting");
        shooting.volume(1)
        shooting.speed(0.5)
    
        bomb.action(() => {

            var move_vec = vec2((targetCityPos.x - thisUfoPos.x), (targetCityPos.y - thisUfoPos.y))
            var move_vec_mag = move_vec.len();
            var move_vec_norm = vec2(move_vec.x/move_vec_mag, move_vec.y/move_vec_mag)

            bomb.move(vec2(move_vec_norm.x * BOMB_SPEED, move_vec_norm.y * BOMB_SPEED))
            render(() => {
                if (bomb.exists() && bomb.pos.y < 280 && getRemainingCities() != 0){
                    drawLine(bomb.pos, thisUfoPos)
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
                    // explosion sound effect   
                    camShake(5);
                    const explode = play("explode")
                    explode.volume(1)
                    explode.speed(0.5)
                    destroy(c)
                    destroyCity()
                });
                
                destroy(bomb)
                setTimeout(function(){ 
                    destroy(explosion)
                }, 500)
            }
    
        });
        if (getRemainingCities() == 0){
            console.log("NO MORE CITIES")
            destroy(bomb)
            shooting.stop()
            clearInterval(ufoShootingUpdate)
        }
    }

    var ufoShootingUpdate = setInterval(ufoShooting, enemyShootingDelay)


  
}
export default ufoHeavy