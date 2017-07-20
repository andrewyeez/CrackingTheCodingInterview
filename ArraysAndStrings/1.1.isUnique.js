// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use aditional data structures ? (Arrays only)

function isUnique(str){
  // for each character in a string
    // insert the character into a new array
      // for each insert into this new array, verify that it is a
      // unique character insert

  // secondary solution
    // create a copy of the first array
    // then we iterate over the first array.
      // for each character in the first array,
      // compare the character over the copy array.
      // if we there is a match return 0. (not unique)
  var arr1 = str.split("");
  var arr2 = [];

  for(var i=0; i<arr1.length; i++){
    arr2.push(arr1[i]);
  }

  console.log(arr1);
  console.log(arr2);

  for(var i=0; i<arr1.length; i++){
    for(var j=0; j<arr2.length; j++){
      if( (arr1[i] == arr2[j]) && (i != j) ){
        // found the same character
        return 0;
      }
    }
  }
  // string is unique.
  return 1;
}

console.log(isUnique("hel"));
