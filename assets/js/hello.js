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

/*
 * Create the Calculator object and the factor method
 */

var Calculator = function(){};

Calculator.answer = 0;

Calculator.prototype.factor = function(num1, num2){
  this.answer = num1 * num2;
  return this.answer;
};

Calculator.prototype.answerHasBeenCalculated = function(){
  return this.answer;
};
