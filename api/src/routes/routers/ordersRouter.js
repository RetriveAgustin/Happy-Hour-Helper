const { Router } = require("express");
const ordersRouter = Router();

const {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
<<<<<<< HEAD
=======
  restoreOrder
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/orderController");

ordersRouter.get("/getOrder", getOrder);

<<<<<<< HEAD
=======
ordersRouter.get("/restoreOrder", restoreOrder);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
ordersRouter.post("/postOrder", postOrder);

ordersRouter.put("/putOrder", putOrder);

<<<<<<< HEAD
ordersRouter.put("/deleteOrder", deleteOrder);
=======
ordersRouter.delete("/deleteOrder", deleteOrder);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

module.exports = ordersRouter;