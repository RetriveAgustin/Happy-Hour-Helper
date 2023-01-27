const { Router } = require("express");
const userRouter = Router();

const {
  getUser,
  registerUser,
  loginUser,
  putUser,
  deleteUser,
  restoreUser,
  getUserById
} = require("../controllers/userController");

userRouter.get("/getUser", getUser);

userRouter.get("/getUserById", getUserById);

userRouter.post("/registerUser", registerUser)

userRouter.post("/loginUser", loginUser);

userRouter.put("/putUser", putUser);

userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;