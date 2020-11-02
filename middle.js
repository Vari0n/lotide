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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const middle = function(array) {
  let result = [];
  let length = array.length;
  if(length === 1 || length === 2){
    return [];
  }
    //console.log(array[i]);
    if(length % 2 === 0){
    result.push(array[(length) / 2 -1]);
    result.push(array[(length) / 2]);
  } else {
    result.push(array[(length -1) / 2]); 
  }
    
  
  

return result;
}

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3] 4 index1: 1 index2: 2
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4] 6 index1: 2 index2: 3