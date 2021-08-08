import { destroyCity } from "./cities.js";
import shooting, { getSalvagedParts, removeSalvagedParts, upgradeExplosion, upgradeFrequency, upgradeSpeed } from "./shooting.js"

loadSprite("explosion_upgrade", "sprites/upgrades/explosion.png");
loadSprite("speed_upgrade", "sprites/upgrades/speed.png");
loadSprite("frequency_upgrade", "sprites/upgrades/frequency.png");

loadSprite("explosion_grayed", "sprites/upgrades/explosion_grayed.png");
loadSprite("speed_grayed", "sprites/upgrades/speed_grayed.png");
loadSprite("frequency_grayed", "sprites/upgrades/frequency_grayed.png");

const upgrades = () => {

    var currentExplosionLevel = 0;
    var explosionStats = [0.8, 1.2, 1.5]

    var currentSpeedLevel = 0;
    var speedStats = [150, 180, 250]

    var currentFrequencyLevel = 0;
    var frequencyStats = [1200, 500, 200]

    var upgradePos = [
        vec2 (50, 375),
        vec2 (110, 375),
        vec2 (170, 375),
        vec2 (230, 375),
        vec2 (290, 375),
        vec2 (350, 375),
    ]

    var explosion_button = add([
        sprite("explosion_upgrade"),
        "explosion_upgrade",
        pos(upgradePos[0]),
        origin('center'),
        scale(.1),
    ]);

    var speed_button =  add([
        sprite("speed_upgrade"),
        "speed_upgrade",
        pos(upgradePos[1]),
        origin('center'),
        scale(.1),
       
    ]);

    var frequency_button =  add([
        sprite("frequency_upgrade"),
        "frequency_upgrade",
        pos(upgradePos[2]),
        origin('center'),
        scale(.1),
       
    ]);

    const upgradeClick = mouseClick(() => {
        
        var mPos = mousePos()
        var buttonSkin = 20

        for (var i = 0; i < 3; i++){
            
            var buttonAreaX = vec2(upgradePos[i].x - buttonSkin, upgradePos[i].x + buttonSkin);
            var buttonAreaY = vec2(upgradePos[i].y - buttonSkin, upgradePos[i].y + buttonSkin);
            console.log("X: " + mPos.x + " Y: " + mPos.y)
            if (mPos.x > buttonAreaX.x && mPos.x < buttonAreaX.y){
                console.log("x is ok")
                if (mPos.y > buttonAreaY.x && mPos.y < buttonAreaY.y){
                    console.log("y is ok")
                   var salvaged_parts = getSalvagedParts()
                    console.log("Upgrade " + i + " clicked!")
                    if (i==0){
                        if (currentExplosionLevel < explosionStats.length ){
                            console.log("not maxxed")
                            var upgradeCost = currentExplosionLevel + 1
                            if (salvaged_parts >= upgradeCost){
                                removeSalvagedParts(upgradeCost)
                                currentExplosionLevel ++;
                                upgradeExplosion(explosionStats[currentExplosionLevel-1])
                            }
                        }else{
                            destroy(explosion_button)
                            add([
                                sprite("explosion_grayed"),
                                pos(upgradePos[0]),
                                origin('center'),
                                scale(.1),
                            ]);
                            console.log("change sprite")
                        }
                    }
                    if (i==1){
                        if (currentSpeedLevel < speedStats.length){
                            var upgradeCost = currentSpeedLevel + 1
                            if (salvaged_parts >= upgradeCost){
                                removeSalvagedParts(upgradeCost)
                                currentSpeedLevel ++;
                                upgradeSpeed(speedStats[currentSpeedLevel-1])
                            }
                        }else{
                            destroy(speed_button)
                            add([
                                sprite("speed_grayed"),
                                pos(upgradePos[i]),
                                origin('center'),
                                scale(.1),
                            ]);
                        }
                    }
                    if (i==2){
                        if (currentFrequencyLevel < frequencyStats.length){
                            var upgradeCost = currentFrequencyLevel + 1
                            if (salvaged_parts >= upgradeCost){
                                removeSalvagedParts(upgradeCost)
                                currentFrequencyLevel ++;
                                upgradeFrequency(frequencyStats[currentFrequencyLevel-1])
                            }
                        }else{
                            destroy(frequency_button)
                            add([
                                sprite("frequency_grayed"),
                                pos(upgradePos[i]),
                                origin('center'),
                                scale(.1),
                            ]);
                        }
                    }
                }
            }
        }
    });    
}

export default upgrades