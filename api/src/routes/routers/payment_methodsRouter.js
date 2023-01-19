const { Router } = require("express");
const paymentRouter = Router();

const {
  getPayment,
  postPayment,
  putPayment,
  deletePayment,
} = require("../controllers/payment_methodController");

paymentRouter.get("/getPayment", getPayment);

paymentRouter.post("/postPayment", postPayment);

paymentRouter.put("/putPayment", putPayment);

paymentRouter.put("/deletePayment", deletePayment);

module.exports = paymentRouter;