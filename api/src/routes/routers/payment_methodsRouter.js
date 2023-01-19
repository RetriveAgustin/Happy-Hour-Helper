const { Router } = require("express");
const paymentRouter = Router();

const {
  getPayment,
  postPayment,
  putPayment,
  deletePayment,
  restorePayment
} = require("../controllers/payment_methodController");

paymentRouter.get("/getPayment", getPayment);

paymentRouter.get("/restorePayment", restorePayment);

paymentRouter.post("/postPayment", postPayment);

paymentRouter.put("/putPayment", putPayment);

paymentRouter.delete("/deletePayment", deletePayment);

module.exports = paymentRouter;