var assert = require('assert');
var HandleUserInput = require('../models/handle_user_input.js');

describe('HandleUserInput', function () {

 var handleUserInput;

 beforeEach(function () {
  handleUserInput = new HandleUserInput();
 });

 it('should be able to ask user for number on terminal' function () {
  const result = handleUserInput.getNumber();
  assert.strictEqual(result, '7');
 });
});
