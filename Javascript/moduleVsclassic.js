// Demo module pattern vs classical inheritance
//
// This is a revealing module pattern where we define exactly what part
// of the function is returned. In this scenario we expose the privateFn
// that outputs the privateVar. We expose it by returning an object with a
// property of publicFn that is a reference to the privateFn.
var module = (function(){
  var privateVar = "private";
  var privateFn = function(){
    return console.log(privateVar);
  };
  return {
    publicFn: privateFn
  };

})();

module.publicFn();

// for classical inheritance, check the protypeInheritance.js file for example
