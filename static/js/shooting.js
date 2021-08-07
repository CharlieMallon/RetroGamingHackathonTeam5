// Work in progress

const shooting = () => {
    // shooting specifications
    const MISSLE_SPEED = 1;
    // loads a sprite
    loadSprite('mark', 'sprites/mark.png');

    const position = mouseClick(() => {
        // gets the mouse position when the user clicks on the screen
	    const mpos = mousePos();
	    console.log(mpos);
        // adds a sprite when user clicks on the screen
        add([sprite('mark'), layer('ui'), pos(250, 200), "mark"]);
        // makes the sprite move
        const move = action('mark', (m) => {
            var x = mpos.x - 250;
            var y = mpos.y - 250;
            // var nrom = new Vec2(x, y)
            m.move(vec2(10, -10));
            // m.move(mpos.x, mpos.y);
        });
	});    
}

export default shooting