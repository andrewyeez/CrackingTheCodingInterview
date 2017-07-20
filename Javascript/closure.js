// Demo a use case for Closure
//
// innerfn1 demonstrate that the inner function has access
// to the outer functions variable
//
// innerfn2 demonstrate that the inner function can also access
// the parameters of the outer function
//
// innerfn3 demonstrate that the inner function can also access
// the functions of the outer functions
//
// BUT the outer function cannot access the
// inner functions variable or functions that it may have, it can only invoke
// the inner functions.
//
function outerfn(param){
  var color = "red";
  function innerfn1(){
    return color;
  };
  function innerfn2(){
    return param;
  };
  function innerfn3(){
    return innerfn1();
  }

  return innerfn3();
  // return innerfn2();
}

console.log(outerfn("white"));
