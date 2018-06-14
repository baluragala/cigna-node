const spawn = require("child_process").spawn;

const dir = spawn("dir", ["c:\\"]);
dir.stdout.on("data", function(chunk) {
  console.log(chunk.toString());
});
