const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let final = 0;
  for (let i = 0; i < array.length; i++) {
    final += i;
  }
  return final;
};



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const empty = [];
tail(empty);
assertEqual(empty.length, 0);

const single = ["hey"];
tail(single);
assertEqual(single.length, 1);