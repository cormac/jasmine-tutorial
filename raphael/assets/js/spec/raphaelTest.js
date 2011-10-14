/****************************************************************************
 * File Name: raphaelTest.js
 * Purpose: unit tests for the model classes
 * Creation Date: 06/09/11
 * Created By: Cormac McGuire
 * 
 *
 * Updated By:
 * Update Date:
 * Description:
 ****************************************************************************/


describe("Game model tests", function() {
  var testGameModel;
  var data;
  // create a model to play with
  beforeEach( function(){
    var game = Ruabone.module('game');
    data = { 
             gamename:    'Test Game',
             levelScores: { 1:10, 2:15, 3:20, 4:10   },
             levelTimes:  { 1:90, 2:110, 3:130, 4:95 },
             gameScore:   55,
             gameTime:    425
           };
    testGameModel = game.GameModel;
  });

  it("should receive a string for the game name", function() {
    data.gamename = 100;
    testGameModel.set( data );
    expect( testGameModel.get( 'gamename' ) ).toBeUndefined();
  });

  it("should have a game score that equals the total for all levels", function(){
    data.gameScore = 100;
    testGameModel.set( data );
    expect( testGameModel.get( 'gameScore' ) ).toBeUndefined();
  });

  it("should have a game time that equals the total for all levels", function(){
    data.gameTime = 100;
    testGameModel.set( data );
    expect( testGameModel.get( 'gameTime' ) ).toBeUndefined();
  });

  it("game time should be a number", function () {
    data.gameScore = 'Stringy wingy';
    testGameModel.set( data );
    expect( testGameModel.get( 'gameScore' ) ).toBeUndefined();
  });

  it("game time should be a number", function () {
    data.gameTime = 'Stringy wingy';
    testGameModel.set( data );
    expect( testGameModel.get( 'gameTime' ) ).toBeUndefined();
  });

});


describe("User model tests", function() {
  var testModel; 
  // create a model to play with
  beforeEach( function(){
    var user = Ruabone.module( 'user' );
    console.log( user );
    testModel = user.UserModel;
  });

  it("should receive a string for a user name", function() {
    testModel.set( { username: 1000, age : 100, sex: 'Male' } );
    expect( testModel.get( 'username' ) ).toBeUndefined();
  });

  it("should receive a number for the user's age", function() {
    testModel.set( { username: 'Billy', age: 'Billy', sex:'Female' } );
    expect( testModel.get( 'age' ) ).toBeUndefined();
  });

  it( "should have either male or female as the sex", function() {
    testModel.set( { username: 'Billy', age: 8, sex:'summat else' } );
    expect( testModel.get( 'sex' ) ).toBeUndefined();
  });
});


