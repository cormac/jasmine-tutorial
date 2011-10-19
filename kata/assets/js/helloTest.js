
/****************************************************************************
 * File Name: helloTest.js
 * Purpose: unit tests for the kata
 * Creation Date: 06/09/11
 * Created By: Cormac McGuire
 * 
 *
 * Updated By:
 * Update Date:
 * Description:
 ****************************************************************************/


describe("schema tests", function() {
  beforeEach  ( function(){
  });

  it ( "should say there are no arguments", function(){
    expect( function(){ MyApp(); } ).toThrow( new Error( 'no arguments supplied' ) );
  });

  it( 'should be a string of arguments', function(){
    expect( function(){ MyApp( 24 ); } ).toThrow( new Error( 'arguments should be a string' ) );
  });
  
  it( 'should be able to get a array from the string of arguments' , function(){
    var app = new MyApp( '-l -p 8080' );
    expect( app.getArray().length).toEqual( 3 );  
  });

  it( 'should have an integer after -p flag', function(){
    var args = "-p cdjsbcjsbc";
    expect( function(){ MyApp( args ); } ).toThrow( new Error( '-p flag must be followed by an integer' ) );
  });

});
