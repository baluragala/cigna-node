const fs = require("fs");
const bluebird = require("bluebird");

const readdir = bluebird.promisify(fs.readdir);

readdir("../")
  .then(entries => console.log(entries))
  .catch(err => console.log(err));

//error first callbacks
// fs.readdir("../", function(err, entries) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(entries);
// });

// let entries = fs.readdirSync("../");
// console.log(entries);
