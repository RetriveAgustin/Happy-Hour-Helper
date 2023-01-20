const { Router } = require("express");
const discounRouter = Router();

const {
    getDiscount,
    postDiscount,
    putDiscount,
    deleteDiscount,
    restoreDiscount
} = require("../controllers/discountController");

discounRouter.get("/getDiscount", getDiscount);

discounRouter.get("/restoreDiscount", restoreDiscount);

discounRouter.post("/postDiscount", postDiscount);

discounRouter.put("/putDiscount", putDiscount);

discounRouter.delete("/deleteDiscount", deleteDiscount);

module.exports = discounRouter;

//SE VIENEN COSITASSS