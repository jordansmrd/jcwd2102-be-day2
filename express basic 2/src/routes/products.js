const express = require("express");
const router = express.Router();
const { productsController } = require("../controller");

router.get("/", productsController.getProducts);

router.post("/", productsController.addProduct);

router.delete("/:productId", productsController.deleteProduct);

module.exports = router;
