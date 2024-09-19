let config = {
	type: Phaser.CANVAS,
	scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1600,
        height: 900
    },
    backgroundColor: '#4488aa',
    pixelArt: true,
	scene: [smallPlant, bigPlant]
}

let game = new Phaser.Game(config);