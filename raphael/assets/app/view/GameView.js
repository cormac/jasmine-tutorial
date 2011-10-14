
/****************************************************************************
 * File Name:     GameView.js
 * Class Name:    GameView
 * Purpose:       Display the Game as a graph of scores - Remember the view 
 *                must have the el set to a containing item to allow events 
 *                contained within it to have their events handled
 * Creation Date: 11/09/11
 * Created By:    Cormac McGuire
 * 
 *
 * Updated By:
 * Update Date:
 * Description:
 ****************************************************************************/

  
(function( Game, document, window, undefined ){

  var totalTimeView = Backbone.View.extend( {
    tagName: 'div',
    el: $('holder'),
    //set the collection for this view to be our gameModel collection
    collection: Game.GameModelCollection,

    initialize: function( ){
    }, 

    setData: function(){
      console.log( 'data added' );  
    },
    events: {

    },
    hoverBar: function( e ) {

    },
    render: function(){
      this.paper = Raphael( 'holder', 760, 300 );
      this.paper.path("M30 100 L760 100");
      this.paper.path("M30 200 L760 200");
      this.paper.path("M30 300 L760 300");
      this.paper.path("M30 400 L760 400");
      this.paper.path("M105 100 L105 400");

    }


  });


  var myGameView = Backbone.View.extend({
    
    tagName: 'div',
    el: $('#container' ),
    initialize: function(){
      this.paper = Raphael( 'canvas', 320, 200 );
      console.log( Game.GameModelCollection );
    },

  events: {
    "click #add-input"  : "drawCircle",
    "hover circle"      : "hoverCircle",
  },
    drawCircle: function( e ){
      console.log( 'called' );
      // Creates circle at x = 50, y = 40, with radius 10
      var circle = this.paper.circle(50, 40, 10)
      .attr("fill", "#ff0") // Sets the fill attribute of the circle to red (#f00)
      .attr("stroke", "#0f0")// Sets the stroke attribute of the circle to white
      .data('i', 1000 );//set some data for the circle

    },

    hoverCircle: function( e ){
      console.log( 'hover' );
    },

    render: function(){
      this.drawCircle();
    }
  });

  Game.Views.GameView = new myGameView();
  Game.Views.TotalTimeView = new totalTimeView();

})(Ruabone.module( 'game' ), document, window, undefined )
