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

module.exports = tail;

