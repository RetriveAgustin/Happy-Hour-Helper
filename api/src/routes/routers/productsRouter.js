const { Router } = require("express");
const productRouter = Router();

const {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
  filterProductByBrand,
  filterProductBySubCategory,
  filterProductByCategory
  
} = require("../controllers/productController");

productRouter.get("/getProducts", getProduct);

productRouter.post("/postProducts", postProduct);

productRouter.put("/putProducts", putProduct);

productRouter.put("/deleteProducts", deleteProduct);

productRouter.get('/products/filterByBrand', filterProductByBrand)

productRouter.get('/products/filterBySubCategory', filterProductBySubCategory)

productRouter.get('/products/filterByCategory', filterProductByCategory)

module.exports = productRouter;