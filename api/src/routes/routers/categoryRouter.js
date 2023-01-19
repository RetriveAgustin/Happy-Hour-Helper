const { Router } = require("express");
const categoryRouter = Router();

const {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
} = require("../controllers/categoryController");

categoryRouter.get("/getCategory", getCategory);

categoryRouter.post("/postCategory", postCategory);

categoryRouter.put("/putCategory", putCategory);

categoryRouter.put("/deleteCategory", deleteCategory);

module.exports = categoryRouter;
