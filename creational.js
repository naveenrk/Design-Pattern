// creational.js

/**
    Creational Patterns
    Creating Objects with Literals
**/ 

var obj = {};

obj.fName = "abcd";
// Advantage is we can use anytype of name with space or keywords to create property name
obj["fName"] = "abcd";

/*
    A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described     by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.
    arg[0] : which obj, arg[1] : property name , arg[2]: descriptor (there are two types check in MDN)
    Shared keys : configurable, enumerable.
    data descriptor : value, writable.
    accessor descriptor : get, set
    
    Object.defineProperty() to add one property
    Object.defineProperties() to add more than one property
*/
Object.defineProperty(obj,'fName',{
    value : "abcd"
});

Object.defineProperties(obj,{
    twitter : {
        value : "dfdsf"
    },
    email : {
        value : "dgdsagf"
    }
});



/*
    Generating Objects with Object.create(), which is classical inheritence

    The Object.create() method creates a new object with the specified prototype object     and properties.
    object whose enumerable own properties - that is, those properties defined upon         itself and not enumerable properties along its prototype chain
    
*/

var johnDoe = {
    fname : "John",
    lname : "Doe",
    sayName :  function(){
        return "My name is "+ this.fname + " "+ this.lname 
    }
};

var janeDoe = Object.create(johnDoe, {
    fname : {value : "Jane"},
    greet : {value : function(personObj){
        return "Hello, "+ personObj.fname;
    }}
});

var jimSmith = Object.create(janeDoe, {
    fname : {value : "Jim"},
    lname : {value : "Smith"}
});

console.log(johnDoe.sayName());
console.log(janeDoe.sayName());
console.log(jimSmith.sayName());

console.log(janeDoe.sayName()+" "+janeDoe.greet(johnDoe));
console.log(jimSmith.sayName()+" "+jimSmith.greet(janeDoe));

console.log(janeDoe.__proto__ === johnDoe);
console.log(jimSmith.__proto__ === janeDoe);


