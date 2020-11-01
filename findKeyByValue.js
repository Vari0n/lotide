const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {

  //Intial empty string that will hold the key:
  //Isolate the Keys from given object to be place in array
  const array = Object.keys(object);
  //console.log(array);
  //loop through array
  for (let keys of array) {
    //console.log(keys);
    //console.log(object[keys]);
    //console.log(object);

    //IF value ("The Expanse") equals to one of the values from object[keys] ("The Expanse", "Brooklyn Nine-Nine", "The Wire"), then return the key associated with that value, else return undefined.
    if (value === object[keys]) {
      return keys;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);