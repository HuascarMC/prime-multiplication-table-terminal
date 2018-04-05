var readline = require("readline");
var DisplayTable = require("./models/display_table");
var TableCreater = require("./models/table_creater")

var rl = readline.createInterface(process.stdin, process.stdout);
var tableCreater = new TableCreater();
var displayTable = new DisplayTable();

rl.question("Choose a number between 1-67 to generate a prime multiplication table: ", function(answer){
 if(isNaN(answer) == false) {
  console.log("Thank you.");
  console.log(parseInt(answer))
  var table = tableCreater.create(answer);
  displayTable.log(table);
 } else {
  console.log("You can only use numbers, sorry!.")
 }


 rl.close();
 process.stdin.destroy();
});
