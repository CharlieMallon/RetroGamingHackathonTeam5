const shooting = () => {
    // shooting specifications
    const MISSLE_SPEED = 300;
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
            m.move(0, -MISSLE_SPEED);
        });
	});    
}

export default shooting