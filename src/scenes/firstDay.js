class firstDay extends Phaser.Scene {
    
    constructor() {
        super("firstDay");
      }
    
      preload() {
        this.load.image('bg','assets/images/summerBack.png');
        this.load.image('sp','assets/images/smallPlant.png');
        this.load.image('bug','assets/images/bugs.png');
        this.load.image('water','assets/images/wateringCan.png');
        this.load.image('fert','assets/images/fertilizerBag.png');
        // Load happy BGM
        this.load.audio('BGM', 'sfx/ChillBGM1.wav');
        // Load water, bug, fert audio
        this.load.audio('watering', 'sfx/Watering3.mp3')
        this.load.audio('bugSquash', 'sfx/BugSquash.wav')
        this.load.audio('digDirt', 'sfx/Dirt3.ogg')
        
      }
      create() {
        var isBug = false;
        var isWater = false;
        var isFert = false;
        
        this.add.image(game.config.width/2, game.config.height/2, 'bg');
        this.add.image(game.config.width/2, 600, 'sp');
        // Add happy BGM
        this.music = this.sound.add('BGM', {loop: true});
        this.music.play();
        
        let bug = this.add.image(game.config.width/2, 600, 'bug')
        .setInteractive()
        .on('pointerdown', () => {
            // bug audio
            const bugSquash = this.sound.add('bugSquash');
            bugSquash.play();
            isBug = true;
            bug.destroy();
        });

        let water = this.add.image(200, 750, 'water')
        .setInteractive()
        .on('pointerdown', () => {
            // water audio
            const watering = this.sound.add('watering');
            watering.play();
            isWater = true;
            water.destroy();
        });

        let fert = this.add.image(450, 750, 'fert')
        .setInteractive()
        .on('pointerdown', () => {
            // fert audio
            const digDirt = this.sound.add('digDirt');
            digDirt.play();
            isFert = true;
            fert.destroy();
        });

        this.add.text(20, 20, 'Day 1', { fontSize: 48 });
        
        this.add.text(1300, 750, 'Next Day', { fontSize: 48 })
        .setInteractive()
        .on('pointerdown', () => {
            if(isBug && isWater && isFert) {
                this.cameras.main.fade(1000, 0,0,0);
			    this.time.delayedCall(1000, () => this.scene.start('secondDay'));
            }
            else {
                this.cameras.main.fade(1000, 0,0,0);
			    this.time.delayedCall(1000, () => this.scene.start('smallPlant'));
            }
        });  
        
      }
    
      update() {
        
      }
          
      }