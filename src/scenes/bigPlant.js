class bigPlant extends Phaser.Scene {
    
    constructor() {
        super("bigPlant");
      }
    
      //Preloading image
      preload() {
        this.load.image('neuIcon', 'assets/neu.png');
      }
      create() {
        this.add.text(game.config.width/2, game.config.height/2, 'big')  
        this.add.image(500, 500, 'neuIcon')
        .setInteractive()
        .on('pointerup', () => {
              
            this.scene.start("flowerPlant")
          
          }); 
                                          
      }
    
      update() {
        
      }
          
      }
    