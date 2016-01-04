/* define is part of requireJS
    If the module does not have dependencies, but needs to use a function to       do some setup work, then define itself, pass a function to define()
*/

define(function(){
    var _counter = 0;
    
    function generateId(){
        return "_counter "+ _counter++;
    }
    
    function create(tagName, id){
        var el = document.createElement(tagName);
        
        el.id = id || generateId();
        
        return el;
    }
    
    return {
        generateID : generateId,
        create : create
    }
});