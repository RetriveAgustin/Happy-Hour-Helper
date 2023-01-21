const { Router } = require("express");
const addressRouter = Router();

const {
  getAddress,
<<<<<<< HEAD
  postAddress,
  putAddress,
  deleteAddress,
=======
  getAddressById,
  postAddress,
  putAddress,
  deleteAddress,
  restoreAddress
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/addressController");

addressRouter.get("/getAddress", getAddress);

<<<<<<< HEAD
=======
addressRouter.get("/getAddressById", getAddressById);

addressRouter.get("/restoreAddress", restoreAddress);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
addressRouter.post("/postAddress", postAddress);

addressRouter.put("/putAddress", putAddress);

<<<<<<< HEAD
addressRouter.put("/deleteAddress", deleteAddress);
=======
addressRouter.delete("/deleteAddress", deleteAddress);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = addressRouter;
