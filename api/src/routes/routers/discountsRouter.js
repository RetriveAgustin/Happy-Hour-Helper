const { Router } = require("express");
const discounRouter = Router();

const {
    getDiscount,
    postDiscount,
    putDiscount,
    deleteDiscount
} = require("../controllers/discountController");

discounRouter.get("/getDiscount", getDiscount);

discounRouter.post("/postDiscount", postDiscount);

discounRouter.put("/putDiscount", putDiscount);

discounRouter.put("/deleteDiscount", deleteDiscount);

module.exports = discounRouter;

//SE VIENEN COSITASSS