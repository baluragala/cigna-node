let args = process.argv;
const fs = require("fs");
var username;
let sum = 0;
for (let i = 2; i < args.length; i++) {
  sum += parseInt(args[i]);
}

console.log(sum);

// try {
//   fs.createReadStream("D:\\ine.js");
// } catch (err) {
//   console.log("caught exception", err);
// }

process.on("beforeExit", function(eventArgs) {
  console.log("beforeExit", eventArgs);
  setTimeout(() => console.log(new Date()), 2000);
});

process.on("exit", function(statusCode) {
  console.log("exit", statusCode);
});

process.on("uncaughtException", function(e) {
  console.log(e);
  console.log("uncaughtException");
});
