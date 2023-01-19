const { Router } = require("express");
const addressRouter = Router();

const {
  getAddress,
  getAddressById,
  postAddress,
  putAddress,
  deleteAddress,
  restoreAddress
} = require("../controllers/addressController");

addressRouter.get("/getAddress", getAddress);

addressRouter.get("/getAddressById", getAddressById);

addressRouter.get("/restoreAddress", restoreAddress);

addressRouter.post("/postAddress", postAddress);

addressRouter.put("/putAddress", putAddress);

addressRouter.delete("/deleteAddress", deleteAddress);

module.exports = addressRouter;
