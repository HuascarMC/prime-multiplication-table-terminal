var Primable = require('./primable')
var ArrayChanger = require('./array_changer')

var TableCreater = function () {
 this.primable = new Primable();
 this.arrayChanger = new ArrayChanger();
}

TableCreater.prototype.create = function (number) {
 if (number < 67) {
 var result = [];
 var primes = this.primable.getPrimes(number);
 for(var i = -1; i < primes.length; i++) {
  if (i == -1) {
    var indexArray = primes.slice();
    indexArray = this.addTableIndex(indexArray, 1);
    result.push(indexArray);
   } else {
    var increasedArray = this.arrayChanger.increaseArray(primes, primes[i]);
    increasedArray = this.addTableIndex(increasedArray, primes[i]);
    result.push(increasedArray);
   }
  }
  return result;
 }
 return "Sorry can't create a table for numbers higher than 67";
}

TableCreater.prototype.addTableIndex = function (array, index) {
 array.unshift(index);
 return array;
}


module.exports = TableCreater;
