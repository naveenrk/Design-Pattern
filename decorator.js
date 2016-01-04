// decorator.js

/**
    It is wrapper, and extend the functionality of an obj while maintaing that obj interface.
    
    The Decorator Pattern attaches additional responsibilities to an object dynamically.
    Decorator pattern emphasise Open-Closed principle – classes should be open for extension, but closed for modification.
    The pattern is an alternative for sub-classing.
    Important feature of Decorator Pattern is that it allows you to add functionality without altering existing base code. 
**/


function Coffee(){
    
}

Coffee.prototype.cost =  function(){
    return 5;
}

// Rather writing small function, we have added to Coffee function.
// from coding perspective to showcase that we want small coffee
Coffee.small = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost - 1;
    }
}

Coffee.medium = function(coffeeObj){};

Coffee.large = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost + 1;
    }
}

Coffee.sugar = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost + .15;
    }
}

Coffee.milk = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost + .15;
    }
}

Coffee.foam = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost + .15;
    }
}

Coffee.creamer = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost + .15;
    }
}
Coffee.whippedCream = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost + .15;
    }
}

Coffee.chocolate = function(coffeeObj){
    var cost = coffeeObj.cost();
    coffeeObj.cost = function(){
        return cost + .15;
    }
}

Coffee.mocha = function(coffeeObj){
    Coffee.milk(coffeeObj);
    Coffee.foam(coffeeObj);
    Coffee.chocolate(coffeeObj);
    
    var cost = coffeeObj.cost();
    
    coffeeObj.cost = function(){
        return cost;
    }
}
var coffee = new Coffee();
var mocha = new Coffee(); //  new coffee 

Coffee.large(coffee);
Coffee.whippedCream(coffee);
coffee.cost(); // 6.15

Coffee.medium(mocha);
Coffee.mocha(mocha);
mocha.cost() // 5.45;
// Drawback in above implementation is we need to always get the default cost value and 
// write new cost method and may need to create a data type of each type of coffee

/**
    Advanced decorator
    using prototype and inheritence we can overcome the above issue. and also create less data type (ex : Coffee)
**/



function Beverage (){
    this._cost = 0;
}

Beverage.prototype.cost = function(){
    return this._cost;
}

function BeverageDecorator(beverage){
    Beverage.call(this);
    this.beverage = beverage;
}

BeverageDecorator.prototype = Object(Beverage.prototype);

// Creating cost method for decorator we add to beverage
BeverageDecorator.prototype.cost = function(){
    console.log(this.beverage.cost());
    return this._cost + this.beverage.cost();
}
function _Coffee() {
    Beverage.call(this);
    this._cost = 5;
}


function Small(beverage){
    BeverageDecorator.call(this, beverage);
    this._cost = .15;
}

Small.prototype = Object.create(BeverageDecorator.prototype);

function Sugar(beverage){
    BeverageDecorator.call(this, beverage);
    this._cost = .15;
}

Sugar.prototype = Object.create(BeverageDecorator.prototype);

Coffee.prototype = Object.create(Beverage.prototype);

var _coffee = new _Coffee();
_coffee = new Small(_coffee);
_coffee =  new Sugar(_coffee);
