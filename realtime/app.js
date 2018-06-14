const express = require("express");
const app = new express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

io.on("connection", function(socket) {
  console.log("New Connection");
  socket.emit("welcome", { message: "server says welcome to ws" });
  socket.on("thankyou", function(data) {
    console.log(data);
  });
  setInterval(function() {
    io.emit("time", new Date().toISOString());
  }, 1000);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3000, function() {
  console.log("realtime app is up and running");
});
