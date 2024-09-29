class smallPlant extends Phaser.Scene {
    
  constructor() {
      super("smallPlant");
    }
  
    preload() {
      this.load.image('bg','assets/images/summerBack.png');
      this.load.image('dp','assets/images/deadPlant.png');
      this.load.image('bug','assets/images/bugs.png');
      this.load.image('water','assets/images/wateringCan.png');
      this.load.image('fert','assets/images/fertilizerBag.png');
      // Load sad BGM
      // Load water, bug, fert audio

    }
    create() {

      this.add.image(game.config.width/2, game.config.height/2, 'bg');
      this.add.image(game.config.width/2, 600, 'dp');
      // add sad BGM
      
      let bug = this.add.image(game.config.width/2, 600, 'bug')
      .setInteractive()
      .on('pointerdown', () => {
          // bug audio
          bug.destroy();
      });

      let water = this.add.image(200, 750, 'water')
      .setInteractive()
      .on('pointerdown', () => {
          // water audio
          water.destroy();
      });

      let fert = this.add.image(450, 750, 'fert')
      .setInteractive()
      .on('pointerdown', () => {
          // fert audio
          fert.destroy();
      });

      this.add.text(20, 20, 'Day 2', { fontSize: 48 });
      
    }
  
    update() {
      
    }
        
    }
  