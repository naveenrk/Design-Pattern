// mixin01.js

/**
    Helps in creating multiple inheritence
**/

function Person(name){
    this.name = name;
}

function Dog(name){
    this.name = name;
}

var speaker = {
    speak : function(){
        return this.name + " can speak";
    }
}

var mover = {
    walk : function(){
        return this.name + " can walk";
    },
    run : function(){
        return this.name + " can run";
    }
}

var arithmetic = {
    add : function(){
        return this.name + " is adding numbers together";
    },
    
    multiply :  function(){
        return this.name + " is multiplyinng numbers together";
    }
}

// using jquery here
// adding arithmetic to make person different from dog
/*$.extend(Person.prototype, speaker, mover, arithmetic); 
$.extend(Dog.prototype, speaker, mover);*/

// own extend function

function extend(target){
    if(!arguments[1]){
        return;
    }
    
    for(var i =1 ; i < arguments.length; i++){
        var source = arguments[i];
        
        for(var prop in source){
            if(!target[prop] && source.hasOwnProperty(prop)){
                target[prop] = source[prop];    
            }
        }
    }
}

extend(Person.prototype, speaker, mover, arithmetic); 
extend(Dog.prototype, speaker, mover);

var john = new Person('John Doe');
var fido = new Dog('Fido');
