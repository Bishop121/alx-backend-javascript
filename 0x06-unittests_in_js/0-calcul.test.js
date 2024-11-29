// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul'); // Import the function from 0-calcul.js

describe('calculateNumber', function() {
  it('should round 2.4 and 3.6 correctly', function() {
    assert.strictEqual(calculateNumber(2.4, 3.6), 6); // 2.4 rounds to 2, 3.6 rounds to 4
  });

  it('should round 2.5 and 3.5 correctly', function() {
    assert.strictEqual(calculateNumber(2.5, 3.5), +7); // 2.5 rounds to 3, 3.5 rounds to 4
  });

  it('should round 2.49 and 3.51 correctly', function() {
    assert.strictEqual(calculateNumber(2.49, 3.51), 6); // 2.49 rounds to 2, 3.51 rounds to 4
  });

  it('should round -2.5 and 3.5 correctly', function() {
    assert.strictEqual(calculateNumber(-2.5, 3.5), 2); // -2.5 rounds to -2, 3.5 rounds to 4
  });

  it('should round negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4); // -1.6 rounds to -2, -2.4 rounds to -2
  });

  it('should round numbers exactly at .5 correctly', function() {
    assert.strictEqual(calculateNumber(0.5, 1.5), +3); // 0.5 rounds to 1, 1.5 rounds to 2
    assert.strictEqual(calculateNumber(2.5, 3.5), 7); // 2.5 rounds to 3, 3.5 rounds to 4
    assert.strictEqual(calculateNumber(-0.5, -1.5), -1); // -0.5 rounds to -1, -1.5 rounds to -2
  });

  it('should handle large numbers correctly', function() {
    assert.strictEqual(calculateNumber(99999.5, 100000.5), +200001); // 99999.5 rounds to 100000, 100000.5 rounds to 100001
  });

  it('should handle very small numbers correctly', function() {
    assert.strictEqual(calculateNumber(0.0001, 0.0009), 0); // 0.0001 rounds to 0, 0.0009 rounds to 1
  });

  it('should handle zero correctly', function() {
    assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0
    assert.strictEqual(calculateNumber(0.4, 0.4), +0); // 0.4 rounds to 0, 0.4 rounds to 0
  });

  it('should handle extremely large positive and negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(99999999999.5, -99999999999.5), +1); // 99999999999.5 rounds to 100000000000, -99999999999.5 rounds to -100000000000
  });
});

