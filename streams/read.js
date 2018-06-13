const fs = require("fs");
let readableStream = fs.createReadStream("../events/event.js");

readableStream.on("readable", function() {
  while ((data = this.read())) {
    console.log(data.toString());
  }
});

// readableStream.on("data", function(chunk) {
//   console.log(chunk.length);
//   //console.log(chunk.toString());
// });

readableStream.on("error", function(error) {
  console.log(error);
  //console.log(chunk.toString());
});

readableStream.on("end", function() {
  console.log("end");
});

readableStream.on("close", function() {
  console.log("close");
});
