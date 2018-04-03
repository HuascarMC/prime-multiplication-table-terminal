var assert = require('assert');
var DisplayTable = require('../models/display_table');

describe('DisplayTable', function () {

 var displayTable;

 beforeEach(function () {
  displayTable = new DisplayTable();
 });

 it('should console log the table', function () {
  const actualResult = displayTable.log([[1,2],
                                        [2,4]]);
  const expectedResult = [[1,2],[2,4]];
  assert.deepEqual(actualResult, expectedResult);
 });

});
