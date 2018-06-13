const Express = require("express");
const path = require("path");

const app = new Express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
