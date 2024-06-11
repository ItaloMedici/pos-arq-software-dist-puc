var express = require("express");
var router = express.Router();

var { development } = require("../knexfile");
var knex = require("knex")(development);

router.get("/products", function (req, res, next) {
  knex("products")
    .select("*")
    .then((products) => res.status(200).json({ products }))
    .catch((error) =>
      res
        .status(500)
        .json({ message: `Error while fetch prodcuts: ${error?.message}` })
    );
});

router.get("/products/:id", async function (req, res, next) {
  const productId = +req.params.id;

  if (isNaN(productId))
    return res.status(400).json({ message: "Invalid product id" });

  const product = await knex("products").select("*").where({ id: productId });

  if (product) {
    return res.status(200).json({ data: product });
  }

  return res.status(404).json({ message: "Product was not found!" });
});

router.post("/products", async function (req, res, next) {
  const product = req.body;

  if (!product || isNaN(product?.price) || !product?.name?.length)
    return res.status(400).json("Invalid product");

  try {
    const id = await knex("products")
      .insert({
        name: product.name,
        price: product.price,
      })
      .returning("id");

    res
      .status(201)
      .json({ message: "Product created succefully!", data: { id } });
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT") {
      return res
        .status(403)
        .json({ message: `Product: ${product.name}, already exists.` });
    }

    res
      .status(500)
      .json({ message: `Error while adding new product, ${error.message}` });
  }
});

router.delete("/products/:id", async function (req, res, next) {
  const id = +req.params.id;

  if (isNaN(id)) return res.status(400).json({ message: "Invalid product id" });

  try {
    const result = await knex("products").delete().where({ id });

    if (result) {
      return res.status(200).json({ message: "Product deleted succefullys" });
    }

    res.status(404).json({ message: "Product not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error while deleting: ${error.message}` });
  }
});

router.put("/products/:id", async function (req, res, next) {
  const productId = +req.params.id;
  const changedProduct = req.body;

  if (!changedProduct || isNaN(productId))
    return res.status(400).json({ message: "Invalid product" });

  const result = await knex("products")
    .update({ name: changedProduct.name, price: changedProduct.price })
    .where({ id: productId });

  if (result) {
    return res.status(200).json({
      message: "Product updated succefully",
      data: changedProduct,
    });
  }

  return res.status(404).json({ message: "Product not found" });
});

module.exports = router;
