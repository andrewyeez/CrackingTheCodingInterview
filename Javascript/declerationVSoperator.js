// Demo the difference between function declaration and function operator
//
// The key difference is the time the codes are created. Function operator will
// be excuted during run time while the function declaration will be move to
// the very top of codes to be created before the rest of the functions are
// ran.
//

// Function Decleration

// The function decleration was called before the line where we declared the
// function declration. As we run the code we see that it still outputs the
// message and so this demonstrate that function declrations will move the code
// to the top and run it before all the codes are ran.
decleration();
function decleration(){
  var msg = "Hello!";
  console.log(msg);
}

// Function Operator

// Depending on the boolean value, the operator variable will either output
// "what ?" or "my name is!". This will demonstrate that function operators
// are ran during run time.
var operator;
var bool = false;
if(bool){
  operator = function(){
    console.log("What ?");
  }
}else{
  operator = function(){
    console.log("My name is!");
  }
}
operator();
