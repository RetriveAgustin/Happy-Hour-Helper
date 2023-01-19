const { Router } = require("express");
const subCategoryRouter = Router();

const {
  getSubCategory,
  postSubCategory,
  putSubCategory,
  deleteSubCategory,
} = require("../controllers/sub_categoryController");

subCategoryRouter.get("/getSubCategory", getSubCategory);

subCategoryRouter.post("/postSubCategory", postSubCategory);

subCategoryRouter.put("/putSubCategory", putSubCategory);

subCategoryRouter.put("/deleteSubCategory", deleteSubCategory);

module.exports = subCategoryRouter;