const { Router } = require("express");
const brandRouter = Router();

const {
  getBrand,
  postBrand,
  putBrand,
  deleteBrand,
} = require("../controllers/brandController");

brandRouter.get("/getBrand", getBrand);

brandRouter.post("/postBrand", postBrand);

brandRouter.put("/putBrand", putBrand);

brandRouter.delete("/deleteBrand", deleteBrand);

module.exports = brandRouter;