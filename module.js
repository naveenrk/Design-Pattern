// module.js

/** 
    1. To keep particular piece of code independent of other components.
    2. provide loose coupling
    3. Modules are JS classes , which provide encapsulation i.e, Public private and    
       protected.
    4. Modules should be IIFE (Immediately Invoked Funciton Expression) - that is, a 
       closure that protect variables and methods (however, it will return an object     
       instead of a function). 

    (function(){
        // declare private variables and/or functions
        return {
        // declare public variables and/or functions
        }
    })
    
    Disadvantage : Is unable to reference the private methods.
                   This can pose unit testing challenges.
                   Similarly, the public behaviors are non-overridable.
**/

// IIFE - function to execute as soon the file gets loaded and return object 
var globalVariable = (function(){
    var privateVariable = 10;
    
    // private method
    function privateMethodOne(){
        console.log('private Method one');
        privateMethodtTwo();
    }
    
    // private method
    function privateMethodtTwo(){
        console.log('private Method two');
    }
    
    // public method
    var publicMethodOne = function(){
        console.log('public Method one');
        privateMethodOne();
    }
    
    // return obect literal, which will be exposed to other JS classes
    return {
        publicMethodOne : publicMethodOne
    }
})();

globalVariable.publicMethodOne(); // public method