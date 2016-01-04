// modulesAMDpattern.js
// Asynchronous Module Dependency

require(["supportAMD"], function(dom){
    console.dir(dom);
    var el1 = dom.create("div");
    var el2 = dom.create("div");
    
    console.log(el1.id);
    console.log(el2.id);
})