// Given two strings, write a method to decide if one is a permutation of the
// other.

// thought process...
//    first check if the strings are of the same length.
//    if so, proceed with verifying if the characters all exist in the same
//    amount (not the same order) as the other string.

//    secondary thought,
//    compare the two strings character per character, if the character is
//    the same then remove it from the array (only chose one array to remove
//    from). after iterating from the array, the array that characters where
//    being removed from should now have size 0 if it is a permutation.

function isPermutation(str1, str2){
  var arr1 = str1.split("");
  var arr2 = str2.split("");

  // case that strings are not the same length, cannot be a permutation
  if(arr1.length != arr2.length){ return 0;}

  for(var i=0; i<arr1.length; i++){
    for(var j=0; j<arr2.length; j++){
      if(arr1[i] == arr2[j]){
        // removes 1 element starting at index j forward.
        arr2.splice(j,1);
      }
    }
  }
  // strings are a permutation of each other
  if(arr2.length == 0){return 1;}
  // not a permutation
  return 0;
}

console.log(isPermutation("hey", "ehy"));
