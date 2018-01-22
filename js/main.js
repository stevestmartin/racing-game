var game;

window.onload = function(){
  if(screen.width>900){
    game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
  }
  else{
    game = new
    Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
  }
  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
};
