const assert = require('chai').assert;
const middle = require('../middle');


describe('#middle', () => {
  it('returns [] if array has only one or two elements', () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1,2]), []);
  });
  it('returns middle element if array length  is odd number', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it('returns two elements in the middle array if array length is even', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});



