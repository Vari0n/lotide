//{
//H: [0]
//E: [1]
//L: [2,3]
//O: [4]
//}

const letterPositions = function(sentence) {
  const results = {};
  let list;
  for (let i = 0; i < sentence.length; i++) {
  //console.log(i); //Index Number
    list = sentence[i];
    //console.log(list); //Object Keys
    if (results[list]) {
      results[list].push(i);
    } else {
      results[list] = [i];
    }
  }
  //console.log(results);
  return results;
};

//const words = "Hello";
//console.log(letterPositions(words));

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

console.log(assertArraysEqual(letterPositions('hello').e,[1]));
