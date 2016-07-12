// Dependencies
var assert = require('chai').assert
var a = 10;
var b = 12;

describe('Testing getting started', function () {
  it('Should be not equal', function () {
    assert.notEqual(a, b);
  });
  it('Should be equal', function () {
    assert.equal(a, b - 2);
  });
});
