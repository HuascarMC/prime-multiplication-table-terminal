var assert = require('assert');
var TableCreater = require('../models/table_creater.js');

describe('TableCreater', function () {

 var tableCreater;

 beforeEach(function () {
  tableCreater = new TableCreater();
 });

 it('it should create an array of arrays of prime numbers given a number', function () {
  const actualResult = tableCreater.create(5);
  const expectedResult = [[1, 2, 3, 5],
                          [2, 4, 6, 10],
                          [3, 6, 18, 15],
                          [5, 10, 15, 25]]


  assert.strictEqual(actualResult, expectedResult)
 });

});
