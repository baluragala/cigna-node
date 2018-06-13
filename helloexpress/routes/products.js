const express = require("express");
const router = express.Router();

const products = new Map();
products.set(1, { id: 1, title: "mac book pro", price: 2000 });
products.set(2, { id: 2, title: "dell xps", price: 2000 });
products.set(3, { id: 3, title: "dell latitude", price: 2000 });
products.set(4, { id: 4, title: "lenovo workbook", price: 2000 });
products.set(5, { id: 5, title: "HP xp", price: 2000 });

let id = 5;

function rejectNonJson(req, res, next) {
  let contentType = req.get("Content-Type");
  if (contentType !== "application/json") {
    res.status(400).end();
  } else {
    next();
  }
}

router.get("/", function(req, res) {
  let result = [];
  for (const entry of products.entries()) {
    result.push(entry[1]);
  }
  res.json(result);
});

router.get("/:productId", function(req, res) {
  let id = req.params.productId;
  let p = products.get(parseInt(id));

  if (!p) {
    res.status(404).json({ message: `Product ID : ${id} is not found` });
  }
  console.log(p);
  res.json(p);
});

router.post("/", rejectNonJson, function(req, res) {
  let p = req.body;
  p.id = ++id;
  products.set(id, p);
  res.status(201).json(p);
});

module.exports = router;
