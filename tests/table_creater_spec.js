var assert = require('assert');
var TableCreater = require('../models/table_creater.js');

describe('TableCreater', function () {

 var tableCreater;

 beforeEach(function () {
  tableCreater = new TableCreater();
 });

 it('it should have to have primable property', function () {
  assert(tableCreater.primable != null)
 })

 it('it should have to have array changer property', function () {
  assert(tableCreater.arrayChanger != null)
 })

 it('it should create an array of arrays of prime numbers given a number', function () {
  const actualResult = tableCreater.create(5);
  const expectedResult = [[1, 2, 3, 5],
                          [2, 4, 6, 10],
                          [3, 6, 18, 15],
                          [5, 10, 15, 25]]


  assert.strictEqual(actualResult, expectedResult)
 });

 //INTEGRATION TESTS FOR PRIMABLE IN TABLE CREATER
 it('should be able to use primable isPrime method', function () {
  var result = tableCreater.primable.isPrime(7);
  assert.strictEqual(result, true);
 })

 it('should be able to use primable isPrime false method', function () {
  var result = tableCreater.primable.isPrime(8);
  assert.strictEqual(result, false);
 })

 it('should be able to use primable getPrimes method', function () {
  const actualResult = tableCreater.primable.getPrimes(7);
  const expectedResult = [2, 3, 5, 7];
  assert.deepEqual(actualResult, expectedResult);
 })

  //INTEGRATION TESTS FOR ARRAY CHANGER IN TABLE CREATER
  it('should be abnle to use increase array method', function () {
   const actualResult = tableCreater.arrayChanger.increaseArray([2, 3, 5, 7], 3);
   const expectedResult = [6, 9, 15, 21];
   assert.deepEqual(actualResult, expectedResult);
  })



});
