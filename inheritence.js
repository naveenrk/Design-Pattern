// inheritence.js (Code resuse pattern)

function Beverage(name, temp){
    this.name = name;
    this.temp = temp;
}

Beverage.prototype.drink = function(){
    console.log("I'm drinking " + this.name);
}

function Coffee(type) {
    Beverage.call(this, type, 'hot'); // intializing beverage class
    this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype); // setting prototype chain
console.log(Coffee.prototype);
Coffee.prototype.sip = function(){
    console.log("Sipping some awesome " + this.type + " "+ this.name);
}

var water = new Beverage('water', 'cold');
var coffee = new Coffee('bold and dark roast ..');