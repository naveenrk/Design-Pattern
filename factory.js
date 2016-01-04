// factory.js

require(["supportFactoryPattern"], function(ctrls){
    
    var text = ctrls.create({type : "text", value : "hello factory"});
    var check = ctrls.create({type : "checkbox", checked : true});
    
    document.body.appendChild(text);
    document.body.appendChild(check);
});