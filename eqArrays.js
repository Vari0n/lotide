
const eqArrays = function(arr1, arr2) {
  //For loop to access the elements of both arrays
  for (let x = 0; x < arr1.length; x++) {
  //If elements of Array One don't equal to elements of Array Two: return false, otherwise return true
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

 module.exports = eqArrays;


