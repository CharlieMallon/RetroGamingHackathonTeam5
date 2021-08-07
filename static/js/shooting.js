import kaboom from './kaboom.js'

loadSprite('mark', 'sprites/mark.png');

const MISSLE_SPEED = 50;
const SHOOT_ORIGIN = vec2(250, 200);



const shooting = () => {
    const position = mouseClick(() => {
        var mPos = mousePos()
  
        const missile = add([
            sprite('mark'),
            pos(SHOOT_ORIGIN),
            origin('center'),
            'missile',
        ])
    
        // action(missile, (m) => {
        missile.action(() => {
            var move_vec = vec2((mPos.x - SHOOT_ORIGIN.x), (mPos.y - SHOOT_ORIGIN.y))
            var move_vec_mag = move_vec.len();
            var move_vec_norm = vec2(move_vec.x/move_vec_mag, move_vec.y/move_vec_mag)
        
            missile.move(vec2(move_vec_norm.x * MISSLE_SPEED, move_vec_norm.y * MISSLE_SPEED))
        })
	});    
}

export default shooting