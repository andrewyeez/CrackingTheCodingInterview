// demo how prototype works
//   will also include constructors, new operator definition and a
//   variation for this cases use of 'this' keyword
//


// We have a function called dog
//
// In javascript, everything is an object and they all have a built in
// property named PROTOTYPE.
//
// 'this' keyword refers to the instance of the object.
function dog(){
  this.word = "hello";
};

// This is us adding a new property to the PROTOTYPE of dog.
// This new property is named color and its value is "Black"
dog.prototype.color = "Black";

// We create an instance of dog by using the NEW operator which means that
// the following function is being use as a CONSTRUCTOR
//
// The NEW operator creates an instance of dog()
var rocky = new dog();

// We now invoke the property color that was inherited by rocky from the
// dog object. Rocky has access to color, which is a variable on dog.prototype
// because it is an instance of dog. This is called a "prototype chain"
console.log(rocky.color);

// 'this' is a tricky topic that i am currently uncertain how its used
// in javascript. In this instance, the keyword 'this' refers to the instance.
dog.prototype.speak = function() {
  return this.word;
}

console.log(rocky.speak());
