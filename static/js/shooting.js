import kaboom from './kaboom.js'

loadSprite('mark', 'sprites/mark.png');
loadSprite('explosion', 'sprites/explosion.png')

const MISSLE_SPEED = 150;
const SHOOT_ORIGIN = vec2(275, 300);
var shootRefresh = 1000;

var millisLast = 0;
var millis = 0;

var salvagedParts = 0;
var explosionDuration = 1000;

export function getSalvagedParts(){
    return salvagedParts
}

export function removeSalvagedParts(n){
    if (n < salvagedParts){
        salvagedParts -= n;
    }
}

const shooting = () => {
    const position = mouseClick(() => {
        millis = Date.now() - millisLast;
        if (millis > shootRefresh){
            millisLast = Date.now()
            var mPos = mousePos()
            const missile = add([
                pos(SHOOT_ORIGIN),
                origin('center'),
                'missile',
            ])
            
            missile.action(() => {
                //calculate vector from shoot origin to mPos
                var move_vec = vec2((mPos.x - SHOOT_ORIGIN.x), (mPos.y - SHOOT_ORIGIN.y))
                var move_vec_mag = move_vec.len();
                var move_vec_norm = vec2(move_vec.x/move_vec_mag, move_vec.y/move_vec_mag)
                
                //move the missile from from shoot origin to mPos
                missile.move(vec2(move_vec_norm.x * MISSLE_SPEED, move_vec_norm.y * MISSLE_SPEED))
                
                //draw missile line
                render(() => {
                    if (missile.pos.y > mPos.y){
                        drawLine(SHOOT_ORIGIN, missile.pos)
                    }
                });

                //When missile goes past click pos
                if (missile.pos.y < mPos.y){
                    //shake cam
                    camShake(2);

                    //instantiate explosion
                    const explosion = add([
                        sprite('explosion'),
                        pos(mPos),
                        origin('center'),
                        'explosion'
                    ])

                    explosion.collides('light', (l) => {
                        destroy(l);
                        salvagedParts++;
                        console.log("shooting.js >> salvagedParts: " + salvagedParts)
                    });

                    //destroy the missile object
                    destroy(missile)

                    //destroy the explosion after a delay
                    setTimeout(function(){ 
                        destroy(explosion); 
                    }, explosionDuration);
                }
            })

    }else{
        console.log("cant shoot")
    }
	});    
}

export default shooting