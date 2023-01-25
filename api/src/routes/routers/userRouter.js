const { Router } = require("express");
const userRouter = Router();

const {
  getUser,
  postUser,
  putUser,
  deleteUser,
  restoreUser,
  getUserById
} = require("../controllers/userController");

userRouter.get("/getUser", getUser);

userRouter.get("/getUserById", getUserById);

userRouter.get("/getUserById", getUserById);

userRouter.post("/postUser", postUser);

userRouter.put("/putUser", putUser);

userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;