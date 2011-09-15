/*
 * Simple function to test testing
 *
 */


function helloWorld(){
  return "Hello world";
}

/*
 * This function is required to return a number that is divisible by 2
 */
function gimmeANumber(){
  return 2;
}


/*
 * Create a Person object
 */

var Person = function(){
};

Person.prototype.helloSomeone = function( toGreet ){
  return this.sayHello() + " " + toGreet;  
};

Person.prototype.sayHello = function(){
  return "Hello";  
};
