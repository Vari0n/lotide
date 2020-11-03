const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result;
  //PLAN
  //Can I access the object properly?
  //console.log(object);
  //Can I access the Object keys propely?
  //console.log(object.noma.stars);
  //Can I loop through the Object to get the keys?
  for (let key in object) {
  //Can I access the Object keys?
    //console.log("stars",object[key]['stars']);
    //If callback is true, result equals to 'noma'
    if (callback(object[key])) {
    //console.log(key); //prints noma and Ora
      result = key;
      break;
    }
  }
  // console.log(result)
  //GOAL: Get "noma" returned
  return result;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),  "noma");