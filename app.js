var readline = require("readline");
var DisplayTable = require("./models/display_table");
var TableCreater = require("./models/table_creater")

var rl = readline.createInterface(process.stdin, process.stdout);
var tableCreater = new TableCreater();
var displayTable = new DisplayTable();

rl.question("Choose a number to generate a prime multiplication table: ", function(answer){
 if((typeof parseInt(answer)) == "number") {
  console.log("Thank you.");
  var table = tableCreater.create(answer);
  displayTable.log(table);
 } else {
  console.log("You can only use numbers, sorry!.")
 }


 rl.close();
 process.stdin.destroy();
});
