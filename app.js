var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Choose a number to generate a prime multiplication table: ", function(answer){
  console.log("Thank you.");

 rl.close();
 process.stdin.destroy();
});
