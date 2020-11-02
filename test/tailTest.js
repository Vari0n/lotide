const tail = require('../tail');
const assertEqual = require('../assertEqual')

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!S
const empty = [];
tail(empty);
assertEqual(empty.length, 0);

const single = ["hey"];
tail(single);
assertEqual(single.length, 1);