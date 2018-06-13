let fs = require("fs");
let srcFile = process.argv[2];
let destFile = process.argv[3];

let readableStream = fs.createReadStream(srcFile);
let writeableStream = fs.createWriteStream(destFile);
readableStream.pipe(writeableStream);
fs.unlink(srcFile);

const fs = require("fs");
var dirName = process.argv[2];
fs.mkdir(dirName, function(err, data) {
  console.log(data);
});
