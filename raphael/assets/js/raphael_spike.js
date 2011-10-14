
$(document).ready( function(){

  var game = Ruabone.module('game');
  game.GameData =  { 
    gamename:     'test', 
    levelScores:  { 1:10 }, 
    levelTimes:   { 1:10 },
    gameScore:    10, 
    gameTime:     10  
  } ;


  //create the game score model and collection
  //TODO despike this
  game.GameModelCollection.add( game.GameData );
  console.log( game.GameModelCollection );
  

  var myc = game.Views.TotalTimeView;
  myc.render();
});

