// Demo the use of IIFE
//    Goes over function scoping and block scoping
//    Aliasing a variable = giving a variable a nickname
//      the nickname variable will just be a reference of the main variable
//      the nickname variable will be able to modify the main variables content.
//      for ex:
//          var main = "andrew";
//          var aliasMain = main;

// var keyword saves the variable created inside the scope of the function
(function(){
  foo = "monkey";
  console.log("hello world");
})();
// let and const keyword saves the variable inside the block of code {}
{
  foo2 = "king";
}
// function scoping vs block scoping
// both do the same desired scoping of variables but block scoping requires the
// browser to support ECMAScript 2015.
console.log(foo);
console.log(foo2);

// fnCount is a function that will output a value thats 1 higher the last value output
// num is a private variable, that will hold the value that is getting incremented
// the variable num only exist within the function and no one can read or modify
// the variable except for the function that is being returned.
//
var fnCount = (function(){
  var num = 0;
  return function(){
    return ++num;
  };
})();

console.log(fnCount());
console.log(fnCount());
console.log(fnCount());
