const { Router } = require("express");
const paymentRouter = Router();

const {
  getPayment,
  postPayment,
  putPayment,
  deletePayment,
<<<<<<< HEAD
=======
  restorePayment
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/payment_methodController");

paymentRouter.get("/getPayment", getPayment);

<<<<<<< HEAD
=======
paymentRouter.get("/restorePayment", restorePayment);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
paymentRouter.post("/postPayment", postPayment);

paymentRouter.put("/putPayment", putPayment);

<<<<<<< HEAD
paymentRouter.put("/deletePayment", deletePayment);
=======
paymentRouter.delete("/deletePayment", deletePayment);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = paymentRouter;