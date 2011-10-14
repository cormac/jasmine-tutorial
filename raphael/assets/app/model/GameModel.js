/****************************************************************************
 * File Name: GameModel.js
 * Class Name: GameModel
 * Purpose: store data about the individual games: this data should be fed in 
 *          when the app starts
 * Creation Date: 05/09/11
 * Created By: Cormac McGuire
 * 
 *
 * Updated By:
 * Update Date:
 * Description:
 ****************************************************************************/
(function( Game, document, window, undefined ){
  
 //console.log( Backbone );
  myModel = Backbone.Model.extend({
    
    //Load initial data into our model here
    initialize: function(){
      
    },
    
    // Validate function - ensure all data is valid
    validate: function( attrs ){
      //console.log( attrs );
      //****   PREPARE THE VALIDATION ******************************
      var error = '';
      var sumScores = 0;
      var sumTimes = 0;
      //get the sum of the individual scores
      for ( score in attrs.levelScores ) {
        sumScores += attrs.levelScores[score];
      }

      //sum the individual times
      for ( time in attrs.levelTimes ) {
        sumTimes += attrs.levelTimes[time];
      }

      //****  DO THE VALIDATION ***********************************

      //verify that gamename is a string
      if( typeof( attrs.gamename) !== 'string' ){
        error += 'game name must be a string';
      }
      
      // validate that scores tally correctly
      if ( sumScores != attrs.gameScore ) {
        error += 'scores do not tally';  
      };
      
      //validate that the times tally
      if ( sumTimes!= attrs.gameTime ) {
        error += 'times do not tally';  
      };

      //fire the validation error if necessary
      if(error !== ''){
        //alert( error );//uncomment this line for debug
        console.log( error );
        return error;
      }

    }
  });

  timeModel = Backbone.Model.extend({
    
  });
  
  myModelCollection = Backbone.Collection.extend( {
    model : Game.GameModel,
  });


  Game.GameModelCollection = new myModelCollection();
  Game.GameModel = new myModel();
  Game.TimeModel = new timeModel();

})( Ruabone.module( 'game' ) );

