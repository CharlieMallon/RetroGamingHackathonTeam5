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
        var buttonSkin = 20


        var buttonAreaX = vec2(upgradePos[0].x - buttonSkin, upgradePos[0].x + buttonSkin);
        var buttonAreaY = vec2(upgradePos[0].y - buttonSkin, upgradePos[0].y + buttonSkin);
     
        if (mPos.x > buttonAreaX.x && mPos.x < buttonAreaX.y){
            if (mPos.y > buttonAreaY.x && mPos.y < buttonAreaY.y){
                console.log("Upgrade 0 clicked!")
            }
        }
    });    
}

export default upgrades