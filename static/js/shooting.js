const shooting = () => {
    const MISSLE_SPEED = 300;
    loadSprite('mark', 'sprites/mark.png');

    const position = mouseClick(() => {
	    const mpos = mousePos();
	    console.log(mpos);
        add([sprite('mark'), layer('ui'), pos(250, 200), "mark"]);
        const move = action('mark', (m) => {
            m.move(0, -MISSLE_SPEED);
        });
	});    
}

export default shooting