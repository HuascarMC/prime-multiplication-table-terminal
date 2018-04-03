var Primable = function () {}

Primable.prototype.isPrime = function(number) {
 if(number % 2 === 0 && number !== 2) {
  return false
 }
 return true
}



module.exports = Primable;
