const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const text = ["blah", "wow", 'hello', 'as', 'welcome'];

const results1 = map(words, word => word[0]);
//console.log(results1);
const callback = word => word[0];

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

console.log(assertArraysEqual(map(text,callback), ['b','w','h','a','w'])); //Expected Output: PASS

console.log(assertArraysEqual(map(text,callback), ['b','d','c','h','w'])); //Expected Output: FAIL

console.log(assertArraysEqual(map(text,callback), ['b','w','h','d', 'j'])); //Expected Output: FAIL