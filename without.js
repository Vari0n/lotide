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

const without = function(source, itemsToRemove){
  let revised = source;
  for(let i = 0; i < source.length; i++){
    //  console.log(itemsToRemove[i]);
    // console.log(source[i]);

    //EXPLAIN: if source([1,2,3] does not include
    if((itemsToRemove.includes(source[i]))) {
      revised.splice(i,1);
      // revised.push(source[i]);
      console.log(revised);
    }
  }
  console.log('revised ',revised)
return revised;
};




assertArraysEqual(without([1,2,3], [1]), [2,3]); // => [2,3]
console.log(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

 const words = ["hello", "world", "lighthouse"];
 without(words, ["lighthouse"]); // no need to capture return value for this test case
 // Make sure the original array was not altered by the without function
 assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);