const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("event-copy.js")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("event.zip"));
