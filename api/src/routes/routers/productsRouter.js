const { Router } = require("express");
const productRouter = Router();

const {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
  restoreProduct,
  filterProductByBrand,
  filterProductBySubCategory,
  filterProductByCategory
  
} = require("../controllers/productController");

productRouter.get("/getProduct", getProduct);

productRouter.get("/restoreProduct", restoreProduct);

productRouter.post("/postProduct", postProduct);

productRouter.put("/putProduct", putProduct);

productRouter.delete("/deleteProduct", deleteProduct);

productRouter.get('/product/filterByBrand', filterProductByBrand)

productRouter.get('/product/filterBySubCategory', filterProductBySubCategory)

productRouter.get('/product/filterByCategory', filterProductByCategory)

module.exports = productRouter;