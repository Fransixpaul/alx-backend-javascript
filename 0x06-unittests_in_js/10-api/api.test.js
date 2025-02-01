const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return the correct payment methods object', (done) => {
    request('http://localhost:7865/available_payments', { json: true }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('should return a welcome message with the username', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: { userName: 'Betty' },
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return status 400 when userName is missing', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: {},
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Bad Request');
      done();
    });
  });
});