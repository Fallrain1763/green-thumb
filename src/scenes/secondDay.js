class secondDay extends Phaser.Scene {
    
    constructor() {
        super("secondDay");
      }
    
      preload() {
        this.load.image('bg','assets/images/summerBack.png');
        this.load.image('bp','assets/images/bigPlant.png');
        this.load.image('bug','assets/images/bugs.png');
        this.load.image('water','assets/images/wateringCan.png');
        this.load.image('fert','assets/images/fertilizerBag.png');
        // Load happy BGM
        // Load water, bug, fert audio

      }
      create() {
        var isBug = false;
        var isWater = false;
        var isFert = false;
        
        this.add.image(game.config.width/2, game.config.height/2, 'bg');
        this.add.image(game.config.width/2, 600, 'bp');
        // add happy BGM
        
        let bug = this.add.image(game.config.width/2, 600, 'bug')
        .setInteractive()
        .on('pointerdown', () => {
            // bug audio
            isBug = true;
            bug.destroy();
        });

        let water = this.add.image(200, 750, 'water')
        .setInteractive()
        .on('pointerdown', () => {
            // water audio
            isWater = true;
            water.destroy();
        });

        let fert = this.add.image(450, 750, 'fert')
        .setInteractive()
        .on('pointerdown', () => {
            // fert audio
            isFert = true;
            fert.destroy();
        });

        this.add.text(20, 20, 'Day 2', { fontSize: 48 });
        
        this.add.text(1300, 750, 'Next Day', { fontSize: 48 })
        .setInteractive()
        .on('pointerdown', () => {
            if(isBug && isWater && isFert) {
                this.cameras.main.fade(1000, 0,0,0);
			    this.time.delayedCall(1000, () => this.scene.start('thirdDay'));
            }
            else {
                this.cameras.main.fade(1000, 0,0,0);
			    this.time.delayedCall(1000, () => this.scene.start('bigPlant'));
            }
        });  
        
      }
    
      update() {
        
      }
          
      }