var Primable = require('./primable')
var ArrayChanger = require('./array_changer')

var TableCreater = function () {
 this.primable = new Primable();
 this.arrayChanger = new ArrayChanger();
}

TableCreater.prototype.addTableIndex = function (array, index) {
 array.unshift(index);
 return array;
}


module.exports = TableCreater;
