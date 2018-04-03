var Primable = require('./primable')
var ArrayChanger = require('./array_changer')

var TableCreater = function () {
 this.primable = new Primable();
 this.arrayChanger = new ArrayChanger();
}

// TableCreater.prototype.create = function(number) {
//  var result = [];
//  var primes = this.primable.getPrimes(number);
//  });


module.exports = TableCreater;
