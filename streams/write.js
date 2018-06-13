const fs = require("fs");

let readableStream = fs.createReadStream("../events/event.js");
let writableStream = fs.createWriteStream("event-copy.js");

readableStream.pipe(writableStream);

// readableStream.on("readable", function() {
//   while ((data = this.read())) {
//     if (
//       !writableStream.write(data.toString(), function() {
//         console.log("write is completed");
//       })
//     ) {
//       readableStream.pause();
//     }
//   }
// });

// writableStream.on("drain", function() {
//   readableStream.resume();
// });

readableStream.on("error", function(error) {
  console.log(error);
  //console.log(chunk.toString());
});

readableStream.on("end", function() {
  console.log("end");
  writableStream.end();
});

readableStream.on("close", function() {
  console.log("close");
  writableStream.destroy();
});

writableStream.on("error", function(error) {
  console.log("error", error);
});

writableStream.on("close", function() {
  console.log("close");
});

writableStream.on("finish", function(error) {
  console.log("finish");
});

//back pressure
