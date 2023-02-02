const { Router } = require("express");
const userRouter = Router();

const {
  getUser,
  getUserById,
  getUserByEmail,
  registerUser,
  loginUser,
  putUser,
  deleteUser,
  restoreUser,
} = require("../controllers/userController");

userRouter.get("/getUser", getUser);

userRouter.get("/getUserById", getUserById);

userRouter.get("/getUserByEmail", getUserByEmail);

userRouter.post("/registerUser", registerUser)

userRouter.post("/loginUser", loginUser);

userRouter.put("/putUser", putUser);

userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;