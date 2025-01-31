const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return the sum of two rounded numbers", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should round and add numbers correctly", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle negative numbers correctly", () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.6), -5);
    assert.strictEqual(calculateNumber(-1.6, -3.6), -6);
  });

  it("should handle mixed sign numbers correctly", () => {
    assert.strictEqual(calculateNumber(-1.4, 3.6), 3);
    assert.strictEqual(calculateNumber(-1.6, 3.6), 2);
    assert.strictEqual(calculateNumber(-1.5, 3.6), 3);
  });

  it("should handle zeros correctly", () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});