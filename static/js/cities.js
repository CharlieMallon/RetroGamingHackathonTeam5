import kaboom from './kaboom.js'

loadSprite("city", "sprites/city.png");

var remainingCities = 5;

export function getRemainingCities(){
    return remainingCities;
}

export function destroyCity(){
    remainingCities --;
}

export function restartCities(){
    remainingCities = 5;  
    console.log("cities.js >> restartCities()")
}

const cities = () => {
    var cityPos = [
        vec2 (77, 305),
        vec2 (177, 305),
        vec2 (277, 305),
        vec2 (377, 305),
        vec2 (477, 305),
    ]

    cityPos.forEach(element => {
        add([
            sprite("city"),
            "city",
            pos(element),
            origin('bot'),
            scale(.15),
        ]);
    }) 
}

export default cities