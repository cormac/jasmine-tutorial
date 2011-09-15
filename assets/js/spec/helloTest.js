/*
 * My first test suite
 */
describe ('Hello World', function(){
  /*
   * First basic functions
   */
  it( 'says hello', function(){
    expect( helloWorld() ).toEqual('Hello world');
  });
  it( 'contains hello', function(){
    expect( helloWorld() ).toContain('world');
  });

  /*
   * This function will be executed before all the test functions
   */
  beforeEach( function(){
    this.addMatchers({
        toBeDivisibleByTwo: function(){
          return ( this.actual % 2 ) === 0;  
        }
    });
  });

  it( 'is divisible by two', function() {
    expect( gimmeANumber() ).toBeDivisibleByTwo();
  });

} );

/*
 * Test suite for the class Person
 */
describe( "Person", function() {
  it( 'greets the world', function() {
    var fakePerson = new Person();
    spyOn( fakePerson, 'helloSomeone' );
    fakePerson.helloSomeone( 'world' );
    expect( fakePerson.helloSomeone).toHaveBeenCalledWith( 'world' );
  }); 
  it( 'checks the function is called', function() {
    var fakePerson = new Person();
    spyOn( fakePerson, 'helloSomeone' );
    fakePerson.helloSomeone( 'world' );
    expect( fakePerson.helloSomeone).toHaveBeenCalled();
  });   
  /*
   * Empty out the sayHello function
   */
  it( 'says hello', function(){
    var fakePerson = new Person();
    fakePerson.sayHello = jasmine.createSpy( 'Say-Hello spy');
    fakePerson.sayHello( 'world' );
    expect( fakePerson.sayHello ).toHaveBeenCalled();
  });
  it( 'says hello with a return', function(){
    var fakePerson = new Person();
    fakePerson.sayHello = jasmine.createSpy( 'Say-Hello spy').andReturn( 'ello ello' );
    fakePerson.sayHello( 'world' );
    expect( fakePerson.sayHello ).toHaveBeenCalled();
  });
  it( 'says hello and creates a fake function', function(){
    var fakePerson = new Person();
    fakePerson.sayHello = jasmine.createSpy( '"Say-Hello" spy').andCallFake( function(){
      console.log('Time to say hello!' );
      return 'bonjour';
    });
    fakePerson.sayHello( 'world' );
    expect( fakePerson.sayHello ).toHaveBeenCalled();
 
  });
});
