import kaboom from './kaboom.js'

loadSprite('mark', 'sprites/mark.png');

const MISSLE_SPEED = 100;
const SHOOT_ORIGIN = vec2(275, 300);
var canShoot = true;
var shootRefresh = 2.0;


const shooting = () => {
    const position = mouseClick(() => {
        var mPos = mousePos()
        console.log(mPos)
        const missile = add([
            //sprite('mark'),
            pos(SHOOT_ORIGIN),
            origin('center'),
            'missile',
        ])

        missile.action(() => {
            var move_vec = vec2((mPos.x - SHOOT_ORIGIN.x), (mPos.y - SHOOT_ORIGIN.y))
            var move_vec_mag = move_vec.len();
            var move_vec_norm = vec2(move_vec.x/move_vec_mag, move_vec.y/move_vec_mag)
        
            missile.move(vec2(move_vec_norm.x * MISSLE_SPEED, move_vec_norm.y * MISSLE_SPEED))
          
            // render(() => {
            //     drawLine(SHOOT_ORIGIN, missile.pos)
            // });
            render(() => {
                if (missile.pos.y > mPos.y){
                    drawLine(SHOOT_ORIGIN, missile.pos)
                }
            });
            

            if (missile.pos.y < mPos.y){
                destroy(missile)

                // Instantiate explosion here
                // destroy the line
            }else{
                
            }
            console.log("running")
        })

        
	});    
}

export default shooting