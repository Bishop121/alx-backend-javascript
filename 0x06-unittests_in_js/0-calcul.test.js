const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe("Sum of 2 numbers", () => {
  it("should return 5 when 2.3 and 3 are passed", () => {
    assert.strictEqual(calculateNumber(2.3, 3), 5);
  });

  it("should return 5 when 1.2 and 3.7 are passed", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should return 6 when 1.5 and 3.7 are passed", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("checking if number round", () => {
    const res = calculateNumber(1, 2);
    assert.strictEqual(res, 3);
  });

  it("checking if number round", () => {
    const res = calculateNumber(1.4, 2.2);
    assert.strictEqual(res, 3);
  });

  it("checking if number round", () => {
    const res = calculateNumber(1.6, 2.7);
    assert.strictEqual(res, 5);
  });

  it("checking if number round", () => {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });

  it("checking if number round", () => {
    const res = calculateNumber(-1.6, -1.7);
    assert.strictEqual(res, -4);
  });

  it("checking if number round", () => {
    const res = calculateNumber(-1.4, -1.3);
    assert.strictEqual(res, -2);
  });
});
