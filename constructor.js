// constructor.js
// we will use 'this' for creating to create constructor pattern 
// & using constructor we are creating Object type.. here it is Person type

function Person(fname, lname){
    this.fname = fname;
    this.lname = lname;
    
    // Always a new copy of this method will be created, for the new instance created using Person.
    // which increases in memory usage, and also inheritence issue. hence to overcome this issue 
    // bind this method to prototype.
    /*this.sayHello = function(){
        return "Hey" + this.fname +"" + this.lname;
    }*/
}

Person.prototype.sayHello = function(){
    return "Hey" + this.fname +"" + this.lname;
}


var johnDoe = new Person("John", "Doe");
var janeDoe = new Person("Jane", "Doe");

var isPerson = johnDoe instanceof Person; // true
var isSame = johnDoe.sayHello === janeDoe.sayHello; // true : when sayhello is binded to prototype, becoz it will be inherited.