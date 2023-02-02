const { Router } = require("express");
const productRouter = Router();

const {
  getProduct,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
  restoreProduct,
  filterProductByBrand,
  filterProductBySubCategory,
  filterProductByCategory,
  bulkProduct
  
} = require("../controllers/productController");

productRouter.get("/getProduct", getProduct);

productRouter.get("/getProductId/:id", getProductById);

productRouter.get("/restoreProduct", restoreProduct);

productRouter.post("/postProduct", postProduct);

productRouter.post("/bulkProduct", bulkProduct);

productRouter.put("/putProduct", putProduct);

productRouter.delete("/deleteProduct", deleteProduct);

productRouter.get('/filterByBrand', filterProductByBrand)

productRouter.get('/filterBySubCategory', filterProductBySubCategory)

productRouter.get('/filterByCategory', filterProductByCategory)


module.exports = productRouter;