const express = require("express");
const router = express.Router();

let id = 102;
let products = [
  { id: 100, title: "iphone", price: 80000, stock: 300 },
  { id: 101, title: "pixel", price: 70000, stock: 0 },
  { id: 102, title: "galaxy", price: 60000, stock: 300 }
];

router.get("/", function(req, res, next) {
  res.render("products/index", { products: products });
});

router.get("/add", function(req, res, next) {
  res.render("products/add");
});

router.post("/add", function(req, res, next) {
  let product = req.body;
  if (product.stock > 0) {
    product.id = ++id;
    products.push(product);
    res.redirect("/products");
  } else {
    let error = "Stock cannot be <= 0";
    res.render("products/add", { product, error });
  }
});

router.get("/edit/:id", function(req, res) {
  let id = req.params.id;
  let idx = products.findIndex(p => p.id == id);
  res.render("products/add", { product: products[idx], edit: true });
});

router.post("/edit/:id", function(req, res) {
  let product = req.body;
  let id = req.params.id;
  let idx = products.findIndex(p => p.id == id);
  product.id = id;
  products[idx] = product;
  res.redirect("/products");
});

module.exports = router;
