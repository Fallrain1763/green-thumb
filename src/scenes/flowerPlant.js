class flowerPlant extends Phaser.Scene {
    
    constructor() {
        super("flowerPlant");
      }
    
      preload() {
        this.load.image('neuIcon', 'assets/neu.png');
      }
      create() {
        this.add.text(game.config.width/2, game.config.height/2, 'f')  
                             
                                          
      }
    
      update() {
        
      }
          
      }
    