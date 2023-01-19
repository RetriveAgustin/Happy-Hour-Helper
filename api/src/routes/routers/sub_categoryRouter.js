const { Router } = require("express");
const subCategoryRouter = Router();

const {
  getSubCategory,
  postSubCategory,
  putSubCategory,
  deleteSubCategory,
  restoreSubCategory
} = require("../controllers/sub_categoryController");

subCategoryRouter.get("/getSubCategory", getSubCategory);

subCategoryRouter.get("/restoreSubCategory", restoreSubCategory);

subCategoryRouter.post("/postSubCategory", postSubCategory);

subCategoryRouter.put("/putSubCategory", putSubCategory);

subCategoryRouter.delete("/deleteSubCategory", deleteSubCategory);

module.exports = subCategoryRouter;