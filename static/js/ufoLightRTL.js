// load in kaboom variables from kaboom.js
import kaboom from './kaboom.js'
import { getRemainingCities } from './cities.js'; 

// declare variables
const upBound = 50;
const lowBound = 200;

// load in sprite
loadSprite("ufoLightRTL", "sprites/enemies/light_ufo_RTL.png");

const ufoLightRTL = () => {
    function spawnLightUfoRTL(){     
        var light_ufo;
        light_ufo = add([
            sprite("ufoLightRTL"),
            "light",
            pos(width() + 50, rand(lowBound, upBound)),
            scale(.17),
        ]);

        light_ufo.action(() => {
            light_ufo.move(-120, 0);
            if (light_ufo.pos.x < 0){
                destroy(light_ufo)
            }
        });
    }

    if (getRemainingCities() == 0){
        console.log("NO MORE CITIES")
        destroy(light_ufo)
        clearInterval(lightUfoUpdate)
    }

    var lightUfoUpdate = setInterval(spawnLightUfoRTL, 6000);
};

export default ufoLightRTL