// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(callback, obj1, obj2) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if(callback(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`)
  }
};


const eqObjects = function(obj1, obj2) {
  //IF Object lengths are not identical, return false, otherwise continue with the rest of the code
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for(let element in obj1) {
    //console.log(obj1[element]);
    for(let elem in obj2) {
      //console.log(obj2[elem]);
      //IF keys from both objects are identical and the values are each object key-value pairs are identical, return true, otherwise return false.
      if(element === elem) {
        if(obj1[element] === obj2[elem]) {
          //console.log('element ', element, obj1[element]);
          //console.log('elem ', elem, obj2[elem]);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
const ab = { a: "1", b: "2" };   
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true


const abc = { a: "1", b: "2", c: "3" };  
assertObjectsEqual(eqObjects, ab, abc); // => false
assertObjectsEqual(eqObjects, ab, ba); // => true
assertObjectsEqual(eqObjects, ba, abc); // => true