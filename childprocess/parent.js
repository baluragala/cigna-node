const cp = require("child_process");
const child = cp.fork(`${__dirname}/child.js`);
child.on("message", m => {
  console.log("PARENT got message:", m);
  child.send({ message: "hello child" });
  //process.exit();
});
