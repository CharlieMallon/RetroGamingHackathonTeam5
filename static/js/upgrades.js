loadSprite("explosion_upgrade", "sprites/upgrades/explosion.png");
loadSprite("speed_upgrade", "sprites/upgrades/speed.png");
loadSprite("frequency_upgrade", "sprites/upgrades/frequency.png");

const upgrades = () => {
    var upgradePos = [
        vec2 (50, 375),
        vec2 (110, 375),
        vec2 (170, 375),
        vec2 (230, 375),
        vec2 (290, 375),
        vec2 (350, 375),
    ]

    add([
        sprite("explosion_upgrade"),
        "explosion_upgrade",
        pos(upgradePos[0]),
        origin('center'),
        scale(.1),

    ]);

    add([
        sprite("speed_upgrade"),
        "speed_upgrade",
        pos(upgradePos[1]),
        origin('center'),
        scale(.1),
       
    ]);

    add([
        sprite("frequency_upgrade"),
        "frequency_upgrade",
        pos(upgradePos[2]),
        origin('center'),
        scale(.1),
       
    ]);

    const upgradeClick = mouseClick(() => {
        var mPos = mousePos()
        console.log("button clicked at " + mPos.x)
         var buttonWidth = 10;
        var buttonHeight = 10;
        console.log("l " + upgradePos[0] - buttonWidth)
        console.log("3 " + upgradePos[0] + buttonWidth)
       
       
        if ((mPos.x > (upgradePos[0] - buttonWidth)) && (mPos.x < (upgradePos[0] + buttonWidth)) ){
            console.log("Upgrade 0 clicked!")
        }
    });    
}

export default upgrades