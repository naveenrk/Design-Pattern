// Prototype.js

/**
    The prototype model is used mainly for creating objects in performance-intensive situations.
    The objects created are clones (shallow clones- not of too much depth) of the original object that are passed around
    use case of the prototype pattern is performing an extensive database operation to create an object used for other parts of the       application. If another process needs to use this object,
    instead of having to perform this substantial database operation,
    it would be advantageous to clone the previously created object.
    
    To clone an object, a constructor must exist to instantiate the first object.
**/

var globalVar = function (){
    
    this.numberValue = 4;
    this. strValue = 'string varibale value';
    
}

globalVar.prototype.go = function(){
    // do something
}

globalVar.prototype.stop = function(){
    // do something
}


// A synonymous way to extend functions on the prototype as described below.

var globalVar = function (){
    
    this.numberValue = 4;
    this. strValue = 'string varibale value';
    
}

globalVar.prototype = {
    go : function(){
        // do something
    },
    stop : function(){
        // do something
    }
}

// Prototype Pattern provides encapsulation with public and private members since it returns an object literal.

var globalVar = function() {
  this.numWheels    = 4;
  this.manufacturer = 'string varibale value';
}

TeslaModelS.prototype = function() {

  var go = function() {
    // do something
  };

  var stop = function() {
    // do something
  };

  return {
    pressBrakePedal: stop,
    pressGasPedal: go
  }

}();