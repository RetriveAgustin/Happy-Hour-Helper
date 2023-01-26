const { Router } = require("express");
const categoryRouter = Router();

const {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
  restoreCategory
} = require("../controllers/categoryController");

categoryRouter.get("/getCategory", getCategory);

categoryRouter.get("/restoreCategory", restoreCategory);

categoryRouter.post("/postCategory", postCategory);

categoryRouter.put("/putCategory", putCategory);

categoryRouter.delete("/deleteCategory", deleteCategory);

module.exports = categoryRouter;
