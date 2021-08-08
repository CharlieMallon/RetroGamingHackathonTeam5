import kaboom from './kaboom.js'

loadSprite("city", "placeholders/city.png");

const cities = () => {
    var cityPos = [
        vec2 (77, 290),
        vec2 (177, 290),
        vec2 (277, 290),
        vec2 (377, 290),
        vec2 (477, 290),
    ]

    cityPos.forEach(element => {
        add([
            sprite("city"),
            "city",
            pos(element),
            origin('center'),
            scale(.4),
        ]);
    }) 

}

export default cities