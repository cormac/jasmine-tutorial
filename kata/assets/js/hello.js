/****************************************************************************
 * File Name: helloTest.js
 * Purpose: unit implementation for the kata
 * Creation Date: 06/09/11
 * Created By: Cormac McGuire
 * 
 *
 * Updated By:
 * Update Date:
 * Description:
 ****************************************************************************/


function MyApp( clArgs ) {
  this.args = clArgs;
  if( this.args === undefined ) throw 'no arguments supplied';
  if( typeof(this.args) !== 'string' ) throw 'arguments should be a string';
  console.log( typeof(clArgs) );

};

MyApp.prototype.getArray = function(){
  console.log( this.args );
  return this.args.split( ' ' );
};

