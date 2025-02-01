const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, "log");
  });

  afterEach(() => {
    spy.restore(); // Restore console.log after each test
  });

  it("should log 'The total is: 120' when called with (100, 20)", () => {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWithExactly("The total is: 120")).to.be.true;
  });

  it("should log 'The total is: 20' when called with (10, 10)", () => {
    sendPaymentRequestToApi(10, 10);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWithExactly("The total is: 20")).to.be.true;
  });
});