
loadSprite("explosion_upgrade", "sprites/upgrades/explosion.png");
loadSprite("speed_upgrade", "sprites/upgrades/speed.png");

const upgrades = () => {
    var upgradePos = [
        vec2 (50, 375),
        vec2 (110, 375),
        vec2 (170, 375),
        vec2 (230, 375),
        vec2 (290, 375),
        vec2 (350, 375),
    ]

    // upgradePos.forEach(element => {
    //     add([
    //         sprite("explosion_upgrade"),
    //         "explosion_upgrade",
    //         pos(element),
    //         origin('center'),
    //         scale(.1),
           
    //     ]);
    // }) 

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
}

export default upgrades