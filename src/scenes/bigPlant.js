class bigPlant extends Phaser.Scene {
    
    constructor() {
        super("bigPlant");
      }
    
      //Preloading image
      preload() {

      }
      create() {
        this.add.text(game.config.width/2, game.config.height/2, 'bigDead')  
                                          
      }
    
      update() {
        
      }
          
      }
    