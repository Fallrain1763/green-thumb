class smallPlant extends Phaser.Scene {
    
  constructor() {
      super("smallPlant");
    }
  
    preload() {

    }
    create() {
      this.add.text(game.config.width/2, game.config.height/2, 'small')  
      
      this.input.on('pointerup', () => {
              
        this.scene.start("bigPlant")
      
      });            
      
      console.log("hello world");
    }
  
    update() {
      
    }
        
    }
  