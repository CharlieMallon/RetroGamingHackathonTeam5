import { destroyCity } from './cities.js';

loadSprite('explosion', 'sprites/explosion.png')

// sound effects
loadSound("explode", 'music/explosion.wav')
loadSound("shooting", 'music/shooting.wav')

//Declare variables
const SHOOT_ORIGIN = vec2(275, 300);

var baseExplosionRadius
var explosionRadius
var missileSpeed
var shootFrequency
var millisLast
var millis
var salvagedParts
var explosionDuration
var testing

export function upgradeSpeed(n) {
    missileSpeed = n
}

export function upgradeExplosion(n) {
    explosionRadius = n
}

export function upgradeFrequency(n) {
    shootFrequency = n
}

export function getSalvagedParts() {
    return salvagedParts
}

export function removeSalvagedParts(n) {
    if (n < salvagedParts) {
        salvagedParts -= n;
    }
}

const shooting = () => {

    //base player stats
    baseExplosionRadius = 0.5;
    explosionRadius = baseExplosionRadius;
    missileSpeed = 150;
    shootFrequency = 1000;
    salvagedParts = 0;
    explosionDuration = 1000;

    //timekeeping variables
    millisLast = 0;
    millis = 0;

    //Test mode on or off, affects the ability to kill your own cities
    testing = false;

    const position = mouseClick(() => {
        
        millis = Date.now() - millisLast;
        if (millis > shootFrequency) {
            var mPos = mousePos()
            if (mPos.y < SHOOT_ORIGIN.y) {
                
                // explosion sound effect   
                const missleAudio = play("shooting");
                missleAudio.volume(0.2);
                missleAudio.speed(1);
                millisLast = Date.now()
                
                const missile = add([
                    pos(SHOOT_ORIGIN),
                    origin('center'),
                    'missile',
                ])

                missile.action(() => {
                    //calculate vector from shoot origin to mPos
                    var move_vec = vec2((mPos.x - SHOOT_ORIGIN.x), (mPos.y - SHOOT_ORIGIN.y))
                    var move_vec_mag = move_vec.len();
                    var move_vec_norm = vec2(move_vec.x / move_vec_mag, move_vec.y / move_vec_mag)

                    //move the missile from from shoot origin to mPos
                    missile.move(vec2(move_vec_norm.x * missileSpeed, move_vec_norm.y * missileSpeed))

                    //draw missile line
                    render(() => {
                        if (missile.pos.y > mPos.y) {
                            drawLine(SHOOT_ORIGIN, missile.pos)
                        }
                    });

                    //missile reaches mPos
                    if (missile.pos.y < mPos.y) {
                        //shake cam
                        camShake(2);

                        //instantiate explosion
                        const explosion = add([
                                sprite('explosion'),
                                pos(mPos),
                                origin('center'),
                                scale(explosionRadius),
                                'explosion'
                            ])
                        
                            // explosion sound effect   
                        const missileExplodeAudio = play("explode");
                        missileExplodeAudio.volume(0.2);
                        missileExplodeAudio.speed(0.2);

                        //Collision checks
                        explosion.collides('light', (l) => {
                            destroy(l);
                            salvagedParts++;
                        });

                        explosion.collides('bomb', (b) => {
                            destroy(b);
                        });

                        //testing
                        if (testing) {
                            explosion.collides('city', (c) => {
                                destroy(c);
                                destroyCity();
                            });
                        }

                        //destroy the missile object
                        destroy(missile)

                        //destroy the explosion after a delay
                        setTimeout(function() {
                            destroy(explosion);
                        }, explosionDuration);
                    }
                })
            }
        }
    });
}

export default shooting