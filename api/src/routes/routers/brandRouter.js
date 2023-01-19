const { Router } = require("express");
const brandRouter = Router();

const {
  getBrand,
  postBrand,
  putBrand,
  deleteBrand,
  restoreBrand
} = require("../controllers/brandController");

brandRouter.get("/getBrand", getBrand);

brandRouter.get("/restoreBrand", restoreBrand);

brandRouter.post("/postBrand", postBrand);

brandRouter.put("/putBrand", putBrand);

brandRouter.delete("/deleteBrand", deleteBrand);

brandRouter.get("/recuperarModels", restoreBrand );

module.exports = brandRouter;