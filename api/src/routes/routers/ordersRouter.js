const { Router } = require("express");
const ordersRouter = Router();

const {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
} = require("../controllers/orderController");

ordersRouter.get("/getOrder", getOrder);

ordersRouter.post("/postOrder", postOrder);

ordersRouter.put("/putOrder", putOrder);

ordersRouter.put("/deleteOrder", deleteOrder);

module.exports = ordersRouter;