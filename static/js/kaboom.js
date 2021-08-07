export const k = kaboom({
    ... {
        fullscreen: false,
        width: 550,
        height: 410,
        scale: 2,
        clearColor: [0, 0, 0, 1],
        startScene: 'Start',
        version: '0.5.1',
    },
    global: true,
    plugins: [peditPlugin, asepritePlugin, kbmspritePlugin],
})

export default k