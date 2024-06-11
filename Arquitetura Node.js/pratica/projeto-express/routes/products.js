var express = require("express");
var router = express.Router();

let products = [
  { id: 1, name: "laptop", price: 1000 },
  { id: 2, name: "desktop", price: 1500 },
  { id: 3, name: "mobile", price: 500 },
  { id: 4, name: "tablet", price: 300 },
  { id: 5, name: "smartwatch", price: 200 },
];

router.get("/products", function (req, res, next) {
  res.json(products);
});

router.get("/products/:id", function (req, res, next) {
  const productId = +req.params.id;

  if (isNaN(productId))
    return res.status(400).json({ message: "Invalid product id" });

  const product = products.find((product) => product.id === +productId);

  if (product) {
    return res.status(200).json({ data: product });
  }

  return res.status(404).json({ message: "Product was not found!" });
});

router.post("/products", function (req, res, next) {
  const product = req.body;

  if (!product || isNaN(product?.price) || !product?.name?.length)
    return res.status(400).json("Invalid product");

  const id = Math.max(...products.map((prodcut) => prodcut.id)) + 1;

  products.push({
    id,
    name: product.name,
    price: product.price,
  });

  res
    .status(201)
    .json({ message: "Product created succefully!", data: { id } });
});

router.delete("/products/:id", function (req, res, next) {
  const id = +req.params.id;

  if (isNaN(id)) return res.status(400).json({ message: "Invalid product id" });

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1)
    return res.status(404).json({ message: "Product not found" });

  products.splice(productIndex, 1);

  res
    .status(200)
    .json({ message: `Product with id: ${id} was deleted succefully` });
});

router.put("/products/:id", function (req, res, next) {
  const productId = +req.params.id;
  const changedProduct = req.body;

  if (!changedProduct || isNaN(productId))
    return res.status(400).json({ message: "Invalid product" });

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1)
    return res.status(404).json({ message: "Product not found" });

  products[productIndex] = {
    ...products[productIndex],
    name: changedProduct.name,
    price: changedProduct.price,
  };

  res.status(200).json({
    message: "Product updated succefully",
    data: products[productIndex],
  });
});

module.exports = router;
