const cTable = require('console.table');
var DisplayTable = function () {}

DisplayTable.prototype.log = function(table) {
 console.table(table);
 return table;
}

module.exports = DisplayTable;
