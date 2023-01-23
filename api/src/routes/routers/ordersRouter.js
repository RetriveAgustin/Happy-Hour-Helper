const { Router } = require("express");
const ordersRouter = Router();

const {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
  restoreOrder
} = require("../controllers/orderController");

ordersRouter.get("/getOrder", getOrder);

ordersRouter.get("/restoreOrder", restoreOrder);

ordersRouter.post("/postOrder", postOrder);

ordersRouter.put("/putOrder", putOrder);

ordersRouter.delete("/deleteOrder", deleteOrder);

module.exports = ordersRouter;