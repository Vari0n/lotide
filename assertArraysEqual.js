const eqArrays = function(arr1, arr2) {
  //First Loop: Accessing the First Array
  for (let x = 0; x < arr1.length; x++) {
  //If elements of Array One equal to elements of Array Two:
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
if(eqArrays(arr1,arr2)){
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
}else{
  console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
}
}

console.log(assertArraysEqual([1,2,3], [1,4,3]));