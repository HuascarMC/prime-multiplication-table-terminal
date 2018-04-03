var assert = require('assert');
var ArrayChanger = require('../models/array_changer');

describe('array_changer', function () {

 var arrayChanger;

 beforeEach(function () {
  arrayChanger = new ArrayChanger();
 });

 it('should increase an array by a given value', function () {
  const array = [2, 3, 5, 7, 9];
  const actualResult = arrayChanger.increaseArray(array, 2);
  const expectedResult = [4, 6, 10, 14, 18]
  assert.deepEqual(actualResult, expectedResult)
 });

});
