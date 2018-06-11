const events = require("events");
const EventEmitter = events.EventEmitter;
const ee = new EventEmitter();

ee.once("START", function(eventArgs) {
  console.log("started1", eventArgs);
  delete eventArgs.message;
});

ee.once("START", function(eventArgs) {
  console.log("started2", eventArgs);
});

ee.on("START", function(eventArgs) {
  console.log("started3", eventArgs);
});

ee.emit("START", { message: "welcome to node" });
ee.emit("START", "Hello events");
ee.emit("START", 10);
ee.emit("START", false);
ee.emit("START", []);
