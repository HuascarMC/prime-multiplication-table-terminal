var Primable = require('./primable')
var ArrayChanger = require('./array_changer')

var TableCreater = function () {
 this.primable = new Primable();
 this.arrayChanger = new ArrayChanger();
}


module.exports = TableCreater;
