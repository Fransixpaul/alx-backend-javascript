const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", () => {
  let stub, spy;

  beforeEach(() => {
    stub = sinon.stub(Utils, "calculateNumber").returns(10);
    spy = sinon.spy(console, "log");
  });

  afterEach(() => {
    stub.restore(); // Restore the stubbed function
    spy.restore();  // Restore the console.log spy
  });

  it("should stub Utils.calculateNumber and spy on console.log", () => {
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith("SUM", 100, 20)).to.be.true;

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWithExactly("The total is: 10")).to.be.true;
  });
});