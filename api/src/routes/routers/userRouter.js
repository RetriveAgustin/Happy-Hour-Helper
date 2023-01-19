const { Router } = require("express");
const userRouter = Router();

const {
  getUser,
  postUser,
  putUser,
  deleteUser,
  restoreUser
} = require("../controllers/UserController");

userRouter.get("/getUser", getUser);

userRouter.get("/restoreUser", restoreUser);

userRouter.post("/postUser", postUser);

userRouter.put("/putUser", putUser);

userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;