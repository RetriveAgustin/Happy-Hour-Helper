const { Router } = require("express");
const productRouter = Router();

const {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/productController");

productRouter.get("/getProducts", getProduct);

productRouter.post("/postProducts", postProduct);

productRouter.put("/putProducts", putProduct);

productRouter.put("/deleteProducts", deleteProduct);

module.exports = productRouter;