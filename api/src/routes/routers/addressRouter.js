const { Router } = require("express");
const adressRouter = Router();

const {
  getAddress,
  postAddress,
  putAddress,
  deleteAddress,
} = require("../controllers/addressController");

adressRouter.get("/getAddress", getAddress);

adressRouter.post("/postAddress", postAddress);

adressRouter.put("/putAddress", putAddress);

adressRouter.put("/deleteAddress", deleteAddress);
