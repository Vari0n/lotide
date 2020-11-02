const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3] 4 index1: 1 index2: 2
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4] 6 index1: 2 index2: 3