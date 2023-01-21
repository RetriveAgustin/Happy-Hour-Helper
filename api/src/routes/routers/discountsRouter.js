const { Router } = require("express");
const discounRouter = Router();

const {
    getDiscount,
    postDiscount,
    putDiscount,
<<<<<<< HEAD
    deleteDiscount
=======
    deleteDiscount,
    restoreDiscount
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/discountController");

discounRouter.get("/getDiscount", getDiscount);

<<<<<<< HEAD
=======
discounRouter.get("/restoreDiscount", restoreDiscount);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
discounRouter.post("/postDiscount", postDiscount);

discounRouter.put("/putDiscount", putDiscount);

<<<<<<< HEAD
discounRouter.put("/deleteDiscount", deleteDiscount);
=======
discounRouter.delete("/deleteDiscount", deleteDiscount);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = discounRouter;

//SE VIENEN COSITASSS