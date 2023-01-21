const { Router } = require("express");
const categoryRouter = Router();

const {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
<<<<<<< HEAD
=======
  restoreCategory
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/categoryController");

categoryRouter.get("/getCategory", getCategory);

<<<<<<< HEAD
=======
categoryRouter.get("/restoreCategory", restoreCategory);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
categoryRouter.post("/postCategory", postCategory);

categoryRouter.put("/putCategory", putCategory);

categoryRouter.put("/deleteCategory", deleteCategory);

module.exports = categoryRouter;
