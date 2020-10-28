const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const finalObj = {};
  //for of loop to loop through the elements of the allItems array
  for (let name of allItems) {
    //if the Object key in itemsToCount(i.e. Jason) exists in the firstNames array, activate the next if statement:
    if (itemsToCount[name]) {
    //if finalObj the has key-value pair(i.e. Jason : 1),then increment it by 1
      if (finalObj[name]) {
        finalObj[name]++;
      } else {
        //if finObj does not have a key-value pair, create it in the finalObj, statring with a value of 1
        finalObj[name] = 1;
      }
    }
  }
  console.log(finalObj);
  return finalObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);