const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns array.length as 0 for []', () => {
    assert.strictEqual(tail([]),0);
  });
  it('returns 3 for ["Yo, Yo", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Yo,Yo","Lighthouse","Labs"]), 3)
  });
  it('returns 0 for ["hey"]', () => {
    assert.strictEqual(tail(["hey"]), 0)
  });
});