const Express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const productRouter = require("./routes/products");

const app = new Express();

app.use(Express.static("public"));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

/* plan routes */
/*

  GET -> /products
  POST -> /products
  GET -> /products/:pid
  DELETE -> /products/:pid
  PUT -> /products/:pid
*/

app.use("/courses", productRouter);

app.get("/lib.js", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "lib.js"));
});

app.use(function(err, req, res, next) {
  if (process.env.ENV == "dev") {
    throw err;
  } else {
    console.log(err);
    res.status(500).json({ message: "something went wrong on server" });
  }
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});

/* steps 

1. npm init -y
2. npm install express
3. create app.js
4. create index.html
5. node app.js

*/

//npm install body-parser
