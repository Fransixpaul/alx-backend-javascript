const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return the sum of rounded numbers", () => {
      expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
    });
  });

  describe("SUBTRACT", () => {
    it("should return the subtraction of rounded numbers", () => {
      expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber("SUBTRACT", 5.7, 2.3)).to.equal(4);
    });
  });

  describe("DIVIDE", () => {
    it("should return the division of rounded numbers", () => {
      expect(calculateNumber("DIVIDE", 7.8, 3.3)).to.equal(2.6666666666666665);
    });

    it("should return 'Error' when dividing by zero", () => {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
    });
  });

  describe("Invalid Type", () => {
    it("should throw an error for an invalid operation type", () => {
      expect(() => calculateNumber("MULTIPLY", 2, 3)).to.throw(Error, "Invalid operation type");
    });
  });
});