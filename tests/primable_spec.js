var assert = require('assert');
var Primable = require('../models/primable');

escribe('Primable', function () {

 var primable;

 beforeEach(function () {
  primable = new Primable();
 });

 it('should check if a number is prime', function () {
  assert.strictEqual(primable.isPrime(7), true)
 });

 it('should check if a number is not prime', function () {
 assert.strictEqual(primable.isPrime(4), false)
});

 it('should get all prime numbers from zero to a given number', function () {
  const number = 10;
  result = [2, 3, 5, 7, 9]
  assert.deepEqual(primable.getPrimes(number), result);
});



});
