const fs = require("fs");

fs.watch(".", (eventType, filename) => {
  console.log(eventType, filename);
});
