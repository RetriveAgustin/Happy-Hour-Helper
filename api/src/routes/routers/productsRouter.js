const { Router } = require("express");
const productRouter = Router();

const {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
<<<<<<< HEAD
} = require("../controllers/productController");

productRouter.get("/getProducts", getProduct);

productRouter.post("/postProducts", postProduct);

productRouter.put("/putProducts", putProduct);

productRouter.put("/deleteProducts", deleteProduct);
=======
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
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = productRouter;