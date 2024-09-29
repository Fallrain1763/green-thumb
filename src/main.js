let config = {
	type: Phaser.CANVAS,
	scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1600,
        height: 900
    },
    backgroundColor: '#4488aa',
    pixelArt: true,
	scene: [ firstDay, secondDay, thirdDay, forthDay, otherDays,smallPlant, bigPlant, flowerPlant]
}

let game = new Phaser.Game(config);