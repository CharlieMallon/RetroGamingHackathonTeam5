import kaboom from './kaboom.js'

loadSprite("city", "placeholders/city.png");

const cities = () => {
    var cityPos = [
        vec2 (60, 270),
        vec2 (160, 270),
        vec2 (260, 270),
        vec2 (360, 270),
        vec2 (460, 270),
    ]

    cityPos.forEach(element => {
        add([
            sprite("city"),
            "city",
            pos(element),
            scale(.4),
        ]);
    }) 

}

export default cities