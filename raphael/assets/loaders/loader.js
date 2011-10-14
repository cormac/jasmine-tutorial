$LAB
.setOptions( { UseLocalXHR:false, CacheBust:true } )
.script( '../assets/js/jasmine/lib/jasmine-1.1.0/jasmine.js' )
.script( 'assets/underscore/underscore.js' )
.script( 'assets/JSON-js/json2.js' )
.script( 'assets/jquery/jquery-1.4.4.js' )
.script( 'assets/raphael/raphael.js' ).wait( function(){
    $LAB
    .script( 'assets/backbone/backbone.js' )
    .wait ( function(){//Load model classes
      $LAB
      .script( 'assets/app/model/GameModel.js' )
      .script( 'assets/app/model/UserModel.js' )
      .script( 'assets/app/view/GameView.js' )
      .wait( function(){
        $LAB.script( 'assets/js/raphael_spike.js' );
      })
    })
    
});

/**
 * Create the global variable to hold my application
 *
 */
var Ruabone = {
  module: function(){
    
    //internal module cache
    var modules = {};

    return function( name ) {
      // if module exists, return it
      if( modules[name] ) {
        return modules[name];
      }

      //Create a module and save it under this name
      return modules[name] = { Views: {} };
    };

  }()

  
};
