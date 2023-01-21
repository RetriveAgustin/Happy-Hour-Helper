const { Router } = require("express");
const brandRouter = Router();

const {
  getBrand,
  postBrand,
  putBrand,
  deleteBrand,
<<<<<<< HEAD
=======
  restoreBrand
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/brandController");

brandRouter.get("/getBrand", getBrand);

<<<<<<< HEAD
=======
brandRouter.get("/restoreBrand", restoreBrand);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
brandRouter.post("/postBrand", postBrand);

brandRouter.put("/putBrand", putBrand);

<<<<<<< HEAD
brandRouter.put("/deleteBrand", deleteBrand);
=======
brandRouter.delete("/deleteBrand", deleteBrand);

brandRouter.get("/recuperarModels", restoreBrand );
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = brandRouter;