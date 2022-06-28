const { productsDB } = require("../database");

const productsController = {
  getProducts: (req, res) => {
    let qparam = req.query.productname;
    console.log(qparam);
    tempProducts = productsDB;
    if (qparam) {
      tempProducts = tempProducts.filter((val) => {
        return val.product_name == qparam;
      });
    }
    res.status(200).json({
      message: "products fetched",
      result: tempProducts,
    });
  },
  addProduct: (req, res) => {
    const data = req.body;

    console.log(data);
    if (!data.product_name) {
      res.status(400).json({
        message: "insert the product name",
      });
    }
    productsDB.push(data);

    res.status(201).json({
      message: "product added",
      result: data,
    });
  },
  deleteProduct: (req, res) => {
    const productId = req.params.productId;

    const findIndex = productsDB.findIndex((val) => {
      return val.id == productId;
    });
    console.log(findIndex);

    if (findIndex == -1) {
      res.status(400).json({
        message: `user id ${productId} not found`,
      });
      return;
    }

    productsDB.splice(findIndex, 1);

    res.status(200).json({
      message: "product deleted",
    });
  },
};

module.exports = productsController;
