// Work in progress

const shooting = () => {
    // shooting specifications
    const MISSLE_SPEED = 50;
    const SHOOT_ORIGIN = vec2(250, 200)
    // loads a sprite
    loadSprite('mark', 'sprites/mark.png');

    const position = mouseClick(() => {
        // gets the mouse position when the user clicks on the screen
	    const mpos = mousePos();
	    console.log(mpos);
        var move_vec = vec2((mpos.x - SHOOT_ORIGIN.x), (mpos.y - SHOOT_ORIGIN.y))

            var move_vec_mag = move_vec.len();
           
            var move_vec_norm = vec2(move_vec.x/move_vec_mag, move_vec.y/move_vec_mag)
        // adds a sprite when user clicks on the screen
        add([sprite('mark'), layer('ui'), pos(SHOOT_ORIGIN.x, SHOOT_ORIGIN.y), "mark"]);
        // makes the sprite move
        const move = action('mark', (m) => {
            console.log("MOVE");
            
            
            // var x = mpos.x - 250;
            // var y = mpos.y - 250;
            // // var nrom = new Vec2(x, y)
            // m.move(vec2(10, -10));
            // // m.move(mpos.x, mpos.y);
            
            

            
            console.log("Magnitude: " + move_vec_mag + " | Normalized vec2.x: " + move_vec_norm.x + "  vec2.y:" );
  

             m.move(vec2(move_vec_norm.x * MISSLE_SPEED, move_vec_norm.y * MISSLE_SPEED));


        });
	});    
}

export default shooting