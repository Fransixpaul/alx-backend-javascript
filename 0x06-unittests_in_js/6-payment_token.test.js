const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a resolved promise with {data: 'Successful response from the API'} when success is true", (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: "Successful response from the API" });
      done(); // Ensures Mocha waits for the async test to finish
    }).catch(done); // Ensures Mocha catches errors
  });
});