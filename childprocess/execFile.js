const execFile = require("child_process").execFile;
const exec = require("child_process").exec;

const child = exec("dir ..", function(error, stdout, stderr) {
  console.log(stdout);
});

const child1 = execFile("dir", [".."], function(error, stdout, stderr) {
  console.log(stdout);
});
