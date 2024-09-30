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
      // Load water, bug, fert audio
      this.load.audio('watering', 'sfx/Watering3.mp3')
      this.load.audio('bugSquash', 'sfx/BugSquash.wav')
      this.load.audio('digDirt', 'sfx/Dirt3.ogg')

    }
    create() {

      this.add.image(game.config.width/2, game.config.height/2, 'bg');
      this.add.image(game.config.width/2, 600, 'dp');
      //remove music
      this.sound.removeByKey('BGM');

      var days = 2;
      
      let bug = this.add.image(game.config.width/2, 600, 'bug')
      .setInteractive()
      .on('pointerdown', () => {
          // bug audio
          const bugSquash = this.sound.add('bugSquash');
          bugSquash.play();
          bug.setVisible(false);
      });

      let water = this.add.image(200, 750, 'water')
      .setInteractive()
      .on('pointerdown', () => {
          // water audio
          const watering = this.sound.add('watering');
          watering.play();
          water.setVisible(false);
      });

      let fert = this.add.image(450, 750, 'fert')
      .setInteractive()
      .on('pointerdown', () => {
          // fert audio
          const digDirt = this.sound.add('digDirt');
          digDirt.play();
          fert.setVisible(false);
      });
      
      let t = this.add.text(20, 20, 'Day ' + days, { fontSize: 48 });
        
        this.add.text(1300, 750, 'Next Day', { fontSize: 48 })
        .setInteractive()
        .on('pointerdown', () => {
            bug.setVisible(true);
            water.setVisible(true);
            fert.setVisible(true);
            days += 1;
            t.setText('Day ' + days);
            this.cameras.main.fadeIn(2500);
        });
    }
  
    update() {
      
    }
        
    }
  