// command.js

function Calculator(){
    this._currentValue = 0;
    this.command = [];
}

Calculator.prototype = {
    execute : function(command){
        this._currentValue = command.execute(this._currentValue);
        this.command.push(command);
    },
    undo : function(){
        var cmd = this.command.pop();        
        this._currentValue = cmd.undo(this._currentValue);
    }
    getCurrentValue : function(){
        return this._currentValue;
    }
}

function add (value){
     return value+ this.value;
}

function sub (value){
     return value - this.value;
}

function Command(fn, undo, value){
    this.execute = fn;
    this.value = value;
    this.undo = undo;
}

function AddCommand(value){
    Command.call(this, add, sub, value);
}

function SubtractCommand(value){
    Command.call(this, sub, add, value);
}

var calc = new Calculator();