const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return the sum of rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
    });
  });

  describe("SUBTRACT", () => {
    it("should return the subtraction of rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber("SUBTRACT", 5.7, 2.3), 4);
    });
  });

  describe("DIVIDE", () => {
    it("should return the division of rounded numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 7.8, 3.3), 2.6666666666666665);
    });

    it("should return 'Error' when dividing by zero", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), 'Error');
    });
  });

  describe("Invalid Type", () => {
    it("should throw an error for an invalid operation type", () => {
      assert.throws(() => calculateNumber("MULTIPLY", 2, 3), Error);
    });
  });
});