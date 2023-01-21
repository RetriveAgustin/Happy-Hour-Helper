const { Router } = require("express");
const subCategoryRouter = Router();

const {
  getSubCategory,
  postSubCategory,
  putSubCategory,
  deleteSubCategory,
<<<<<<< HEAD
=======
  restoreSubCategory
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/sub_categoryController");

subCategoryRouter.get("/getSubCategory", getSubCategory);

<<<<<<< HEAD
=======
subCategoryRouter.get("/restoreSubCategory", restoreSubCategory);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
subCategoryRouter.post("/postSubCategory", postSubCategory);

subCategoryRouter.put("/putSubCategory", putSubCategory);

<<<<<<< HEAD
subCategoryRouter.put("/deleteSubCategory", deleteSubCategory);
=======
subCategoryRouter.delete("/deleteSubCategory", deleteSubCategory);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = subCategoryRouter;