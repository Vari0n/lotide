const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
let finalObj = {};
for(let letter of string){
  if(finalObj[letter]){
    finalObj[letter]++;
  }else{
    finalObj[letter] = 1;
  }
}
return finalObj;
}

console.log(countLetters('LHL'));
const sentence = "LHL";
const results = countLetters('LHL');
console.log(assertEqual(results["L"],2));
